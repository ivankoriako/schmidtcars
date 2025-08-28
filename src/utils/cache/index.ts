// Типы для кэша
interface CacheEntry<T> {
	data: T
	timestamp: number
	ttl: number
}

interface CacheOptions {
	ttl?: number
	maxSize?: number
}

// Класс для управления кэшем
export class Cache {
	private cache = new Map<string, CacheEntry<unknown>>()
	private readonly defaultTTL: number
	private readonly maxSize: number

	constructor(options: CacheOptions = {}) {
		this.defaultTTL = options.ttl || 5 * 60 * 1000 // 5 минут по умолчанию
		this.maxSize = options.maxSize || 100
	}

	// Установка значения в кэш
	set<T>(key: string, data: T, ttl?: number): void {
		// Очищаем устаревшие записи
		this.cleanup()
		
		// Проверяем размер кэша
		if (this.cache.size >= this.maxSize) {
			this.evictOldest()
		}
		
		this.cache.set(key, {
			data,
			timestamp: Date.now(),
			ttl: ttl || this.defaultTTL
		})
	}

	// Получение значения из кэша
	get<T>(key: string): T | null {
		const entry = this.cache.get(key)
		
		if (!entry) {
			return null
		}
		
		// Проверяем, не истек ли срок действия
		if (Date.now() - entry.timestamp > entry.ttl) {
			this.cache.delete(key)
			return null
		}
		
		return entry.data as T
	}

	// Проверка существования ключа
	has(key: string): boolean {
		return this.get(key) !== null
	}

	// Удаление ключа
	delete(key: string): boolean {
		return this.cache.delete(key)
	}

	// Очистка всего кэша
	clear(): void {
		this.cache.clear()
	}

	// Получение размера кэша
	size(): number {
		this.cleanup()
		return this.cache.size
	}

	// Получение статистики кэша
	stats() {
		const now = Date.now()
		const entries = Array.from(this.cache.entries())
		
		const validEntries = entries.filter(([_, entry]) => 
			(now - entry.timestamp) < entry.ttl
		)
		
		return {
			total: entries.length,
			valid: validEntries.length,
			expired: entries.length - validEntries.length,
			maxSize: this.maxSize,
			defaultTTL: this.defaultTTL
		}
	}

	// Очистка устаревших записей
	private cleanup(): void {
		const now = Date.now()
		
		for (const [key, entry] of this.cache.entries()) {
			if (now - entry.timestamp > entry.ttl) {
				this.cache.delete(key)
			}
		}
	}

	// Удаление самых старых записей
	private evictOldest(): void {
		const entries = Array.from(this.cache.entries())
		entries.sort((a, b) => a[1].timestamp - b[1].timestamp)
		
		// Удаляем 20% самых старых записей
		const toDelete = Math.ceil(entries.length * 0.2)
		
		for (let i = 0; i < toDelete; i++) {
			this.cache.delete(entries[i][0])
		}
	}
}

// Создаем глобальный экземпляр кэша
export const globalCache = new Cache()

// Функции для работы с кэшем
export const setCache = <T>(key: string, data: T, ttl?: number): void => {
	globalCache.set(key, data, ttl)
}

export const getCache = <T>(key: string): T | null => {
	return globalCache.get<T>(key)
}

export const hasCache = (key: string): boolean => {
	return globalCache.has(key)
}

export const deleteCache = (key: string): boolean => {
	return globalCache.delete(key)
}

export const clearCache = (): void => {
	globalCache.clear()
}

export const getCacheStats = () => {
	return globalCache.stats()
}

// Функция для создания кэшированной функции
export const createCachedFunction = <T extends (...args: unknown[]) => unknown>(
	fn: T,
	keyGenerator: (...args: Parameters<T>) => string,
	ttl?: number
): T => {
	return ((...args: Parameters<T>): ReturnType<T> => {
		const key = keyGenerator(...args)
		const cached = getCache<ReturnType<T>>(key)
		
		if (cached !== null) {
			return cached
		}
		
		const result = fn(...args)
		setCache(key, result, ttl)
		
		return result
	}) as T
}

// Функция для мемоизации с кэшем
export const memoize = <T extends (...args: unknown[]) => unknown>(
	fn: T,
	ttl?: number
): T => {
	return createCachedFunction(
		fn,
		(...args) => JSON.stringify(args),
		ttl
	)
} 