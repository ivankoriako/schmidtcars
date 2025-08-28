// Базовые типы для автомобилей
export type CarClass = 'Комфорт' | 'Бизнес' | 'Премиум'
export type CarCategory = 'sedans' | 'suvs' | 'minivans'
export type TransmissionType = 'automatic' | 'manual'
export type FuelType = 'gasoline' | 'diesel' | 'hybrid' | 'electric'
export type PriceRange = 'budget' | 'standard' | 'premium' | 'luxury'

// Валидация для цены
export type Price = number & { __brand: 'Price' }
export const createPrice = (value: number): Price => {
	if (value < 0) throw new Error('Price cannot be negative')
	return value as Price
}

// Валидация для года
export type Year = number & { __brand: 'Year' }
export const createYear = (value: number): Year => {
	const currentYear = new Date().getFullYear()
	if (value < 1900 || value > currentYear + 1) {
		throw new Error(`Year must be between 1900 and ${currentYear + 1}`)
	}
	return value as Year
}

// Валидация для количества мест
export type Seats = number & { __brand: 'Seats' }
export const createSeats = (value: number): Seats => {
	if (value < 1 || value > 20) throw new Error('Seats must be between 1 and 20')
	return value as Seats
}

// Основной интерфейс автомобиля с улучшенной типизацией
export interface Car {
	id: string
	name: string
	class: CarClass
	engine: string
	fuelConsumption: string
	year: Year
	pricePerHour: Price
	image: string
	features: string[]
	category: CarCategory
	available: boolean
	description?: string
	seats: Seats
	transmission: TransmissionType
	fuelType: FuelType
	// Дополнительные поля для расширенной функциональности
	popularity?: number
	maintenanceHistory?: {
		lastService: Date
		nextService: Date
		status: 'excellent' | 'good' | 'needs_service'
	}
	location?: {
		lat: number
		lng: number
		address: string
	}
}

// Улучшенная структура данных с мемоизацией
export interface CarsData {
	all: Car[]
	byCategory: Record<CarCategory, Car[]>
	byClass: Record<CarClass, Car[]>
	byPriceRange: Record<PriceRange, Car[]>
	byFuelType: Record<FuelType, Car[]>
	byTransmission: Record<TransmissionType, Car[]>
	statistics: CarsStatistics
	// Кэш для оптимизации
	cache: {
		lastUpdated: Date
		version: string
	}
}

// Расширенная статистика
export interface CarsStatistics {
	total: number
	available: number
	byCategory: Record<CarCategory, number>
	byClass: Record<CarClass, number>
	byFuelType: Record<FuelType, number>
	byTransmission: Record<TransmissionType, number>
	averagePrice: number
	priceRange: {
		min: number
		max: number
	}
	popularity: {
		mostPopular: Car[]
		leastPopular: Car[]
	}
	maintenance: {
		needsService: number
		excellent: number
		good: number
	}
}

// Улучшенные интерфейсы для сервисов
export interface Service {
	id: string
	title: string
	description: string
	icon?: string
	price?: Price
	duration?: string
	features?: string[]
	category: 'vef' | 'transfer' | 'rental' | 'concierge'
	available: boolean
	popularity?: number
}

// Контактная информация с валидацией
export interface ContactInfo {
	phone: string
	email: string
	address: string
	workingHours: string
	coordinates?: {
		lat: number
		lng: number
	}
	socialMedia?: {
		whatsapp?: string
		telegram?: string
		vk?: string
	}
}

// Условия аренды с улучшенной структурой
export interface RentalConditions {
	withDriver: {
		russianCitizens: {
			documents: string[]
			conditions: string[]
			minAge: number
			experience: string
		}
		foreignCitizens: {
			documents: string[]
			conditions: string[]
			visa: boolean
			internationalLicense: boolean
		}
	}
	withoutDriver: {
		russianCitizens: {
			documents: string[]
			conditions: string[]
			minAge: number
			experience: string
		}
		foreignCitizens: {
			documents: string[]
			conditions: string[]
			visa: boolean
			internationalLicense: boolean
		}
	}
	pricing: {
		hourly: {
			minHours: number
			overtimeRate: number
		}
		daily: {
			discount: number
			maxHours: number
		}
		cancellation: {
			freeHours: number
			penalty: number
		}
	}
}

// Типы для форм с валидацией
export interface ContactFormData {
	phone: string
	privacyConsent?: boolean
	consentDate?: string
}

// Улучшенные типы для фильтрации
export interface CarFilters {
	category?: CarCategory
	class?: CarClass
	priceRange?: {
		min: number
		max: number
	}
	seats?: number
	available?: boolean
	fuelType?: FuelType
	transmission?: TransmissionType
	year?: {
		min: number
		max: number
	}
}

// Типы для сортировки
export type SortOption = 'price-asc' | 'price-desc' | 'year-desc' | 'name-asc' | 'popularity' | 'seats-asc' | 'seats-desc'

// Типы для пагинации
export interface PaginationOptions {
	page: number
	limit: number
	total: number
}

// Типы для поиска
export interface SearchOptions {
	query: string
	filters: CarFilters
	sort: SortOption
	pagination: PaginationOptions
}

// Типы для кэширования
export interface CacheOptions {
	enabled: boolean
	ttl: number // время жизни кэша в миллисекундах
	maxSize: number
}

// Типы для API ответов
export interface ApiResponse<T> {
	data: T
	success: boolean
	message?: string
	errors?: string[]
	timestamp: Date
}

// Типы для аналитики
export interface AnalyticsData {
	pageViews: number
	uniqueVisitors: number
	popularCars: string[]
	popularServices: string[]
	conversionRate: number
	averageSessionDuration: number
} 