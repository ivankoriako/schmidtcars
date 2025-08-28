import { 
	Car, 
	CarsData, 
	CarCategory, 
	CarClass, 
	FuelType, 
	TransmissionType, 
	PriceRange,
	createPrice,
	createYear,
	createSeats,
	CarsStatistics,
	CacheOptions
} from '@/types'

// Экспортируем типы для использования в других компонентах
export type { CarClass, CarCategory, FuelType, TransmissionType, PriceRange }

// Базовые данные автомобилей с валидацией
const carsData: Car[] = [
	// 🚐 КОМФОРТ
	{
		id: 'honda-stepwagon',
		name: 'Honda StepWagon 2023',
		class: 'Комфорт',
		engine: '1.5 Turbo',
		fuelConsumption: '7л/100км',
		year: createYear(2023),
		pricePerHour: createPrice(5000),
		image: '/cars/honda-stepwagon.jpg',
		description: 'Практичный и экономичный минивэн с уникальными раздвижными дверями Magic Slide. Идеален для семейных поездок и перевозки пассажиров. Высокая надежность Honda и отличная экономичность.',
		features: ['8 мест', 'Magic Slide двери', 'Экономичный расход', 'Надежность Honda'],
		category: 'minivans',
		available: true,
		seats: createSeats(8),
		transmission: 'automatic',
		fuelType: 'gasoline',
		popularity: 72
	},
	{
		id: 'mercedes-sprinter',
		name: 'Mercedes-Benz Sprinter 2022',
		class: 'Комфорт',
		engine: '2.2 Diesel',
		fuelConsumption: '8л/100км',
		year: createYear(2022),
		pricePerHour: createPrice(6000),
		image: '/cars/mercedes-sprinter.jpg',
		description: 'Вместительный микроавтобус с высоким потолком и большим багажным отделением. Идеален для групповых поездок, экскурсий и корпоративных мероприятий. Комфорт и надежность Mercedes-Benz.',
		features: ['20 мест', 'Кондиционер', 'Высокий потолок', 'Большой багажник'],
		category: 'minivans',
		available: true,
		seats: createSeats(20),
		transmission: 'automatic',
		fuelType: 'diesel',
		popularity: 70
	},
	{
		id: 'toyota-camry',
		name: 'Toyota Camry 2023',
		class: 'Комфорт',
		engine: '2.5 Hybrid',
		fuelConsumption: '5л/100км',
		year: createYear(2023),
		pricePerHour: createPrice(5000),
		image: '/cars/toyota-camry.jpg',
		description: 'Элегантный седан с гибридной системой и передовыми технологиями безопасности. Идеален для деловых поездок и создания нужного впечатления. Toyota Safety Sense и отличная экономичность.',
		features: ['5 мест', 'Hybrid система', 'Toyota Safety Sense', 'Экономичность'],
		category: 'sedans',
		available: true,
		seats: createSeats(5),
		transmission: 'automatic',
		fuelType: 'hybrid',
		popularity: 85
	},
	{
		id: 'toyota-harrier',
		name: 'Toyota Harrier 2023',
		class: 'Комфорт',
		engine: '2.0 Hybrid',
		fuelConsumption: '6л/100км',
		year: createYear(2023),
		pricePerHour: createPrice(9000),
		image: '/cars/toyota-harrier.jpg',
		description: 'Современный кроссовер с гибридной системой и панорамной крышей. Стильный дизайн, премиальная аудиосистема JBL и передовые технологии. Идеален для городских поездок и путешествий.',
		features: ['5 мест', 'Hybrid система', 'Панорамная крыша', 'JBL аудио'],
		category: 'suvs',
		available: true,
		seats: createSeats(5),
		transmission: 'automatic',
		fuelType: 'hybrid',
		popularity: 80
	},
	
	// 🌟 ПРЕМИУМ
	{
		id: 'toyota-crown',
		name: 'Toyota Crown 2022',
		class: 'Премиум',
		engine: '2.5 Hybrid',
		fuelConsumption: '6л/100км',
		year: createYear(2022),
		pricePerHour: createPrice(8000),
		image: '/cars/toyota-crown.jpg',
		description: 'Премиальный седан с элегантным дизайном и гибридной системой. Идеален для VIP-перевозок и создания особого впечатления. Toyota Safety Sense и премиальный комфорт для требовательных клиентов.',
		features: ['5 мест', 'Hybrid система', 'Toyota Safety Sense', 'Премиум комфорт'],
		category: 'sedans',
		available: true,
		seats: createSeats(5),
		transmission: 'automatic',
		fuelType: 'hybrid',
		popularity: 75
	},
	{
		id: 'toyota-prado',
		name: 'Land Cruiser Prado 2022',
		class: 'Премиум',
		engine: '2.8 Diesel',
		fuelConsumption: '8л/100км',
		year: createYear(2022),
		pricePerHour: createPrice(8000),
		image: '/cars/toyota-prado.jpg',
		description: 'Легендарный внедорожник с системой Multi-Terrain Select и Crawl Control. Идеален для поездок по бездорожью и экстремальных условий. Надежность Toyota и 7-местный комфорт.',
		features: ['7 мест', 'Multi-Terrain Select', 'Crawl Control', 'Надежность Toyota'],
		category: 'suvs',
		available: true,
		seats: createSeats(7),
		transmission: 'automatic',
		fuelType: 'diesel',
		popularity: 85
	},
	{
		id: 'toyota-alphard-2014',
		name: 'Toyota Alphard 2014',
		class: 'Премиум',
		engine: '3.5 V6',
		fuelConsumption: '11л/100км',
		year: createYear(2014),
		pricePerHour: createPrice(9000),
		image: '/cars/toyota-alphard-2014.jpg',
		description: 'Классический VIP-минивэн с отдельными креслами и панорамной крышей. Проверенная временем надежность и роскошный комфорт. Идеален для VIP-перевозок и семейных поездок.',
		features: ['7 мест VIP', 'Отдельные кресла', 'Панорамная крыша', 'Проверенная надежность'],
		category: 'minivans',
		available: true,
		seats: createSeats(7),
		transmission: 'automatic',
		fuelType: 'gasoline',
		popularity: 78
	},
	{
		id: 'lexus-rx-350',
		name: 'Lexus RX 350 2023',
		class: 'Премиум',
		engine: '3.5 V6',
		fuelConsumption: '9л/100км',
		year: createYear(2023),
		pricePerHour: createPrice(10000),
		image: '/cars/lexus-rx-350.jpg',
		description: 'Премиальный кроссовер Lexus с мощным V6 двигателем и элегантным дизайном. Комфорт без компромиссов и передовые технологии. Идеален для требовательных клиентов и VIP-перевозок.',
		features: ['5 мест', 'Lexus Safety System+', 'Mark Levinson аудио', 'Премиум комфорт'],
		category: 'suvs',
		available: true,
		seats: createSeats(5),
		transmission: 'automatic',
		fuelType: 'gasoline',
		popularity: 82
	},
	{
		id: 'lixiang-li9',
		name: 'Li Xiang Li9 2023',
		class: 'Премиум',
		engine: '1.5T PHEV',
		fuelConsumption: '5л/100км',
		year: createYear(2023),
		pricePerHour: createPrice(10000),
		image: '/cars/lixiang-li9.jpg',
		description: 'Инновационный PHEV с матричными фарами и системой ADAS. Будущее автомобильной индустрии уже здесь. Экономия топлива и мощь в одном автомобиле. Идеален для экологически сознательных клиентов.',
		features: ['6 мест', 'Plug-in Hybrid', 'Матричные фары', 'ADAS система'],
		category: 'suvs',
		available: true,
		seats: createSeats(6),
		transmission: 'automatic',
		fuelType: 'hybrid',
		popularity: 85
	},
	{
		id: 'toyota-alphard',
		name: 'Toyota Alphard 2023',
		class: 'Премиум',
		engine: '3.5 V6',
		fuelConsumption: '10л/100км',
		year: createYear(2023),
		pricePerHour: createPrice(11000),
		image: '/cars/toyota-alphard.jpg',
		description: 'Новейший VIP-минивэн с отдельными креслами и панорамной крышей. Премиальный салон и максимальный комфорт для особых случаев. Идеален для VIP-перевозок и эксклюзивных мероприятий.',
		features: ['7 мест VIP', 'Отдельные кресла', 'Панорамная крыша', 'Премиум салон'],
		category: 'minivans',
		available: true,
		seats: createSeats(7),
		transmission: 'automatic',
		fuelType: 'gasoline',
		popularity: 92
	},
	{
		id: 'mercedes-gl-400',
		name: 'Mercedes-Benz GL 400 2022',
		class: 'Премиум',
		engine: '3.0 V6 Turbo',
		fuelConsumption: '10л/100км',
		year: createYear(2022),
		pricePerHour: createPrice(10000),
		image: '/cars/mercedes-gl-400.jpg',
		description: 'Премиальный немецкий внедорожник с системой 4MATIC и пневматической подвеской AirMatic. Немецкая роскошь и комфорт для всей семьи. Идеален для путешествий и VIP-перевозок.',
		features: ['7 мест', '4MATIC система', 'AirMatic подвеска', 'Немецкий комфорт'],
		category: 'suvs',
		available: true,
		seats: createSeats(7),
		transmission: 'automatic',
		fuelType: 'gasoline',
		popularity: 78
	},
	
	// 💼 БИЗНЕС
	{
		id: 'mercedes-e200',
		name: 'Mercedes-Benz E200 2023',
		class: 'Бизнес',
		engine: '2.0 Turbo',
		fuelConsumption: '7л/100км',
		year: createYear(2023),
		pricePerHour: createPrice(7000),
		image: '/cars/mercedes-e200.jpg',
		description: 'Элегантный бизнес-седан Mercedes-Benz с системой MBUX и немецким качеством. Идеален для демонстрации статуса и успеха. Комфортная подвеска и премиальные технологии для требовательных клиентов.',
		features: ['5 мест', 'MBUX система', 'Комфортная подвеска', 'Немецкое качество'],
		category: 'sedans',
		available: true,
		seats: createSeats(5),
		transmission: 'automatic',
		fuelType: 'gasoline',
		popularity: 90
	},
	{
		id: 'lexus-lx-570',
		name: 'Lexus LX 570 2022',
		class: 'Бизнес',
		engine: '5.7 V8',
		fuelConsumption: '15л/100км',
		year: createYear(2022),
		pricePerHour: createPrice(13000),
		image: '/cars/lexus-lx-570.jpg',
		description: 'Легендарный Lexus LX 570 с мощным V8 двигателем и аудиосистемой Mark Levinson. Царь дорог с VIP-салоном и системой Multi-Terrain Monitor. Максимальный комфорт и престиж для особых случаев.',
		features: ['8 мест', 'Mark Levinson', 'Multi-Terrain Monitor', 'VIP салон'],
		category: 'suvs',
		available: true,
		seats: createSeats(8),
		transmission: 'automatic',
		fuelType: 'gasoline',
		popularity: 88
	},
	{
		id: 'lexus-lx-570-2',
		name: 'Lexus LX 570 VIP 2023',
		class: 'Бизнес',
		engine: '5.7 V8',
		fuelConsumption: '15л/100км',
		year: createYear(2023),
		pricePerHour: createPrice(14000),
		image: '/cars/lexus-lx-570-2.jpg',
		description: 'Эксклюзивный Lexus LX 570 VIP с премиальной аудиосистемой Mark Levinson Premium. Ultimate luxury для истинных ценителей роскоши. Multi-Terrain Monitor и VIP-салон для максимального комфорта.',
		features: ['8 мест VIP', 'Mark Levinson Premium', 'Multi-Terrain Monitor', 'Ultimate luxury'],
		category: 'suvs',
		available: true,
		seats: createSeats(8),
		transmission: 'automatic',
		fuelType: 'gasoline',
		popularity: 92
	},
	{
		id: 'lexus-lx',
		name: 'Lexus LX 600 2023',
		class: 'Бизнес',
		engine: '3.5 V6 Twin-Turbo',
		fuelConsumption: '13л/100км',
		year: createYear(2023),
		pricePerHour: createPrice(14000),
		image: '/cars/lexus-lx.jpg',
		description: 'Новейший Lexus LX 600 с мощным V6 Twin-Turbo двигателем. Легенда японского премиума с off-road режимами и Multi-Terrain Monitor. VIP-салон для максимального комфорта и престижа.',
		features: ['7 мест', 'Off-road режимы', 'Multi-Terrain Monitor', 'VIP салон'],
		category: 'suvs',
		available: true,
		seats: createSeats(7),
		transmission: 'automatic',
		fuelType: 'gasoline',
		popularity: 95
	},
	{
		id: 'land-cruiser-300',
		name: 'Toyota Land Cruiser 300 2023',
		class: 'Бизнес',
		engine: '3.5 V6 Twin-Turbo',
		fuelConsumption: '11л/100км',
		year: createYear(2023),
		pricePerHour: createPrice(14000),
		image: '/cars/land-cruiser-300.jpg',
		description: 'Легендарный Toyota Land Cruiser 300 с Twin-турбированным двигателем и полным приводом 4WD. Король бездорожья и статуса с системой Multi-Terrain Select. Премиальный салон для VIP-перевозок.',
		features: ['7 мест', 'Полный привод 4WD', 'Twin-турбированный двигатель', 'Multi-Terrain Select'],
		category: 'suvs',
		available: true,
		seats: createSeats(7),
		transmission: 'automatic',
		fuelType: 'gasoline',
		popularity: 98
	},
	{
		id: 'mercedes-s-450',
		name: 'Mercedes-Benz S450 2023',
		class: 'Бизнес',
		engine: '3.0 Turbo',
		fuelConsumption: '9л/100км',
		year: createYear(2023),
		pricePerHour: createPrice(14000),
		image: '/cars/mercedes-s-450.jpg',
		description: 'Mercedes-Benz S450 - абсолютная роскошь для VIP персон. Система MBUX, массаж сидений и панорамная крыша. Идеален для эксклюзивных мероприятий и VIP-перевозок высочайшего уровня.',
		features: ['5 мест', 'MBUX система', 'Массаж сидений', 'Панорамная крыша'],
		category: 'sedans',
		available: true,
		seats: createSeats(5),
		transmission: 'automatic',
		fuelType: 'gasoline',
		popularity: 95
	},
	{
		id: 'bmw-x5-m',
		name: 'BMW X5 M Performance 2023',
		class: 'Бизнес',
		engine: '4.4 V8 Turbo',
		fuelConsumption: '12л/100км',
		year: createYear(2023),
		pricePerHour: createPrice(15000),
		image: '/cars/bmw-x5-m.jpg',
		description: 'BMW X5 M Performance с мощным V8 Turbo двигателем и системой xDrive. Спортивная мощь и драйв в сочетании с люксовым комфортом. M Power для истинных ценителей спортивного люкса.',
		features: ['5 мест', 'M Power', 'xDrive система', 'Спортивный люкс'],
		category: 'suvs',
		available: true,
		seats: createSeats(5),
		transmission: 'automatic',
		fuelType: 'gasoline',
		popularity: 90
	}
]

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

