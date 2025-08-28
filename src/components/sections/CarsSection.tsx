'use client'

import { useState } from 'react'
import { cars } from '@/data/cars'
import CarCard from '@/components/ui/CarCard'

export default function CarsSection() {
	const [activeCategory, setActiveCategory] = useState('all')

	const categories = [
		{ id: 'all', name: 'Все автомобили', icon: '🏎️' },
		{ id: 'sedans', name: 'Седаны', icon: '🚙' },
		{ id: 'suvs', name: 'Внедорожники', icon: '🏔️' },
		{ id: 'minivans', name: 'Автобусы', icon: '🚐' },
	]

	const filteredCars = activeCategory === 'all' 
		? cars 
		: cars.filter(car => car.category === activeCategory)

	return (
		<section id="cars" className="pt-32 pb-24 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
			{/* Минимальные фоновые элементы */}
			<div className="absolute inset-0 opacity-20">
				<div className="absolute top-40 left-40 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
				<div className="absolute bottom-40 right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
				<div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-400/8 rounded-full blur-3xl"></div>
			</div>
			
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Заголовок секции */}
				<div className="text-center mb-20">
					{/* Грандиозный заголовок */}
					<h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 leading-tight">
						<span className="text-white">ПРЕМИУМ</span>
						<br />
						<span className="text-yellow-400 drop-shadow-2xl">
							АВТОПАРК
						</span>
					</h2>
					
					{/* Элегантное описание */}
					<div className="max-w-4xl mx-auto">
						<p className="text-2xl sm:text-3xl text-gray-300 leading-relaxed font-light">
							<span className="text-yellow-400 font-semibold">Эксклюзивные автомобили</span> для участников ВЭФ 2025
							<br className="hidden sm:block" />
							Немецкие люкс седаны, внедорожники и <span className="text-yellow-400 font-semibold">минивэны премиум-класса</span>
						</p>
					</div>
				</div>

				{/* Фильтры категорий */}
				<div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-16">
					{categories.map((category, index) => (
						<button
							key={category.id}
							onClick={() => setActiveCategory(category.id)}
							className={`group relative overflow-hidden flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold transition-all duration-300 text-sm sm:text-base hover:scale-105 ${
								activeCategory === category.id
									? 'bg-gradient-to-r from-yellow-400 to-yellow-300 text-black shadow-xl shadow-yellow-400/25'
									: 'glass-effect border border-white/20 text-gray-300 hover:border-yellow-400/30 hover:text-white'
							}`}
						>
							<span className="text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300">{category.icon}</span>
							<span className="hidden xs:inline sm:inline font-semibold">{category.name}</span>
							<span className="xs:hidden sm:hidden font-semibold">{category.name.split(' ')[0]}</span>
							{activeCategory !== category.id && (
								<div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/5 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
							)}
						</button>
					))}
				</div>

				{/* Счетчик автомобилей */}
				<div className="text-center mb-12">
					<div className="inline-flex items-center gap-3 px-6 py-3 glass-effect rounded-2xl border border-yellow-400/20">
						<span className="text-2xl">🏎️</span>
						<span className="text-yellow-400 font-bold text-xl">{filteredCars.length}</span>
						<span className="text-gray-300 font-semibold">автомобилей доступно</span>
					</div>
				</div>

				{/* Сетка автомобилей */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 relative">
					{filteredCars.map((car, index) => (
						<div 
							key={car.id} 
							className="w-full max-w-sm mx-auto h-full"
						>
							<CarCard car={car} />
						</div>
					))}
				</div>

				{/* Пустое состояние */}
				{filteredCars.length === 0 && (
					<div className="text-center py-16">
						<div className="text-6xl mb-4">🏎️</div>
						<h3 className="text-2xl font-bold text-white mb-4">
							Автомобили не найдены
						</h3>
						<p className="text-gray-400 mb-8">
							Попробуйте выбрать другую категорию или свяжитесь с нами
						</p>
						<a
							href="tel:+7-999-123-45-67"
							className="btn-premium"
						>
							Связаться с нами
						</a>
					</div>
				)}
			</div>
		</section>
	)
} 