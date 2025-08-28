'use client'

import Link from 'next/link'
import { cars } from '@/data/cars'

// Функция для форматирования цены без проблем с гидратацией
const formatPrice = (price: number): string => {
	return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

export default function QuickCarsSection() {
	return (
		<section className="relative py-20 pt-32 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 overflow-hidden">
			{/* Статичный фон */}
			<div className="absolute inset-0">
				<div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl"></div>
				<div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-slate-500/10 rounded-full blur-3xl"></div>
			</div>
			
			{/* Статичная сетка */}
			<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
			
			<div className="container-modern relative z-10">
				{/* Заголовок секции */}
				<div className="text-center space-y-6 mb-16">
					<div className="inline-block px-6 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full backdrop-blur-sm">
						<span className="text-yellow-400 font-bold text-sm tracking-widest uppercase">Автопарк • Schmidt Cars</span>
					</div>
					<h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black">
						<span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
							Наш автопарк
						</span>
					</h2>
					<p className="text-body text-gray-300 max-w-3xl mx-auto">
						Эксклюзивная коллекция роскошных автомобилей для самых взыскательных клиентов
					</p>
				</div>
				
				{/* Полный автопарк */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
					{cars.map((car) => (
						<div key={car.id} className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30 hover:shadow-xl transition-all duration-500 group">
							{/* Изображение */}
							<div className="relative h-48 sm:h-44 overflow-hidden rounded-t-3xl">
								<img 
									src={car.image} 
									alt={car.name}
									className="w-full h-full object-cover object-center object-bottom transition-transform duration-700 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
								<div className="absolute bottom-3 left-3 right-3">
									<div className="inline-block px-2 py-1 bg-yellow-400/90 text-black text-xs font-bold rounded-full">
										{car.class}
									</div>
								</div>
							</div>
							
							{/* Информация */}
							<div className="p-4 space-y-3">
								<h3 className="text-lg font-bold text-white line-clamp-2 group-hover:text-yellow-400 transition-colors duration-300">{car.name}</h3>
								<div className="space-y-1">
									<div className="flex justify-between text-xs">
										<span className="text-gray-400">Двигатель:</span>
										<span className="text-white truncate ml-2">{car.engine}</span>
									</div>
									<div className="flex justify-between text-xs">
										<span className="text-gray-400">Расход:</span>
										<span className="text-white">{car.fuelConsumption}</span>
									</div>
									<div className="flex justify-between text-xs">
										<span className="text-gray-400">Год:</span>
										<span className="text-white">{car.year}</span>
									</div>
								</div>
								
								{/* Цена */}
								<div className="flex items-center justify-between pt-2 border-t border-gray-700 mb-3">
									<div className="text-xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
										{formatPrice(car.pricePerHour)}
									</div>
									<div className="text-xs text-gray-400">в час</div>
								</div>
								
								{/* Кнопка бронирования */}
								<Link 
									href={`/?scroll=contact-form&car=${encodeURIComponent(car.name)}`}
									className="relative inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 text-black font-bold text-sm rounded-xl shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group/btn overflow-hidden"
								>
									{/* Блики */}
									<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
									
									{/* Иконка */}
									<svg className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
									</svg>
									
									{/* Текст */}
									<span className="relative z-10">Забронировать</span>
								</Link>
							</div>
						</div>
					))}
				</div>
				
				{/* Статистика */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
					<div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30 text-center space-y-4">
						<div className="text-4xl font-bold text-yellow-400">50+</div>
						<div className="text-caption text-gray-400">Автомобилей в парке</div>
					</div>
					<div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30 text-center space-y-4">
						<div className="text-4xl font-bold text-yellow-400">24/7</div>
						<div className="text-caption text-gray-400">Доступность сервиса</div>
					</div>
					<div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30 text-center space-y-4">
						<div className="text-4xl font-bold text-yellow-400">VIP</div>
						<div className="text-caption text-gray-400">Уровень обслуживания</div>
					</div>
				</div>
				
				{/* Кнопка "Забронировать" */}
				<div className="text-center">
					<Link 
						href="/?scroll=contact-form" 
						className="btn-modern-lg bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-300 hover:to-yellow-400 transition-colors duration-300"
					>
						Забронировать автомобиль
						<svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
					</Link>
				</div>
			</div>
		</section>
	)
} 