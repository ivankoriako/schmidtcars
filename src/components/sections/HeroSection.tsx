'use client'

import Link from 'next/link';

export default function HeroSection() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20" role="banner" aria-labelledby="hero-title">
			{/* Фоновые элементы */}
			<div className="absolute inset-0">
				{/* Фоновое изображение для десктопа */}
				<div 
					className="absolute inset-0 bg-contain bg-center bg-no-repeat hidden md:block"
					style={{
						backgroundImage: 'url(/hero-bg-new.avif)'
					}}
					aria-hidden="true"
				></div>
				
				{/* Фоновое изображение для мобильных устройств */}
				<div 
					className="absolute inset-0 bg-contain bg-center bg-no-repeat md:hidden"
					style={{
						backgroundImage: 'url(/hero-bg-mobile.avif)'
					}}
					aria-hidden="true"
				></div>
				
				{/* Градиентный оверлей для лучшей читаемости текста */}
				<div className="absolute inset-0 bg-gradient-to-br from-black/40 via-gray-900/30 to-black/40"></div>
				<div className="absolute top-1/4 left-1/6 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
				<div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
			</div>
			
			{/* Статичная сетка */}
			<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
			
			<div className="container-modern relative z-10">
				<div className="text-center space-y-8">
					{/* Главный заголовок */}
					<h1 id="hero-title" className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
						<span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
							Аренда автомобилей
						</span>
						<br />
						<span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent drop-shadow-lg">
							во Владивостоке
						</span>
						<br />
						<span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-xl">
							с водителем
						</span>
					</h1>
					
					{/* Подзаголовок */}
					<p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-medium drop-shadow-lg">
						Премиум и бизнес автомобили, микроавтобусы и автобусы для корпоративных мероприятий, трансферов и ВЭФ 2025. <span className="text-white font-semibold">Более 50 автомобилей в парке</span>.
					</p>
					

					
					{/* CTA кнопки */}
					<div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
						{/* Основная кнопка - Позвонить */}
						<a 
							href="tel:+79084444043" 
							className="relative inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 text-black font-bold text-base rounded-2xl shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group overflow-hidden"
							aria-label="Позвонить по телефону +7 908 444-40-43"
						>
							{/* Блики */}
							<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
							
							{/* Иконка */}
							<svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
							</svg>
							
							{/* Текст */}
							<span className="relative z-10">Забронировать сейчас</span>
						</a>
						
						{/* Вторичная кнопка - Автопарк */}
						<Link 
							href="/avtopark" 
							className="relative inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white/30 text-white font-bold text-base rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group overflow-hidden"
							aria-label="Перейти к автопарку"
						>
							{/* Градиентная рамка */}
							<div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							
							{/* Иконка */}
							<svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
							</svg>
							
							{/* Текст */}
							<span className="relative z-10">Посмотреть автопарк</span>
						</Link>
					</div>
					

					
					{/* Преимущества */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
						<div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30 text-center space-y-4">
							<div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center mx-auto">
								<svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<h3 className="text-lg text-white font-semibold">Оплата с НДС</h3>
							<p className="text-gray-300 text-sm">Работаем с юридическими лицами. Полный пакет документов для бухгалтерии</p>
						</div>
						
						<div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30 text-center space-y-4">
							<div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto">
								<svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
								</svg>
							</div>
							<h3 className="text-lg text-white font-semibold">Персональный менеджер 24/7</h3>
							<p className="text-gray-300 text-sm">Ваш личный куратор от бронирования до возврата авто. Без роботов и ожиданий</p>
						</div>
						
						<div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30 text-center space-y-4">
							<div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto">
								<svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
								</svg>
							</div>
							<h3 className="text-lg text-white font-semibold">Гибкие условия аренды</h3>
							<p className="text-gray-300 text-sm">Индивидуальные условия, сроки и комплектация под ваши задачи</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
} 