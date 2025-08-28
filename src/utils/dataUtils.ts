import { 
	Car, 
	CarFilters, 
	SortOption, 
	SearchOptions, 
	PaginationOptions,
	FuelType,
	TransmissionType,
	CarClass,
	CarCategory,
	PriceRange,
	CacheOptions,
	ApiResponse
} from '@/types'

// Кэш для мемоизации
const cache = new Map<string, { data: unknown; timestamp: number }>()
const CACHE_TTL = 5 * 60 * 1000 // 5 минут

// Функция для проверки актуальности кэша
const isCacheValid = (key: string): boolean => {
	const cached = cache.get(key)
	if (!cached) return false
	
	const now = Date.now()
	return (now - cached.timestamp) < CACHE_TTL
}

// Функция для сохранения в кэш
const setCache = (key: string, data: unknown): void => {
	cache.set(key, {
		data,
		timestamp: Date.now()
	})
}

// Функция для получения из кэша
const getCache = <T>(key: string): T | null => {
	if (isCacheValid(key)) {
		const cached = cache.get(key)
		return cached ? cached.data as T : null
	}
	return null
}

// Функция для фильтрации автомобилей с мемоизацией
export const filterCars = (cars: Car[], filters: CarFilters): Car[] => {
	const cacheKey = `filter_cars_${JSON.stringify(filters)}_${cars.length}`
	
	const cached = getCache<Car[]>(cacheKey)
	if (cached) return cached
	
	const filtered = cars.filter(car => {
		// Фильтр по категории
		if (filters.category && car.category !== filters.category) {
			return false
		}
		
		// Фильтр по классу
		if (filters.class && car.class !== filters.class) {
			return false
		}
		
		// Фильтр по ценовому диапазону
		if (filters.priceRange) {
			const { min, max } = filters.priceRange
			if (car.pricePerHour < min || car.pricePerHour > max) {
				return false
			}
		}
		
		// Фильтр по количеству мест
		if (filters.seats && car.seats < filters.seats) {
			return false
		}
		
		// Фильтр по доступности
		if (filters.available !== undefined && car.available !== filters.available) {
			return false
		}
		
		// Фильтр по типу топлива
		if (filters.fuelType && car.fuelType !== filters.fuelType) {
			return false
		}
		
		// Фильтр по типу трансмиссии
		if (filters.transmission && car.transmission !== filters.transmission) {
			return false
		}
		
		// Фильтр по году
		if (filters.year) {
			const { min, max } = filters.year
			if (car.year < min || car.year > max) {
				return false
			}
		}
		
		return true
	})
	
	setCache(cacheKey, filtered)
	return filtered
}

// Функция для сортировки автомобилей с улучшенными опциями
export const sortCars = (cars: Car[], sortOption: SortOption): Car[] => {
	const cacheKey = `sort_cars_${sortOption}_${cars.length}`
	
	const cached = getCache<Car[]>(cacheKey)
	if (cached) return cached
	
	const sortedCars = [...cars]
	
	switch (sortOption) {
		case 'price-asc':
			sortedCars.sort((a, b) => a.pricePerHour - b.pricePerHour)
			break
		case 'price-desc':
			sortedCars.sort((a, b) => b.pricePerHour - a.pricePerHour)
			break
		case 'year-desc':
			sortedCars.sort((a, b) => b.year - a.year)
			break
		case 'name-asc':
			sortedCars.sort((a, b) => a.name.localeCompare(b.name))
			break
		case 'popularity':
			sortedCars.sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
			break
		case 'seats-asc':
			sortedCars.sort((a, b) => a.seats - b.seats)
			break
		case 'seats-desc':
			sortedCars.sort((a, b) => b.seats - a.seats)
			break
		default:
			// По умолчанию сортируем по популярности
			sortedCars.sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
	}
	
	setCache(cacheKey, sortedCars)
	return sortedCars
}

