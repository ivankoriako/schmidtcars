'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { getCarsByCategory, type CarCategory } from '@/data/cars'
import CarCard from '@/components/ui/CarCard'

const categoryCards = [
	{
		id: 'sedans',
		title: 'Седаны',
		image: '/cars/mercedes-s-450.jpg',
		description: 'Элегантность и престиж для VIP-перевозок'
	},
	{
		id: 'suvs',
		title: 'Внедорожники',
		image: '/cars/land-cruiser-300.jpg',
		description: 'Мощность и комфорт для любых дорог'
	},
	{
		id: 'minivans',
		title: 'Автобусы',
		image: '/cars/toyota-alphard.jpg',
		description: 'Вместительность и роскошь для групп'
	}
]

// Компонент для горизонтального свайпа
function SwipeableCarList({ cars, title }: { cars: any[], title: string }) {
	const scrollRef = useRef<HTMLDivElement>(null)
	const [isDragging, setIsDragging] = useState(false)
	const [startX, setStartX] = useState(0)
	const [scrollLeft, setScrollLeft] = useState(0)
	const [currentIndex, setCurrentIndex] = useState(0)

	const handleMouseDown = useCallback((e: React.MouseEvent) => {
		setIsDragging(true)
		setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0))
		setScrollLeft(scrollRef.current?.scrollLeft || 0)
	}, [])

	const handleMouseLeave = useCallback(() => {
		setIsDragging(false)
	}, [])

	const handleMouseUp = useCallback(() => {
		setIsDragging(false)
	}, [])

	const handleMouseMove = useCallback((e: React.MouseEvent) => {
		if (!isDragging) return
		e.preventDefault()
		const x = e.pageX - (scrollRef.current?.offsetLeft || 0)
		const walk = (x - startX) * 2
		if (scrollRef.current) {
			scrollRef.current.scrollLeft = scrollLeft - walk
		}
	}, [isDragging, startX, scrollLeft])

	// Touch events для мобильных устройств
	const handleTouchStart = useCallback((e: React.TouchEvent) => {
		setIsDragging(true)
		setStartX(e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0))
		setScrollLeft(scrollRef.current?.scrollLeft || 0)
	}, [])

	const handleTouchMove = useCallback((e: React.TouchEvent) => {
		if (!isDragging) return
		const x = e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0)
		const walk = (x - startX) * 2
		if (scrollRef.current) {
			scrollRef.current.scrollLeft = scrollLeft - walk
		}
	}, [isDragging, startX, scrollLeft])

	const handleTouchEnd = useCallback(() => {
		setIsDragging(false)
	}, [])

	// Обработка скролла для обновления индекса
	const handleScroll = useCallback(() => {
		if (scrollRef.current) {
			const scrollLeft = scrollRef.current.scrollLeft
			const itemWidth = scrollRef.current.scrollWidth / cars.length
			const newIndex = Math.round(scrollLeft / itemWidth)
			setCurrentIndex(Math.min(newIndex, cars.length - 1))
		}
	}, [cars.length])

	useEffect(() => {
		const scrollElement = scrollRef.current
		if (scrollElement) {
			scrollElement.addEventListener('scroll', handleScroll)
			return () => scrollElement.removeEventListener('scroll', handleScroll)
		}
	}, [handleScroll])

	return (
		<div className="mb-12">
			{title && (
				<div className="flex items-center mb-6">
					<div className="flex-1 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
					<div className="px-6">
						<h3 className="text-2xl font-bold text-yellow-400">{title}</h3>
					</div>
					<div className="flex-1 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
				</div>
			)}
			
			{/* Мобильная версия с горизонтальным свайпом */}
			<div className="md:hidden">
				<div
					ref={scrollRef}
					className="flex overflow-x-auto scrollbar-hide swipe-container gap-4 pb-4"
					onMouseDown={handleMouseDown}
					onMouseLeave={handleMouseLeave}
					onMouseUp={handleMouseUp}
					onMouseMove={handleMouseMove}
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					onTouchEnd={handleTouchEnd}
				>
					{cars.map((car) => (
						<div key={car.id} className="flex-shrink-0 w-80 swipe-item">
							<CarCard car={car} />
						</div>
					))}
				</div>
				
				{/* Индикаторы для мобильной версии */}
				{cars.length > 1 && (
					<div className="flex justify-center mt-4 space-x-2">
						{cars.map((_, index) => (
							<button
								key={index}
								onClick={() => {
									if (scrollRef.current) {
										const itemWidth = scrollRef.current.scrollWidth / cars.length
										scrollRef.current.scrollTo({
											left: index * itemWidth,
											behavior: 'smooth'
										})
									}
								}}
								className={`w-2 h-2 rounded-full transition-all duration-300 ${
									index === currentIndex 
										? 'bg-yellow-400 w-6' 
										: 'bg-gray-600 hover:bg-gray-500'
								}`}
							/>
						))}
					</div>
				)}
			</div>

			{/* Десктопная версия с сеткой */}
			<div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{cars.map((car) => (
					<CarCard key={car.id} car={car} />
				))}
			</div>
		</div>
	)
}

