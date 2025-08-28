import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import ContactForm from '@/components/forms/ContactForm'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
	title: 'Аренда авто на ВЭФ 2025 во Владивостоке | VIP и трансферы',
	description: 'Закажите авто с водителем на ВЭФ во Владивостоке. Комфортные машины, лицензированные водители, бронирование заранее.',
	keywords: 'аренда авто ВЭФ 2025, трансфер ВЭФ Владивосток, VIP автомобили ВЭФ, аренда с водителем ВЭФ',
	openGraph: {
		title: 'Аренда авто на ВЭФ 2025 во Владивостоке | VIP и трансферы',
		description: 'Закажите авто с водителем на ВЭФ во Владивостоке. Комфортные машины, лицензированные водители, бронирование заранее.',
		url: 'https://schmidtcars.ru/arenda-avto-vef',
		siteName: 'Schmidt Cars',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Аренда авто на ВЭФ 2025 - Schmidt Cars',
			},
		],
		locale: 'ru_RU',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Аренда авто на ВЭФ 2025 во Владивостоке | VIP и трансферы',
		description: 'Закажите авто с водителем на ВЭФ во Владивостоке. Комфортные машины, лицензированные водители, бронирование заранее.',
		images: ['/og-image.jpg'],
	},
	alternates: {
		canonical: '/arenda-avto-vef',
	},
}