// Функция для создания оптимизированной структуры данных с мемоизацией
const createOptimizedCarsData = (): CarsData => {
	const cacheKey = 'optimized_cars_data'
	
	// Проверяем кэш
	if (isCacheValid(cacheKey)) {
		const cached = cache.get(cacheKey)
		return cached ? cached.data as CarsData : createOptimizedCarsData()
	}
	
	const all = carsData
	const byCategory: Record<CarCategory, Car[]> = {
		sedans: all.filter(car => car.category === 'sedans'),
		suvs: all.filter(car => car.category === 'suvs'),
		minivans: all.filter(car => car.category === 'minivans')
	}
	
	const byClass: Record<CarClass, Car[]> = {
		'Комфорт': all.filter(car => car.class === 'Комфорт'),
		'Бизнес': all.filter(car => car.class === 'Бизнес'),
		'Премиум': all.filter(car => car.class === 'Премиум')
	}
	
	const byPriceRange: Record<PriceRange, Car[]> = {
		budget: all.filter(car => car.pricePerHour < 5000),
		standard: all.filter(car => car.pricePerHour >= 5000 && car.pricePerHour < 8000),
		premium: all.filter(car => car.pricePerHour >= 8000 && car.pricePerHour < 12000),
		luxury: all.filter(car => car.pricePerHour >= 12000)
	}
	
	const byFuelType: Record<FuelType, Car[]> = {
		gasoline: all.filter(car => car.fuelType === 'gasoline'),
		diesel: all.filter(car => car.fuelType === 'diesel'),
		hybrid: all.filter(car => car.fuelType === 'hybrid'),
		electric: all.filter(car => car.fuelType === 'electric')
	}
	
	const byTransmission: Record<TransmissionType, Car[]> = {
		automatic: all.filter(car => car.transmission === 'automatic'),
		manual: all.filter(car => car.transmission === 'manual')
	}
	
	// Создаем расширенную статистику
	const prices = all.map(car => car.pricePerHour)
	const availableCars = all.filter(car => car.available)
	const popularCars = [...all].sort((a, b) => (b.popularity || 0) - (a.popularity || 0)).slice(0, 5)
	const leastPopularCars = [...all].sort((a, b) => (a.popularity || 0) - (b.popularity || 0)).slice(0, 3)
	
	const statistics: CarsStatistics = {
		total: all.length,
		available: availableCars.length,
		byCategory: {
			sedans: byCategory.sedans.length,
			suvs: byCategory.suvs.length,
			minivans: byCategory.minivans.length
		},
		byClass: {
			'Комфорт': byClass['Комфорт'].length,
			'Бизнес': byClass['Бизнес'].length,
			'Премиум': byClass['Премиум'].length
		},
		byFuelType: {
			gasoline: byFuelType.gasoline.length,
			diesel: byFuelType.diesel.length,
			hybrid: byFuelType.hybrid.length,
			electric: byFuelType.electric.length
		},
		byTransmission: {
			automatic: byTransmission.automatic.length,
			manual: byTransmission.manual.length
		},
		averagePrice: prices.reduce((sum, price) => sum + price, 0) / prices.length,
		priceRange: {
			min: Math.min(...prices),
			max: Math.max(...prices)
		},
		popularity: {
			mostPopular: popularCars,
			leastPopular: leastPopularCars
		},
		maintenance: {
			needsService: 0, // Пока не реализовано
			excellent: all.length,
			good: 0
		}
	}
	
	const result: CarsData = {
		all,
		byCategory,
		byClass,
		byPriceRange,
		byFuelType,
		byTransmission,
		statistics,
		cache: {
			lastUpdated: new Date(),
			version: '2.0.0'
		}
	}
	
	// Сохраняем в кэш
	cache.set(cacheKey, {
		data: result as unknown,
		timestamp: Date.now()
	})
	
	return result
}