export default function CarsByLevelSection() {
	const [selectedCategory, setSelectedCategory] = useState<CarCategory | null>(null)
	const sectionRef = useRef<HTMLDivElement>(null)

	const handleCategorySelect = (category: CarCategory) => {
		setSelectedCategory(category)
	}

	const cars = selectedCategory 
		? getCarsByCategory(selectedCategory)
		: []

	// Группируем автомобили по классам
	const carsByClass = cars.reduce((acc, car) => {
		if (!acc[car.class]) {
			acc[car.class] = []
		}
		acc[car.class].push(car)
		return acc
	}, {} as Record<string, any[]>)

	// Порядок классов для отображения
	const classOrder = ['Комфорт', 'Премиум', 'Бизнес']
	const availableClasses = classOrder.filter(className => carsByClass[className]?.length > 0)

	return (
		<section 
			ref={sectionRef}
			className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900" 
			id="cars-by-level"
		>
			<div className="container-modern">
				{/* Заголовок секции */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6">
						<span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
							Наш автопарк
						</span>
					</h2>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
						Премиум автомобили для особых случаев
					</p>
					<p className="text-lg text-yellow-400 font-medium">
						От седанов до микроавтобусов — идеальное решение для любого события
					</p>
				</div>

				{/* Карточки категорий (показываются только если не выбрана категория) */}
				{!selectedCategory && (
					<div className="mb-12">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{categoryCards.map((card) => (
								<div
									key={card.id}
									onClick={() => handleCategorySelect(card.id as CarCategory)}
									className="group cursor-pointer"
								>
									<div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30 overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20">
										{/* Изображение */}
										<div className="relative h-64 overflow-hidden rounded-t-2xl">
											<div 
												className="w-full h-full bg-cover bg-center bg-no-repeat"
												style={{ backgroundImage: `url(${card.image})` }}
											></div>
											{/* Градиентный оверлей */}
											<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
										</div>
										
										{/* Контент */}
										<div className="p-6">
											<h4 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
												{card.title}
											</h4>
											<p className="text-gray-300 text-sm leading-relaxed">
												{card.description}
											</p>
											
											{/* Кнопка выбора */}
											<div className="mt-4 pt-4 border-t border-gray-700">
												<div className="text-center">
													<span className="inline-flex items-center text-yellow-400 font-semibold group-hover:text-yellow-300 transition-colors">
														Выбрать
														<svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
															<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
														</svg>
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				)}

				{/* Компактные кнопки категорий (показываются когда выбрана категория) */}
				{selectedCategory && (
					<div className="text-center mb-8">
						{/* Компактные кнопки категорий */}
						<div className="flex justify-center items-center gap-4 mb-6">
							{categoryCards.map((card, index) => (
								<div
									key={card.id}
									onClick={() => handleCategorySelect(card.id as CarCategory)}
									className="group cursor-pointer transition-all duration-300 transform hover:scale-105 fadeInUp"
									style={{ 
										animationDelay: `${index * 150}ms`
									}}
								>
									<div className={`relative w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden bg-gray-800/50 border border-gray-600/30 transition-all duration-300 group-hover:border-yellow-400/50 ${
										selectedCategory === card.id 
											? 'ring-2 ring-yellow-400 ring-opacity-50 shadow-lg shadow-yellow-400/20' 
											: 'hover:ring-2 hover:ring-yellow-400/30 hover:shadow-lg hover:shadow-yellow-400/10'
									}`}>
										{/* Изображение */}
										<div 
											className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-110"
											style={{ backgroundImage: `url(${card.image})` }}
										></div>
										{/* Градиентный оверлей */}
										<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 group-hover:opacity-40"></div>
										
										{/* Активный индикатор */}
										{selectedCategory === card.id && (
											<div className="absolute top-2 right-2 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
										)}
										
										{/* Hover эффект */}
										<div className="absolute inset-0 bg-gradient-to-t from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
									</div>
									
									{/* Название категории */}
									<div className="mt-2 text-center">
										<span className={`text-xs md:text-sm font-medium transition-colors ${
											selectedCategory === card.id 
												? 'text-yellow-400' 
												: 'text-gray-300 group-hover:text-yellow-400'
										}`}>
											{card.title}
										</span>
									</div>
								</div>
							))}
						</div>
						
						<div className="mb-4">
							<h3 className="text-2xl font-bold text-white mb-2">
								{selectedCategory === 'sedans' && 'Все седаны'}
								{selectedCategory === 'suvs' && 'Все внедорожники'}
								{selectedCategory === 'minivans' && 'Все автобусы'}
							</h3>
							<p className="text-gray-300">
								Доступные автомобили в категории "{selectedCategory === 'sedans' ? 'Седаны' : selectedCategory === 'suvs' ? 'Внедорожники' : 'Автобусы'}"
							</p>
						</div>
					</div>
				)}

				{/* Автомобили выбранной категории - все классы видны одновременно */}
				{selectedCategory && cars.length > 0 && (
					<div className="space-y-16">
						{/* Мобильная версия - все классы на разных уровнях */}
						<div className="md:hidden">
							{availableClasses.map((carClass, index) => {
								const classCars = carsByClass[carClass]
								return classCars && classCars.length > 0 ? (
									<div key={carClass} className="mb-16">
										{/* Заголовок класса */}
										<div className="flex items-center mb-6">
											<div className="flex-1 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
											<div className="px-6">
												<h3 className="text-2xl font-bold text-yellow-400">{carClass.toUpperCase()}</h3>
											</div>
											<div className="flex-1 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
										</div>
										
										{/* Горизонтальный свайп для автомобилей */}
										<SwipeableCarList cars={classCars} title="" />
									</div>
								) : null
							})}
						</div>

						{/* Десктопная версия - показываем все классы */}
						<div className="hidden md:block">
							{availableClasses.map((carClass) => {
								const classCars = carsByClass[carClass]
								return classCars && classCars.length > 0 ? (
									<SwipeableCarList key={carClass} cars={classCars} title={carClass.toUpperCase()} />
								) : null
							})}
						</div>
					</div>
				)}

				{/* Сообщение если нет автомобилей в выбранной категории */}
				{selectedCategory && cars.length === 0 && (
					<div className="text-center py-12">
						<div className="p-8 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30 max-w-md mx-auto">
							<div className="text-6xl mb-4">🚗</div>
							<h3 className="text-xl font-bold text-white mb-2">Автомобили не найдены</h3>
							<p className="text-gray-300">
								В выбранной категории нет доступных автомобилей
							</p>
						</div>
					</div>
				)}
			</div>
		</section>
	)
} 