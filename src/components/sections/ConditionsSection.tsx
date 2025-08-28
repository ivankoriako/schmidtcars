'use client'

export default function ConditionsSection() {
	return (
		<section className="relative py-20 pt-24 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
			{/* Статичный фон */}
			<div className="absolute inset-0">
				<div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl"></div>
				<div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-slate-500/10 rounded-full blur-3xl"></div>
			</div>
			
			{/* Статичная сетка */}
			<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
			
			<div className="container-modern relative z-10">
				{/* Заголовок секции */}
				<div className="text-center space-y-6 mb-16">
					<div className="inline-block px-6 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full backdrop-blur-sm">
						<span className="text-yellow-400 font-bold text-sm tracking-widest uppercase">Премиум условия • 5 лет опыта</span>
					</div>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
						<span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
							Условия аренды
						</span>
					</h2>
					<p className="text-body text-gray-300 max-w-3xl mx-auto">
						Проверенные временем условия и гарантии качества от лидера рынка VIP-транспорта
					</p>
				</div>
				
				{/* Основные преимущества */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
					<div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30 space-y-6 hover:scale-105 transition-transform duration-300">
						<div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center">
							<svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</div>
						<h3 className="text-2xl md:text-3xl font-bold text-white">Гибкие тарифы</h3>
						<p className="text-body text-gray-300">Минимальный заказ от 12 часов с возможностью продления по ходу поездки</p>
						<div className="text-sm text-yellow-400 font-semibold">Скидки при заказе от 24 часов</div>
					</div>

					<div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30 space-y-6 hover:scale-105 transition-transform duration-300">
						<div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center">
							<svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
							</svg>
						</div>
						<h3 className="text-2xl md:text-3xl font-bold text-white">Премиум гарантии</h3>
						<p className="text-body text-gray-300">100% гарантия качества услуг и замена автомобиля в случае поломки</p>
						<div className="text-sm text-green-400 font-semibold">Страховка включена</div>
					</div>

					<div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30 space-y-6 hover:scale-105 transition-transform duration-300">
						<div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center">
							<svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
							</svg>
						</div>
						<h3 className="text-2xl md:text-3xl font-bold text-white">Удобные платежи</h3>
						<p className="text-body text-gray-300">Наличные, карты, безнал с НДС. Фиксированная стоимость за час</p>
						<div className="text-sm text-blue-400 font-semibold">Гибкие условия оплаты</div>
					</div>

					<div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30 space-y-6 hover:scale-105 transition-transform duration-300">
						<div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center">
							<svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
							</svg>
						</div>
						<h3 className="text-2xl md:text-3xl font-bold text-white">Проверенные водители</h3>
						<p className="text-body text-gray-300">Опытные профессионалы с безупречной репутацией и знанием города</p>
						<div className="text-sm text-purple-400 font-semibold">Средний стаж 8+ лет</div>
					</div>

					<div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30 space-y-6 hover:scale-105 transition-transform duration-300">
						<div className="w-16 h-16 bg-gradient-to-br from-red-400 to-rose-500 rounded-2xl flex items-center justify-center">
							<svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						</div>
						<h3 className="text-2xl md:text-3xl font-bold text-white">Честная отмена</h3>
						<p className="text-body text-gray-300">Бесплатная отмена за 12+ часов. При отмене менее чем за 12 часов — 50%</p>
						<div className="text-sm text-red-400 font-semibold">Форс-мажор не оплачивается</div>
					</div>

					<div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30 space-y-6 hover:scale-105 transition-transform duration-300">
						<div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center">
							<svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
							</svg>
						</div>
						<h3 className="text-2xl md:text-3xl font-bold text-white">VIP сервис</h3>
						<p className="text-body text-gray-300">Консьерж-услуги, встреча с табличкой, помощь с багажом</p>
						<div className="text-sm text-teal-400 font-semibold">Персональный подход</div>
					</div>
				</div>

				{/* Эксклюзивные предложения */}
				<div className="mb-16">
					<h3 className="text-2xl font-bold text-white text-center mb-8">Эксклюзивные возможности</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						<div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-xl p-6 text-center">
							<div className="text-3xl mb-2">🛡️</div>
							<h4 className="text-white font-semibold mb-2">Премиум защита</h4>
							<p className="text-gray-300 text-sm">Полное страхование и юридическая поддержка</p>
						</div>
						
						<div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-xl p-6 text-center">
							<div className="text-3xl mb-2">⚡</div>
							<h4 className="text-white font-semibold mb-2">Быстрая подача</h4>
							<p className="text-gray-300 text-sm">Автомобиль подается точно в назначенное время</p>
						</div>
						
						<div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-400/30 rounded-xl p-6 text-center">
							<div className="text-3xl mb-2">🌟</div>
							<h4 className="text-white font-semibold mb-2">Индивидуальный подход</h4>
							<p className="text-gray-300 text-sm">Персональный менеджер для каждого клиента</p>
						</div>
						
						<div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-xl p-6 text-center">
							<div className="text-3xl mb-2">🏆</div>
							<h4 className="text-white font-semibold mb-2">Статус VIP</h4>
							<p className="text-gray-300 text-sm">Эксклюзивные привилегии постоянным клиентам</p>
						</div>
					</div>
				</div>
				
				{/* Ключевые показатели */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
					<div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30 text-center space-y-4 hover:bg-gray-800/50 transition-colors">
						<div className="text-4xl font-bold text-yellow-400">12 ч</div>
						<div className="text-caption text-gray-400">Минимальный заказ</div>
						<div className="text-xs text-gray-500">Скидки при заказе от 24ч</div>
					</div>
					
					<div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30 text-center space-y-4 hover:bg-gray-800/50 transition-colors">
						<div className="text-4xl font-bold text-green-400">24/7</div>
						<div className="text-caption text-gray-400">Доступность</div>
						<div className="text-xs text-gray-500">Работаем круглосуточно</div>
					</div>
					
					<div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30 text-center space-y-4 hover:bg-gray-800/50 transition-colors">
						<div className="text-4xl font-bold text-blue-400">24/7</div>
						<div className="text-caption text-gray-400">Поддержка клиентов</div>
						<div className="text-xs text-gray-500">Без выходных и праздников</div>
					</div>
					
					<div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30 text-center space-y-4 hover:bg-gray-800/50 transition-colors">
						<div className="text-4xl font-bold text-purple-400">100%</div>
						<div className="text-caption text-gray-400">Гарантия качества</div>
						<div className="text-xs text-gray-500">Или возврат денег</div>
					</div>
				</div>
			</div>
		</section>
	)
} 