// Создаем оптимизированную структуру данных
export const carsDataOptimized = createOptimizedCarsData()

// Экспортируем для обратной совместимости
export const cars = carsDataOptimized.all

// Оптимизированные функции фильтрации с мемоизацией
export const getCarsByCategory = (category: CarCategory): Car[] => {
	const cacheKey = `cars_by_category_${category}`
	
	if (isCacheValid(cacheKey)) {
		const cached = cache.get(cacheKey)
		return cached ? cached.data as Car[] : []
	}
	
	if (!carsDataOptimized) return []
	const result = carsDataOptimized.byCategory[category]
	
	cache.set(cacheKey, {
		data: result,
		timestamp: Date.now()
	})
	
	return result
}

export const getCarsByClass = (carClass: CarClass): Car[] => {
	const cacheKey = `cars_by_class_${carClass}`
	
	if (isCacheValid(cacheKey)) {
		const cached = cache.get(cacheKey)
		return cached ? cached.data as Car[] : []
	}
	
	if (!carsDataOptimized) return []
	const result = carsDataOptimized.byClass[carClass]
	
	cache.set(cacheKey, {
		data: result,
		timestamp: Date.now()
	})
	
	return result
}

export const getCarsByPriceRange = (range: PriceRange): Car[] => {
	const cacheKey = `cars_by_price_${range}`
	
	if (isCacheValid(cacheKey)) {
		const cached = cache.get(cacheKey)
		return cached ? cached.data as Car[] : []
	}
	
	if (!carsDataOptimized) return []
	const result = carsDataOptimized.byPriceRange[range]
	
	cache.set(cacheKey, {
		data: result,
		timestamp: Date.now()
	})
	
	return result
}

