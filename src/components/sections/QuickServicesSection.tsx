'use client'

import Link from 'next/link'

export default function QuickServicesSection() {
	return (
		<section className="relative py-20 pt-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
			{/* Статичный фон */}
			<div className="absolute inset-0">
				<div className="absolute top-1/4 left-1/6 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
				<div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"></div>
			</div>
			
			{/* Статичная сетка */}
			<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
			
			<div className="container-modern relative z-10">
				{/* Заголовок секции */}
				<div className="text-center space-y-6 mb-16">
					<div className="inline-block px-6 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full backdrop-blur-sm">
						<span className="text-yellow-400 font-bold text-sm tracking-widest uppercase">ВЭФ 2025 • Премиум Сервис</span>
					</div>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
						<span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
							Быстрые услуги
						</span>
					</h2>
					<p className="text-body text-gray-300 max-w-3xl mx-auto">
						Полный спектр премиум-услуг для участников Восточного Экономического Форума
					</p>
				</div>
				
				{/* Краткие карточки услуг */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
					{/* Трансфер */}
					<div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30">
						<div className="space-y-6">
							<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
								<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
								</svg>
							</div>
							<div className="space-y-4">
								<h3 className="text-2xl md:text-3xl font-bold text-white">VIP Трансфер</h3>
								<p className="text-body text-gray-300">Премиум трансфер с профессиональными водителями и роскошными автомобилями</p>
							</div>
							<div className="space-y-3">
								<div className="flex items-center text-sm text-gray-400">
									<div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
									Аэропорт - Отель - Мероприятия
								</div>
								<div className="flex items-center text-sm text-gray-400">
									<div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
									24/7 доступность
								</div>
								<div className="flex items-center text-sm text-gray-400">
									<div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
									Персональный менеджер
								</div>
							</div>
						</div>
					</div>
					
					{/* Аренда */}
					<div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30">
						<div className="space-y-6">
							<div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center">
								<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
								</svg>
							</div>
							<div className="space-y-4">
								<h3 className="text-2xl md:text-3xl font-bold text-white">Аренда автомобилей</h3>
								<p className="text-body text-gray-300">Эксклюзивный автопарк премиум-класса для любых потребностей</p>
							</div>
							<div className="space-y-3">
								<div className="flex items-center text-sm text-gray-400">
									<div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
									Люкс седаны и внедорожники
								</div>
								<div className="flex items-center text-sm text-gray-400">
									<div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
									С водителем и без
								</div>
								<div className="flex items-center text-sm text-gray-400">
									<div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
									Гибкие тарифы
								</div>
							</div>
						</div>
					</div>
					
					{/* Консьерж */}
					<div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30">
						<div className="space-y-6">
							<div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
								<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
								</svg>
							</div>
							<div className="space-y-4">
								<h3 className="text-2xl md:text-3xl font-bold text-white">Консьерж-сервис</h3>
								<p className="text-body text-gray-300">Персональный помощник для решения любых задач и вопросов</p>
							</div>
							<div className="space-y-3">
								<div className="flex items-center text-sm text-gray-400">
									<div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
									Бронирование и организация
								</div>
								<div className="flex items-center text-sm text-gray-400">
									<div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
									VIP сопровождение
								</div>
								<div className="flex items-center text-sm text-gray-400">
									<div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
									24/7 поддержка
								</div>
							</div>
						</div>
					</div>
				</div>
				
				{/* Кнопка "Все услуги" */}
				<div className="text-center">
					<Link 
						href="/arenda-avto-vef" 
						className="btn-modern-lg bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-300 hover:to-yellow-400 transition-colors duration-300"
					>
						Все услуги для ВЭФ 2025
						<svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
					</Link>
				</div>
			</div>
		</section>
	)
} 