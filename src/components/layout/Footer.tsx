'use client'

import Link from 'next/link'

export default function Footer() {
	return (
		<footer className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden" role="contentinfo">
			{/* Статичный фон */}
			<div className="absolute inset-0">
				<div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl"></div>
				<div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-slate-500/10 rounded-full blur-3xl"></div>
			</div>
			
			{/* Градиентная линия сверху */}
			<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
			
			<div className="container-modern relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
					{/* Логотип и описание */}
					<div className="space-y-6">
						<Link href="/" className="flex items-center space-x-3 group" aria-label="Перейти на главную страницу">
							<img 
								src="/schmidt-cars-logo.png" 
								alt="Schmidt Cars - Премиум аренда автомобилей" 
								className="h-16 w-16 logo-natural"
							/>
							<div className="hidden sm:block">
								<div className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
									SCHMIDT CARS
								</div>
								<div className="text-xs text-gray-400">
									Premium Car Rental
								</div>
							</div>
						</Link>
						<div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30 space-y-4">
							<p className="text-body text-gray-300 leading-relaxed">
								Премиум сервис аренды автомобилей с водителем во Владивостоке. 
								Эксклюзивный автопарк для VIP клиентов и корпоративных мероприятий.
							</p>
							<div className="flex items-center gap-4">
								<div className="flex items-center gap-2 text-sm text-gray-400">
									<div className="w-2 h-2 bg-green-400 rounded-full" aria-hidden="true"></div>
									<span>Онлайн</span>
								</div>
								<div className="text-sm text-gray-400" aria-hidden="true">•</div>
								<div className="text-sm text-gray-400">24/7 Поддержка</div>
							</div>
						</div>
					</div>
					
					{/* Контакты */}
					<div className="space-y-6">
						<h4 className="text-2xl md:text-3xl font-bold text-white">Контакты</h4>
						<div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30 space-y-4">
							<div className="space-y-4">
								<div className="flex items-center gap-3 group cursor-pointer">
									<svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
									</svg>
									<div className="flex-1">
										<a href="tel:+79084444043" className="text-body text-gray-300 hover:text-yellow-400 transition-colors group-hover:text-yellow-400 flex items-center gap-2" aria-label="Позвонить по телефону +7 908 444-40-43">
											+7 908 444-40-43
											<svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
											</svg>
										</a>
										<div className="text-xs text-gray-400">Круглосуточно</div>
									</div>
								</div>
								<div className="flex items-center gap-3 group cursor-pointer">
									<svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
									</svg>
									<div className="flex-1">
										<a href="https://wa.me/79084444043" className="text-body text-gray-300 hover:text-yellow-400 transition-colors group-hover:text-yellow-400 flex items-center gap-2" aria-label="Написать в WhatsApp">
											+7 908 444-40-43
											<svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
											</svg>
										</a>
										<div className="text-xs text-gray-400">Напишите нам</div>
									</div>
								</div>
								<div className="flex items-center gap-3 group cursor-pointer">
									<svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
									</svg>
									<div className="flex-1">
										<a href="mailto:info@schmidt-cars.ru" className="text-body text-gray-300 hover:text-yellow-400 transition-colors group-hover:text-yellow-400 flex items-center gap-2" aria-label="Написать на email info@schmidt-cars.ru">
											info@schmidt-cars.ru
											<svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
											</svg>
										</a>
										<div className="text-xs text-gray-400">Для заявок</div>
									</div>
								</div>
								<div className="flex items-center gap-3">
									<svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
									</svg>
									<div>
										<address className="text-body text-gray-300 not-italic">Владивосток, ул. Светланская, 15</address>
										<div className="text-xs text-gray-400">Главный офис</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					{/* Навигация */}
					<div className="space-y-6">
						<h4 className="text-2xl md:text-3xl font-bold text-white">Навигация</h4>
						<div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30 space-y-3">
							<Link href="/arenda-avto-vef" className="block text-body text-gray-300 hover:text-yellow-400 transition-colors duration-300" aria-label="Перейти к услугам ВЭФ 2025">
								Услуги ВЭФ 2025
							</Link>
							<Link href="/avtopark" className="block text-body text-gray-300 hover:text-yellow-400 transition-colors duration-300" aria-label="Перейти к автопарку">
								Автопарк
							</Link>
							<Link href="/usloviya" className="block text-body text-gray-300 hover:text-yellow-400 transition-colors duration-300" aria-label="Перейти к условиям аренды">
								Условия аренды
							</Link>
							<Link href="/about" className="block text-body text-gray-300 hover:text-yellow-400 transition-colors duration-300" aria-label="Перейти к информации о компании">
								О компании
							</Link>
							<Link href="/privacy-policy" className="block text-body text-gray-300 hover:text-yellow-400 transition-colors duration-300" aria-label="Перейти к политике конфиденциальности">
								Политика конфиденциальности
							</Link>
						</div>
					</div>
				</div>
				
				{/* Разделитель */}
				<div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent my-12" aria-hidden="true"></div>
				
				{/* Нижняя секция */}
				<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
					<div className="text-caption text-gray-400">
						© 2025 Schmidt Cars. Все права защищены.
					</div>
					<div className="flex flex-col md:flex-row items-center gap-6">
						<div className="flex items-center gap-2">
							<div className="w-2 h-2 bg-green-400 rounded-full" aria-hidden="true"></div>
							<span className="text-caption text-gray-400">Сервис активен</span>
						</div>
						<div className="text-caption text-gray-400">
							Круглосуточно
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
} 