'use client'

import Link from 'next/link'
import { Car } from '@/types'
import { withDataErrorBoundary, DataErrorFallback } from '../error-boundaries/DataErrorBoundary'
import { formatPrice, formatYear } from '@/utils/formatting'
import { validateCarData } from '@/utils/validation'

interface CarCardProps {
	car: Car
}

// Компонент для отображения ошибки загрузки изображения
const ImageErrorFallback = ({ carName }: { carName: string }) => (
	<div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
		<div className="text-center">
			<div className="text-4xl mb-2" aria-hidden="true">🚗</div>
			<div className="text-gray-400 text-xs">{carName}</div>
		</div>
	</div>
)

// Основной компонент CarCard с обработкой ошибок
function CarCardComponent({ car }: CarCardProps) {
	// Валидация данных
	if (!validateCarData(car).isValid) {
		return (
			<DataErrorFallback 
				error={new Error('Некорректные данные автомобиля')}
				componentName="CarCard"
			/>
		)
	}



	return (
		<div className="group relative h-full flex flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 via-gray-800/90 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20" role="article" aria-labelledby={`car-title-${car.id}`}>
			{/* Анимированный фоновый градиент */}
			<div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 via-yellow-400/5 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

			{/* Изображение автомобиля с улучшенными эффектами */}
			<div className="relative h-64 sm:h-72 md:h-80 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden rounded-t-2xl">
				{car.image && car.image !== '/cars/placeholder.jpg' ? (
					<div 
						className="w-full h-full bg-cover bg-center bg-no-repeat group-hover:scale-110 transition-transform duration-500"
						style={{ backgroundImage: `url(${car.image})` }}
					></div>
				) : (
					<div className="absolute inset-0 flex items-center justify-center">
						<ImageErrorFallback carName={car.name} />
					</div>
				)}



				{/* Класс автомобиля с улучшенным дизайном */}
				<div className="absolute top-3 left-3 z-10">
					<span className={`px-3 py-1.5 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm ${
						car.class === 'Премиум' || car.class === 'Бизнес' ? 'bg-gradient-to-r from-yellow-400 to-yellow-300 text-black' :
						'bg-gradient-to-r from-gray-600 to-gray-500 text-white'
					}`}>
						{car.class}
					</span>
				</div>

				{/* Цена с улучшенным дизайном */}
				<div className="absolute top-3 right-3 z-10">
					<div className="bg-black/80 backdrop-blur-md px-4 py-2.5 rounded-xl border border-yellow-400/20 shadow-xl">
						<div className="text-yellow-400 font-bold text-sm">{formatPrice(car.pricePerHour)}</div>
						<div className="text-gray-400 text-xs text-center">в час</div>
					</div>
				</div>

				{/* Анимированная линия внизу изображения */}
				<div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
			</div>

			{/* Информация об автомобиле с улучшенной типографикой */}
			<div className="p-5 space-y-3 flex-1 flex flex-col relative z-10">
				{/* Название и количество мест */}
				<div className="space-y-2">
					<h3 id={`car-title-${car.id}`} className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors duration-300 leading-tight">
						{car.name}
					</h3>
					<div className="flex items-center justify-end">
						<div className="flex items-center space-x-1 bg-yellow-400/10 px-2 py-1 rounded-lg border border-yellow-400/20">
							<span className="text-yellow-400 text-xs font-semibold">👥</span>
							<span className="text-yellow-400 text-xs font-semibold">{car.seats}</span>
						</div>
					</div>
				</div>

				{/* Описание с преимуществами */}
				<div className="space-y-2 flex-1">
					<p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
						{car.description || 'Комфортный и стильный автомобиль для деловых поездок. Отличная управляемость, современные технологии и премиальный интерьер. Идеальный выбор для создания нужного впечатления.'}
					</p>
				</div>

				{/* Кнопка бронирования с потрясающими эффектами */}
				<div className="mt-auto pt-3">
					<Link
						href={`/?scroll=contact-form&car=${encodeURIComponent(car.name)}`}
						className="w-full relative overflow-hidden bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-300 hover:to-yellow-400 transition-all duration-500 transform hover:scale-105 font-semibold py-2.5 px-4 rounded-xl text-sm shadow-lg hover:shadow-xl hover:shadow-yellow-400/30 group-hover:shadow-2xl inline-flex items-center justify-center"
						aria-label={`Забронировать ${car.name}`}
					>
						{/* Анимированный фон кнопки */}
						<div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
						{/* Анимированная линия */}
						<div className="absolute bottom-0 left-0 h-0.5 bg-white opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-full"></div>
						<span className="relative z-10">Забронировать</span>
					</Link>
				</div>
			</div>

			{/* Анимированная рамка */}
			<div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-yellow-400/20 transition-all duration-500"></div>
		</div>
	)
}

// Экспортируем компонент с ErrorBoundary
export default withDataErrorBoundary(CarCardComponent, 'CarCard') 