// Улучшенная функция для поиска автомобилей
export const searchCars = (cars: Car[], query: string): Car[] => {
	if (!query.trim()) return cars
	
	const cacheKey = `search_cars_${query.toLowerCase()}_${cars.length}`
	
	const cached = getCache<Car[]>(cacheKey)
	if (cached) return cached
	
	const searchTerm = query.toLowerCase()
	
	const results = cars.filter(car => {
		return (
			car.name.toLowerCase().includes(searchTerm) ||
			car.class.toLowerCase().includes(searchTerm) ||
			car.engine.toLowerCase().includes(searchTerm) ||
			car.features.some(feature => 
				feature.toLowerCase().includes(searchTerm)
			) ||
			car.category.toLowerCase().includes(searchTerm) ||
			car.fuelType.toLowerCase().includes(searchTerm) ||
			car.transmission.toLowerCase().includes(searchTerm) ||
			car.year.toString().includes(searchTerm) ||
			car.pricePerHour.toString().includes(searchTerm) ||
			car.seats.toString().includes(searchTerm)
		)
	})
	
	setCache(cacheKey, results)
	return results
}

// Функция для пагинации с улучшенной типизацией
export const paginateCars = (
	cars: Car[], 
	pagination: PaginationOptions
): { cars: Car[], pagination: PaginationOptions } => {
	const { page, limit } = pagination
	const startIndex = (page - 1) * limit
	const endIndex = startIndex + limit
	
	const result = {
		cars: cars.slice(startIndex, endIndex),
		pagination: {
			...pagination,
			total: cars.length
		}
	}
	
	return result
}

// Функция для комплексного поиска и фильтрации с мемоизацией
export const searchAndFilterCars = (
	cars: Car[],
	options: SearchOptions
): { cars: Car[], pagination: PaginationOptions } => {
	const cacheKey = `search_and_filter_${JSON.stringify(options)}_${cars.length}`
	
	const cached = getCache<{ cars: Car[], pagination: PaginationOptions }>(cacheKey)
	if (cached) return cached
	
	let filteredCars = cars
	
	// Применяем поиск
	if (options.query) {
		filteredCars = searchCars(filteredCars, options.query)
	}
	
	// Применяем фильтры
	filteredCars = filterCars(filteredCars, options.filters)
	
	// Применяем сортировку
	filteredCars = sortCars(filteredCars, options.sort)
	
	// Применяем пагинацию
	const result = paginateCars(filteredCars, options.pagination)
	
	setCache(cacheKey, result)
	return result
}

// Функция для получения уникальных значений с типизацией
export const getUniqueValues = <T>(cars: Car[], field: keyof Car): T[] => {
	const cacheKey = `unique_values_${String(field)}_${cars.length}`
	
	const cached = getCache<T[]>(cacheKey)
	if (cached) return cached
	
	const values = cars.map(car => car[field])
	const uniqueValues = [...new Set(values)] as T[]
	
	setCache(cacheKey, uniqueValues)
	return uniqueValues
}

// Улучшенная функция для получения статистики по фильтрованным автомобилям
export const getFilteredStatistics = (cars: Car[]) => {
	if (cars.length === 0) {
		return {
			total: 0,
			available: 0,
			averagePrice: 0,
			priceRange: { min: 0, max: 0 },
			byClass: {},
			byCategory: {},
			byFuelType: {},
			byTransmission: {},
			popularity: {
				mostPopular: [],
				leastPopular: []
			}
		}
	}
	
	const prices = cars.map(car => car.pricePerHour)
	const availableCars = cars.filter(car => car.available)
	
	const byClass = cars.reduce((acc, car) => {
		acc[car.class] = (acc[car.class] || 0) + 1
		return acc
	}, {} as Record<CarClass, number>)
	
	const byCategory = cars.reduce((acc, car) => {
		acc[car.category] = (acc[car.category] || 0) + 1
		return acc
	}, {} as Record<CarCategory, number>)
	
	const byFuelType = cars.reduce((acc, car) => {
		acc[car.fuelType] = (acc[car.fuelType] || 0) + 1
		return acc
	}, {} as Record<FuelType, number>)
	
	const byTransmission = cars.reduce((acc, car) => {
		acc[car.transmission] = (acc[car.transmission] || 0) + 1
		return acc
	}, {} as Record<TransmissionType, number>)
	
	const popularCars = [...cars].sort((a, b) => (b.popularity || 0) - (a.popularity || 0)).slice(0, 5)
	const leastPopularCars = [...cars].sort((a, b) => (a.popularity || 0) - (b.popularity || 0)).slice(0, 3)
	
	return {
		total: cars.length,
		available: availableCars.length,
		averagePrice: prices.reduce((sum, price) => sum + price, 0) / prices.length,
		priceRange: {
			min: Math.min(...prices),
			max: Math.max(...prices)
		},
		byClass,
		byCategory,
		byFuelType,
		byTransmission,
		popularity: {
			mostPopular: popularCars,
			leastPopular: leastPopularCars
		}
	}
}