export const getCarsByFuelType = (fuelType: FuelType): Car[] => {
	const cacheKey = `cars_by_fuel_${fuelType}`
	
	if (isCacheValid(cacheKey)) {
		const cached = cache.get(cacheKey)
		return cached ? cached.data as Car[] : []
	}
	
	if (!carsDataOptimized) return []
	const result = carsDataOptimized.byFuelType[fuelType]
	
	cache.set(cacheKey, {
		data: result,
		timestamp: Date.now()
	})
	
	return result
}

export const getAvailableCars = (): Car[] => {
	const cacheKey = 'available_cars'
	
	if (isCacheValid(cacheKey)) {
		const cached = cache.get(cacheKey)
		return cached ? cached.data as Car[] : []
	}
	
	if (!carsDataOptimized) return []
	const result = carsDataOptimized.all.filter(car => car.available)
	
	cache.set(cacheKey, {
		data: result,
		timestamp: Date.now()
	})
	
	return result
}

export const getCarsBySeats = (seats: number): Car[] => {
	const cacheKey = `cars_by_seats_${seats}`
	
	if (isCacheValid(cacheKey)) {
		const cached = cache.get(cacheKey)
		return cached ? cached.data as Car[] : []
	}
	
	if (!carsDataOptimized) return []
	const result = carsDataOptimized.all.filter(car => car.seats >= seats)
	
	cache.set(cacheKey, {
		data: result,
		timestamp: Date.now()
	})
	
	return result
}

