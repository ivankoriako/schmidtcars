import { Car, ContactFormData } from '@/types'

// Валидация данных автомобиля
export const validateCarData = (car: Car): { isValid: boolean; errors: string[] } => {
	const errors: string[] = []
	
	if (!car.id) errors.push('ID автомобиля обязателен')
	if (!car.name) errors.push('Название автомобиля обязательно')
	if (!car.class) errors.push('Класс автомобиля обязателен')
	if (!car.engine) errors.push('Двигатель обязателен')
	if (!car.fuelConsumption) errors.push('Расход топлива обязателен')
	if (!car.year) errors.push('Год выпуска обязателен')
	if (!car.pricePerHour) errors.push('Цена обязательна')
	if (!car.image) errors.push('Изображение обязательно')
	if (!car.features || car.features.length === 0) errors.push('Характеристики обязательны')
	if (!car.category) errors.push('Категория обязательна')
	if (car.available === undefined) errors.push('Статус доступности обязателен')
	if (!car.seats) errors.push('Количество мест обязательно')
	if (!car.transmission) errors.push('Тип трансмиссии обязателен')
	if (!car.fuelType) errors.push('Тип топлива обязателен')
	
	return {
		isValid: errors.length === 0,
		errors
	}
}

// Валидация формы контактов
export const validateContactForm = (data: ContactFormData): { isValid: boolean; errors: Record<string, string> } => {
	const errors: Record<string, string> = {}
	
	// Валидация телефона
	const phoneRegex = /^(\+7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/
	if (!data.phone || !phoneRegex.test(data.phone.replace(/\s/g, ''))) {
		errors.phone = 'Введите корректный номер телефона'
	}
	
	// Валидация согласия на обработку персональных данных
	if (!data.privacyConsent) {
		errors.privacyConsent = 'Необходимо согласие на обработку персональных данных'
	}
	
	return {
		isValid: Object.keys(errors).length === 0,
		errors
	}
}

// Валидация цены
export const validatePrice = (price: number): boolean => {
	return price >= 0 && price <= 100000
}

// Валидация года
export const validateYear = (year: number): boolean => {
	const currentYear = new Date().getFullYear()
	return year >= 1900 && year <= currentYear + 1
}

// Валидация количества мест
export const validateSeats = (seats: number): boolean => {
	return seats >= 1 && seats <= 20
}

// Валидация URL изображения
export const validateImageUrl = (url: string): boolean => {
	try {
		new URL(url)
		return true
	} catch {
		return false
	}
}

// Валидация ID
export const validateId = (id: string): boolean => {
	return id.length > 0 && /^[a-zA-Z0-9-_]+$/.test(id)
} 