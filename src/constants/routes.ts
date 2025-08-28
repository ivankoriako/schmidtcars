// Основные маршруты приложения
export const ROUTES = {
	HOME: '/',
	ABOUT: '/about',
	CONTACTS: '/?scroll=contact-form',
	CONDITIONS: '/usloviya',
	CARS: '/avtopark',
	VEF: '/arenda-avto-vef'
} as const

// Названия страниц
export const PAGE_TITLES = {
	[ROUTES.HOME]: 'Главная',
	[ROUTES.ABOUT]: 'О компании',
	[ROUTES.CONTACTS]: 'Контакты',
	[ROUTES.CONDITIONS]: 'Условия аренды',
	[ROUTES.CARS]: 'Автопарк',
	[ROUTES.VEF]: 'ВЭФ 2025'
} as const

// Метаданные страниц
export const PAGE_METADATA = {
	[ROUTES.HOME]: {
		title: 'Аренда авто с водителем во Владивостоке | SCHMIDT Cars',
		description: 'Премиум и бизнес авто, автобусы и микроавтобусы. Услуги трансфера на ВЭФ. Бронирование и подача автомобилей.',
		keywords: 'аренда авто с водителем Владивосток, ВЭФ 2025, трансфер аэропорт, премиум автомобили'
	},
	[ROUTES.ABOUT]: {
		title: 'О компании SCHMIDT Cars | Аренда авто во Владивостоке',
		description: 'Узнайте больше о компании SCHMIDT Cars. Премиум аренда автомобилей с водителем во Владивостоке.',
		keywords: 'о компании, SCHMIDT Cars, аренда авто Владивосток, история компании'
	},
	[ROUTES.CONTACTS]: {
		title: 'Контакты SCHMIDT Cars | Аренда авто во Владивостоке',
		description: 'Свяжитесь с нами для бронирования автомобиля. Контакты SCHMIDT Cars во Владивостоке.',
		keywords: 'контакты, SCHMIDT Cars, телефон, адрес, Владивосток'
	},
	[ROUTES.CONDITIONS]: {
		title: 'Условия аренды | SCHMIDT Cars',
		description: 'Условия аренды автомобилей с водителем. Требования к документам и правила бронирования.',
		keywords: 'условия аренды, документы, правила, требования'
	},
	[ROUTES.CARS]: {
		title: 'Автопарк | SCHMIDT Cars',
		description: 'Наш автопарк: премиум и бизнес автомобили, микроавтобусы для любых поездок.',
		keywords: 'автопарк, автомобили, Mercedes, BMW, Lexus, микроавтобусы'
	},
	[ROUTES.VEF]: {
		title: 'ВЭФ 2025 | Трансфер и аренда авто | SCHMIDT Cars',
		description: 'Услуги трансфера для ВЭФ 2025. Аренда автомобилей для участников и гостей форума.',
		keywords: 'ВЭФ 2025, трансфер, форум, аренда авто ВЭФ'
	}
} as const

// Навигационные ссылки
export const NAVIGATION_LINKS = [
	{
		href: ROUTES.HOME,
		label: 'Главная',
		description: 'Главная страница'
	},
	{
		href: ROUTES.CARS,
		label: 'Автопарк',
		description: 'Наши автомобили'
	},
	{
		href: ROUTES.VEF,
		label: 'ВЭФ 2025',
		description: 'Услуги для форума'
	},
	{
		href: ROUTES.CONDITIONS,
		label: 'Условия',
		description: 'Условия аренды'
	},
	{
		href: ROUTES.ABOUT,
		label: 'О нас',
		description: 'О компании'
	},
	{
		href: ROUTES.CONTACTS,
		label: 'Контакты',
		description: 'Связаться с нами'
	}
] as const

// Социальные сети
export const SOCIAL_LINKS = {
	TELEGRAM: 'https://t.me/schmidtcars',
	WHATSAPP: 'https://wa.me/7XXXXXXXXXX',
	VK: 'https://vk.com/schmidtcars'
} as const

// Контактная информация
export const CONTACT_INFO = {
	PHONE: '+7-XXX-XXX-XX-XX',
	EMAIL: 'info@schmidt-cars.ru',
	ADDRESS: 'Владивосток, Приморский край',
	WORKING_HOURS: 'Ежедневно с 08:00 до 21:00'
} as const 