// Функции для обратной совместимости
export const getSedans = () => getCarsByCategory('sedans')
export const getSUVs = () => getCarsByCategory('suvs')
export const getMinivans = () => getCarsByCategory('minivans')

// Функция для получения статистики
export const getCarsStatistics = (): CarsStatistics => {
	if (!carsDataOptimized) return {
		total: 0,
		available: 0,
		byCategory: { sedans: 0, suvs: 0, minivans: 0 },
		byClass: { 'Комфорт': 0, 'Бизнес': 0, 'Премиум': 0 },
		byFuelType: { gasoline: 0, diesel: 0, hybrid: 0, electric: 0 },
		byTransmission: { automatic: 0, manual: 0 },
		averagePrice: 0,
		priceRange: { min: 0, max: 0 },
		popularity: { mostPopular: [], leastPopular: [] },
		maintenance: { needsService: 0, excellent: 0, good: 0 }
	}
	return carsDataOptimized.statistics
}

// Функция для поиска автомобиля по ID
export const getCarById = (id: string): Car | undefined => {
	const cacheKey = `car_by_id_${id}`
	
	if (isCacheValid(cacheKey)) {
		const cached = cache.get(cacheKey)
		return cached ? cached.data as Car | undefined : undefined
	}
	
	if (!carsDataOptimized) return undefined
	const result = carsDataOptimized.all.find(car => car.id === id)
	
	cache.set(cacheKey, {
		data: result,
		timestamp: Date.now()
	})
	
	return result
}

// Функция для очистки кэша
export const clearCache = (): void => {
	cache.clear()
}

// Функция для получения размера кэша
export const getCacheSize = (): number => {
	return cache.size
}

// Функция для получения популярных автомобилей
export const getPopularCars = (limit: number = 5): Car[] => {
	if (!carsDataOptimized) return []
	return carsDataOptimized.statistics.popularity.mostPopular.slice(0, limit)
}

// Функция для получения автомобилей по популярности
export const getCarsByPopularity = (minPopularity: number = 0): Car[] => {
	if (!carsDataOptimized) return []
	return carsDataOptimized.all.filter(car => (car.popularity || 0) >= minPopularity)
} 