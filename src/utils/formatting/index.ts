// Форматирование цены
export const formatPrice = (price: number): string => {
	return new Intl.NumberFormat('ru-RU', {
		style: 'currency',
		currency: 'RUB',
		minimumFractionDigits: 0,
		maximumFractionDigits: 0
	}).format(price)
}

// Форматирование года
export const formatYear = (year: number): string => {
	return year.toString()
}

// Форматирование телефона
export const formatPhone = (phone: string): string => {
	const cleaned = phone.replace(/\D/g, '')
	
	if (cleaned.length === 11) {
		return `+7 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7, 9)}-${cleaned.slice(9)}`
	}
	
	if (cleaned.length === 10) {
		return `+7 (${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 8)}-${cleaned.slice(8)}`
	}
	
	return phone
}

// Форматирование даты
export const formatDate = (date: Date): string => {
	return new Intl.DateTimeFormat('ru-RU', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}).format(date)
}

// Форматирование времени
export const formatTime = (date: Date): string => {
	return new Intl.DateTimeFormat('ru-RU', {
		hour: '2-digit',
		minute: '2-digit'
	}).format(date)
}

// Форматирование длительности
export const formatDuration = (minutes: number): string => {
	const hours = Math.floor(minutes / 60)
	const mins = minutes % 60
	
	if (hours === 0) {
		return `${mins} мин`
	}
	
	if (mins === 0) {
		return `${hours} ч`
	}
	
	return `${hours} ч ${mins} мин`
}

// Форматирование расстояния
export const formatDistance = (meters: number): string => {
	if (meters < 1000) {
		return `${meters} м`
	}
	
	const km = meters / 1000
	return `${km.toFixed(1)} км`
}

// Форматирование размера файла
export const formatFileSize = (bytes: number): string => {
	if (bytes === 0) return '0 Б'
	
	const k = 1024
	const sizes = ['Б', 'КБ', 'МБ', 'ГБ']
	const i = Math.floor(Math.log(bytes) / Math.log(k))
	
	return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

// Форматирование процентов
export const formatPercentage = (value: number, total: number): string => {
	const percentage = (value / total) * 100
	return `${percentage.toFixed(1)}%`
}

// Форматирование числа с разделителями
export const formatNumber = (num: number): string => {
	return new Intl.NumberFormat('ru-RU').format(num)
}

// Форматирование валюты
export const formatCurrency = (amount: number, currency: string = 'RUB'): string => {
	return new Intl.NumberFormat('ru-RU', {
		style: 'currency',
		currency,
		minimumFractionDigits: 0,
		maximumFractionDigits: 2
	}).format(amount)
} 