export default function ArendaAvtoVef() {
	return (
		<main className="min-h-screen bg-black">
			<Header />
			
			{/* Hero Section */}
			<section className="relative py-20 pt-32 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
				{/* Статичная сетка */}
				<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
				
				<div className="container-modern relative z-10">
					<div className="text-center space-y-8">
						<h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight">
							<span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
								Аренда автомобиля на ВЭФ 2025
							</span>
							<br />
							<span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent drop-shadow-lg">
								во Владивостоке
							</span>
						</h1>
						<p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-medium drop-shadow-lg">
							Восточный экономический форум — одно из самых значимых событий региона. Мы предлагаем аренду автомобилей с водителем во Владивостоке специально под ВЭФ. В наличии — VIP-седаны, бизнес-авто, минивэны и автобусы.
						</p>
						
						{/* Ключевые преимущества */}
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
							<div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30 text-center space-y-4">
								<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
									<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								</div>
								<h3 className="text-lg font-bold text-white">Официальный партнер</h3>
								<p className="text-sm text-gray-400">Аккредитованный партнер ВЭФ 2025 с полными допусками</p>
							</div>
							
							<div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30 text-center space-y-4">
								<div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto">
									<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								</div>
								<h3 className="text-lg font-bold text-white">24/7 поддержка</h3>
								<p className="text-sm text-gray-400">Круглосуточная поддержка и мониторинг</p>
							</div>
							
							<div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30 text-center space-y-4">
								<div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto">
									<svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
									</svg>
								</div>
								<h3 className="text-lg font-bold text-white">Персональный менеджер</h3>
								<p className="text-sm text-gray-400">Индивидуальный подход к каждому клиенту</p>
							</div>
						</div>
						
						{/* CTA кнопки */}
						<div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
							{/* Основная кнопка - Позвонить */}
							<a 
								href="tel:+79084444043" 
								className="relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 text-black font-bold text-lg rounded-2xl shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group overflow-hidden"
								aria-label="Позвонить по телефону +7 908 444-40-43"
							>
								{/* Блики */}
								<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
								
								{/* Иконка */}
								<svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
								</svg>
								
								{/* Текст */}
								<span className="relative z-10">Забронировать для ВЭФ</span>
							</a>
							
							{/* Вторичная кнопка - Автопарк */}
							<a 
								href="/avtopark" 
								className="relative inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold text-lg rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group overflow-hidden"
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
							</a>
						</div>
						
						{/* Дополнительная информация */}
						<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
							<div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30 space-y-4">
								<h3 className="text-lg font-bold text-yellow-400">📅 Даты ВЭФ 2025</h3>
								<p className="text-gray-300">Восточный экономический форум пройдет <span className="text-yellow-400 font-semibold">3—6 сентября 2025</span>. Рекомендуем забронировать автомобиль заранее.</p>
							</div>
							
							<div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30 space-y-4">
								<h3 className="text-lg font-bold text-yellow-400">🚗 Автопарк для ВЭФ</h3>
								<p className="text-gray-300">Более 50 автомобилей: Mercedes S-Class, BMW 7-Series, Lexus LX, микроавтобусы и автобусы.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Объединенная секция услуг и условий */}
			<section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
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
								Услуги для ВЭФ 2025
							</span>
						</h2>
						<p className="text-body text-gray-300 max-w-3xl mx-auto">
							Полный спектр премиум-услуг для участников Восточного Экономического Форума
						</p>
					</div>
					
					{/* Услуги и условия в одной сетке */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
						{/* VIP Трансфер */}
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
						
						{/* Аренда автомобилей */}
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
						
						{/* Условия аренды */}
						<div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30">
							<div className="space-y-6">
								<div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center">
									<svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								</div>
								<div className="space-y-4">
									<h3 className="text-2xl md:text-3xl font-bold text-white">Условия аренды</h3>
									<p className="text-body text-gray-300">Прозрачные условия и фиксированные тарифы для всех клиентов</p>
								</div>
								<div className="space-y-3">
									<div className="flex items-center text-sm text-gray-400">
										<div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
										Минимум 12 часов
									</div>
									<div className="flex items-center text-sm text-gray-400">
										<div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
										Оплата наличными/безнал
									</div>
									<div className="flex items-center text-sm text-gray-400">
										<div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
										Лицензированные водители
									</div>
								</div>
							</div>
						</div>
					</div>
					
					{/* Процесс работы */}
					<div className="mt-16">
						<h3 className="text-2xl font-bold text-white text-center mb-12">
							<span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
								Как мы работаем
							</span>
						</h3>
						
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
							{/* Заявка */}
							<div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30 text-center space-y-4">
								<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
									<span className="text-2xl">📞</span>
								</div>
								<h4 className="text-lg font-bold text-white">Заявка</h4>
								<p className="text-sm text-gray-400">Свяжитесь с нами по телефону или WhatsApp</p>
							</div>

							{/* Оформление */}
							<div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30 text-center space-y-4">
								<div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto">
									<span className="text-2xl">📋</span>
								</div>
								<h4 className="text-lg font-bold text-white">Оформление</h4>
								<p className="text-sm text-gray-400">Оформление договора</p>
							</div>

							{/* Предоплата */}
							<div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30 text-center space-y-4">
								<div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto">
									<span className="text-2xl">💳</span>
								</div>
								<h4 className="text-lg font-bold text-white">Предоплата</h4>
								<p className="text-sm text-gray-400">Бронирование подтверждается предоплатой. Гибкие условия для юр. лиц</p>
							</div>

							{/* Подтверждение брони */}
							<div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30 text-center space-y-4">
								<div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto">
									<span className="text-2xl">✅</span>
								</div>
								<h4 className="text-lg font-bold text-white">Подтверждение брони</h4>
								<p className="text-sm text-gray-400">Подтверждаем по SMS/мессенджеру. Маршрут и тайминг согласованы</p>
							</div>

							{/* Подача */}
							<div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30 text-center space-y-4">
								<div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto">
									<span className="text-2xl">🚗</span>
								</div>
								<h4 className="text-lg font-bold text-white">Подача</h4>
								<p className="text-sm text-gray-400">Точная подача автомобиля в назначенное время</p>
							</div>

							{/* VIP‑сервис */}
							<div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30 text-center space-y-4">
								<div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto">
									<span className="text-2xl">⭐</span>
								</div>
								<h4 className="text-lg font-bold text-white">VIP‑сервис</h4>
								<p className="text-sm text-gray-400">Премиум‑обслуживание в поездке</p>
							</div>

							{/* Сопровождение 24/7 */}
							<div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30 text-center space-y-4">
								<div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto">
									<span className="text-2xl">🛎️</span>
								</div>
								<h4 className="text-lg font-bold text-white">Сопровождение 24/7</h4>
								<p className="text-sm text-gray-400">Персональный менеджер на связи. Оперативные изменения по маршруту</p>
							</div>

							{/* Закрывающие документы */}
							<div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30 text-center space-y-4">
								<div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto">
									<span className="text-2xl">🧾</span>
								</div>
								<h4 className="text-lg font-bold text-white">Закрывающие документы</h4>
								<p className="text-sm text-gray-400">Работаем по безналу, предоставляем счет, акт, договор, УПД</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* SEO-оптимизированный контент */}
			<section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
				<div className="container-modern">
					<div className="p-8 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30 space-y-8">
						<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
							Аренда автомобилей на ВЭФ 2025 во Владивостоке
						</h2>
						
						<div className="space-y-6 text-body text-gray-200 leading-relaxed">
							<p>
								Восточный экономический форум (ВЭФ) 2025 — это ключевое событие для развития экономики Дальнего Востока. SCHMIDT Cars предоставляет профессиональные услуги аренды автомобилей с водителем во Владивостоке специально для участников ВЭФ. Наш автопарк включает премиум-седаны, бизнес-автомобили, минивэны и автобусы для групповых перевозок.
							</p>
							
							<div className="space-y-4">
								<h3 className="text-lg font-semibold text-yellow-400">Преимущества для участников ВЭФ:</h3>
								<ul className="space-y-2">
									<li className="flex items-start gap-3">
										<div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
										<span>Официальный статус аккредитованного партнера ВЭФ 2025</span>
									</li>
									<li className="flex items-start gap-3">
										<div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
										<span>Соблюдение всех протоколов и требований форума</span>
									</li>
									<li className="flex items-start gap-3">
										<div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
										<span>Персональный менеджер для каждого клиента</span>
									</li>
									<li className="flex items-start gap-3">
										<div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
										<span>Круглосуточная поддержка и мониторинг</span>
									</li>
								</ul>
							</div>
							
							<div className="bg-yellow-400/10 border border-yellow-400/20 rounded-xl p-6">
								<p className="text-yellow-400 font-semibold">
									Забронируйте автомобиль заранее для участия в ВЭФ 2025!
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			
			<ContactForm />
			<Footer />
		</main>
	)
} 