// Функция для получения класса автомобиля в читаемом виде
export const getCarClassLabel = (carClass: CarClass): string => {
	const labels: Record<CarClass, string> = {
		'Комфорт': 'Комфорт',
		'Бизнес': 'Бизнес',
		'Премиум': 'Премиум',
		'Люкс': 'Люкс'
	}
	return labels[carClass]
}

// Функция для получения категории автомобиля в читаемом виде
export const getCarCategoryLabel = (category: CarCategory): string => {
	const labels: Record<CarCategory, string> = {
		'sedans': 'Седаны',
		'suvs': 'Внедорожники',
		'minivans': 'Минивэны'
	}
	return labels[category]
}

// Функция для получения цветового класса для типа топлива
export const getFuelTypeColor = (fuelType: FuelType): string => {
	const colors: Record<FuelType, string> = {
		'gasoline': 'text-red-400',
		'diesel': 'text-blue-400',
		'hybrid': 'text-green-400',
		'electric': 'text-purple-400'
	}
	return colors[fuelType]
}

// Функция для получения иконки типа топлива
export const getFuelTypeIcon = (fuelType: FuelType): string => {
	const icons: Record<FuelType, string> = {
		'gasoline': '⛽',
		'diesel': '⛽',
		'hybrid': '🔋',
		'electric': '⚡'
	}
	return icons[fuelType]
}

// Функция для получения иконки трансмиссии
export const getTransmissionIcon = (transmission: TransmissionType): string => {
	const icons: Record<TransmissionType, string> = {
		'automatic': '🔄',
		'manual': '⚙️'
	}
	return icons[transmission]
}

// Функция для получения цветового класса для ценового диапазона
export const getPriceRangeColor = (range: PriceRange): string => {
	const colors: Record<PriceRange, string> = {
		'budget': 'text-green-600',
		'standard': 'text-blue-600',
		'premium': 'text-purple-600',
		'luxury': 'text-red-600'
	}
	return colors[range]
}

// Функция для получения метки ценового диапазона
export const getPriceRangeLabel = (range: PriceRange): string => {
	const labels: Record<PriceRange, string> = {
		'budget': 'Эконом',
		'standard': 'Стандарт',
		'premium': 'Премиум',
		'luxury': 'Люкс'
	}
	return labels[range]
}

// Функция для определения ценового диапазона автомобиля
export const getCarPriceRange = (price: number): PriceRange => {
	if (price < 5000) return 'budget'
	if (price < 8000) return 'standard'
	if (price < 12000) return 'premium'
	return 'luxury'
}

// Функция для создания API ответа
export const createApiResponse = <T>(
	data: T,
	success: boolean = true,
	message?: string,
	errors?: string[]
): ApiResponse<T> => {
	return {
		data,
		success,
		message,
		errors,
		timestamp: new Date()
	}
}

// Функция для очистки кэша
export const clearDataCache = (): void => {
	cache.clear()
}

// Функция для получения размера кэша
export const getDataCacheSize = (): number => {
	return cache.size
}

// Функция для получения статистики кэша
export const getDataCacheStats = () => {
	const entries = Array.from(cache.entries())
	const now = Date.now()
	
	const validEntries = entries.filter(([_, value]) => 
		(now - value.timestamp) < CACHE_TTL
	)
	
	return {
		total: entries.length,
		valid: validEntries.length,
		expired: entries.length - validEntries.length,
		ttl: CACHE_TTL
	}
} 