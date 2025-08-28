import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ContactForm from '@/components/forms/ContactForm'

export const metadata: Metadata = {
	title: 'О компании SCHMIDT Cars | Кто мы',
	description: 'История, миссия и ценности SCHMIDT Cars. Аренда авто во Владивостоке с 20XX года.',
	keywords: 'о компании Schmidt Cars, история компании, миссия Schmidt Cars, аренда авто Владивосток',
	openGraph: {
		title: 'О компании SCHMIDT Cars | Кто мы',
		description: 'История, миссия и ценности SCHMIDT Cars. Аренда авто во Владивостоке с 20XX года.',
		url: 'https://schmidtcars.ru/about',
		siteName: 'Schmidt Cars',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'О компании Schmidt Cars',
			},
		],
		locale: 'ru_RU',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'О компании SCHMIDT Cars | Кто мы',
		description: 'История, миссия и ценности SCHMIDT Cars. Аренда авто во Владивостоке с 20XX года.',
		images: ['/og-image.jpg'],
	},
	alternates: {
		canonical: '/about',
	},
}

export default function About() {
	return (
		<main className="min-h-screen bg-black">
			<Header />
			
			{/* О компании */}
			<section className="relative py-20 pt-32 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 overflow-hidden">
				{/* Статичный фон */}
				<div className="absolute inset-0">
					<div className="absolute top-1/4 left-1/6 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl"></div>
					<div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
				</div>
				
				{/* Статичная сетка */}
				<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
				
				<div className="container-modern relative z-10">
					{/* Заголовок секции */}
					<div className="text-center space-y-6 mb-16">
						<div className="inline-block px-6 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full backdrop-blur-sm">
							<span className="text-yellow-400 font-bold text-sm tracking-widest uppercase">О компании • Кто мы</span>
						</div>
						<h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight">
							<span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
								О компании
							</span>
							<br />
							<span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent drop-shadow-lg">
								SCHMIDT Cars
							</span>
						</h1>
						<p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-medium drop-shadow-lg">
							SCHMIDT Cars — команда профессионалов с опытом в сфере транспортного обслуживания более 5 лет
						</p>
					</div>
					
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div className="space-y-8">
							<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
								<span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
									Наша миссия
								</span>
							</h2>
							<p className="text-body text-gray-300 leading-relaxed">
								Мы предоставляем в аренду автомобили премиум и бизнес-класса с водителем, обслуживаем частных и корпоративных клиентов, участвуем в логистике крупных мероприятий, включая ВЭФ.
							</p>
							<p className="text-body text-gray-300 leading-relaxed">
								Наша миссия — обеспечить комфортное и безопасное перемещение каждого клиента. Нам доверяют частные лица, госструктуры, иностранные делегации и крупные компании.
							</p>
						</div>
						
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="card-modern text-center space-y-4">
								<div className="text-4xl font-bold text-yellow-400">50+</div>
								<div className="text-caption text-gray-400">Автомобилей в парке</div>
							</div>
							<div className="card-modern text-center space-y-4">
								<div className="text-4xl font-bold text-yellow-400">1000+</div>
								<div className="text-caption text-gray-400">Довольных клиентов</div>
							</div>
							<div className="card-modern text-center space-y-4">
								<div className="text-4xl font-bold text-yellow-400">5 лет</div>
								<div className="text-caption text-gray-400">Опыта работы</div>
							</div>
							<div className="card-modern text-center space-y-4">
								<div className="text-4xl font-bold text-yellow-400">24/7</div>
								<div className="text-caption text-gray-400">Доступность</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Преимущества */}
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
							<span className="text-yellow-400 font-bold text-sm tracking-widest uppercase">Преимущества • Почему мы</span>
						</div>
						<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
							<span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
								Почему выбирают нас
							</span>
						</h2>
						<p className="text-body text-gray-300 max-w-3xl mx-auto">
							Мы предлагаем премиум сервис с индивидуальным подходом к каждому клиенту
						</p>
					</div>
					
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="card-modern text-center space-y-6 group p-8">
							<div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg mx-auto">
								<svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<h3 className="text-xl font-bold text-white tracking-tight">Качество</h3>
							<p className="text-gray-300 text-sm leading-relaxed">Все автомобили проходят регулярное техническое обслуживание и соответствуют высочайшим стандартам</p>
						</div>

						<div className="card-modern text-center space-y-6 group p-8">
							<div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg mx-auto">
								<svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
								</svg>
							</div>
							<h3 className="text-xl font-bold text-white tracking-tight">Профессионализм</h3>
							<p className="text-gray-300 text-sm leading-relaxed">Опытные водители с лицензиями и многолетним стажем работы</p>
						</div>

						<div className="card-modern text-center space-y-6 group p-8">
							<div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg mx-auto">
								<svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<h3 className="text-xl font-bold text-white tracking-tight">Надежность</h3>
							<p className="text-gray-300 text-sm leading-relaxed">Исправные автомобили и профессиональное обслуживание без сбоев</p>
						</div>

						<div className="card-modern text-center space-y-6 group p-8">
							<div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg mx-auto">
								<svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
								</svg>
							</div>
							<h3 className="text-xl font-bold text-white tracking-tight">Забота</h3>
							<p className="text-gray-300 text-sm leading-relaxed">Индивидуальный подход к каждому клиенту, внимание к деталям</p>
						</div>

						<div className="card-modern text-center space-y-6 group p-8">
							<div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-green-500 rounded-2xl flex items-center justify-center shadow-lg mx-auto">
								<svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<h3 className="text-xl font-bold text-white tracking-tight">Пунктуальность</h3>
							<p className="text-gray-300 text-sm leading-relaxed">Подача автомобилей в назначенное время</p>
						</div>

						<div className="card-modern text-center space-y-6 group p-8">
							<div className="w-16 h-16 bg-gradient-to-br from-red-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg mx-auto">
								<svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<h3 className="text-xl font-bold text-white tracking-tight">Безопасность</h3>
							<p className="text-gray-300 text-sm leading-relaxed">Полная страховка автомобилей и водителей, соблюдение всех норм безопасности</p>
						</div>
					</div>
				</div>
			</section>

			{/* Карточка компании */}
			<section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
				{/* Статичный фон */}
				<div className="absolute inset-0">
					<div className="absolute top-1/4 left-1/6 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
					<div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
				</div>
				
				{/* Статичная сетка */}
				<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
				
				<div className="container-modern relative z-10">
					{/* Заголовок секции */}
					<div className="text-center space-y-6 mb-16">
						<div className="inline-block px-6 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full backdrop-blur-sm">
							<span className="text-yellow-400 font-bold text-sm tracking-widest uppercase">Реквизиты • Компания</span>
						</div>
						<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
							<span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
								Реквизиты компании
							</span>
						</h2>
						<p className="text-body text-gray-300 max-w-3xl mx-auto">
							Официальная информация о компании SCHMIDT Cars
						</p>
					</div>
					
					{/* Карточка компании */}
					<div className="max-w-4xl mx-auto">
						<div className="card-modern p-8 md:p-12 space-y-8">
							{/* Заголовок карточки */}
							<div className="text-center space-y-4 border-b border-gray-700 pb-6">
								<div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
									<svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
									</svg>
								</div>
								<h3 className="text-2xl font-bold text-white">ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ШМИДТ МАШИНЕРИ"</h3>
							</div>

							{/* Основная информация */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
								{/* Левая колонка */}
								<div className="space-y-6">
									<div className="space-y-4">
										<h4 className="text-lg font-semibold text-yellow-400 border-b border-yellow-400/30 pb-2">Адреса</h4>
										<div className="space-y-3">
											<div className="flex items-start space-x-3">
												<svg className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
												</svg>
												<div>
													<div className="text-sm text-gray-400">Юридический адрес:</div>
													<div className="text-white font-medium">692777, РОССИЯ, ПРИМОРСКИЙ КРАЙ, г. Артем, с. Кневичи д.181/1</div>
												</div>
											</div>
											<div className="flex items-start space-x-3">
												<svg className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
												</svg>
												<div>
													<div className="text-sm text-gray-400">Почтовый адрес:</div>
													<div className="text-white font-medium">690089, г. Владивосток, ул. Калинина 11а/2, кв.67</div>
												</div>
											</div>
										</div>
									</div>

									<div className="space-y-4">
										<h4 className="text-lg font-semibold text-yellow-400 border-b border-yellow-400/30 pb-2">Контакты</h4>
										<div className="space-y-3">
											<div className="flex items-center space-x-3">
												<svg className="w-5 h-5 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
												</svg>
												<div>
													<div className="text-sm text-gray-400">Телефон:</div>
													<div className="text-white font-medium">8 995 434-15-23</div>
												</div>
											</div>
											<div className="flex items-center space-x-3">
												<svg className="w-5 h-5 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
												</svg>
												<div>
													<div className="text-sm text-gray-400">E-mail:</div>
													<div className="text-white font-medium">Univskom@gmail.com</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								{/* Правая колонка */}
								<div className="space-y-6">
									<div className="space-y-4">
										<h4 className="text-lg font-semibold text-yellow-400 border-b border-yellow-400/30 pb-2">Реквизиты</h4>
										<div className="space-y-3">
											<div className="flex justify-between">
												<span className="text-gray-400">ИНН:</span>
												<span className="text-white font-medium">2543178400</span>
											</div>
											<div className="flex justify-between">
												<span className="text-gray-400">КПП:</span>
												<span className="text-white font-medium">250201001</span>
											</div>
											<div className="flex justify-between">
												<span className="text-gray-400">ОГРН:</span>
												<span className="text-white font-medium">1232500023964</span>
											</div>
										</div>
									</div>

									<div className="space-y-4">
										<h4 className="text-lg font-semibold text-yellow-400 border-b border-yellow-400/30 pb-2">Банковские реквизиты</h4>
										<div className="space-y-3">
											<div>
												<div className="text-sm text-gray-400">Расчетный счет:</div>
												<div className="text-white font-medium">40702810810001484468</div>
											</div>
											<div>
												<div className="text-sm text-gray-400">Банк:</div>
												<div className="text-white font-medium">АО "ТБАНК"</div>
											</div>
											<div className="flex justify-between">
												<span className="text-gray-400">ИНН банка:</span>
												<span className="text-white font-medium">7710140679</span>
											</div>
											<div className="flex justify-between">
												<span className="text-gray-400">БИК банка:</span>
												<span className="text-white font-medium">044525974</span>
											</div>
											<div>
												<div className="text-sm text-gray-400">Корр. счет:</div>
												<div className="text-white font-medium">30101810145250000974</div>
											</div>
											<div>
												<div className="text-sm text-gray-400">Адрес банка:</div>
												<div className="text-white font-medium">Москва, 127287, ул. Хуторская 2-я, д. 38А, стр. 26</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* Дополнительная информация */}
							<div className="border-t border-gray-700 pt-6 space-y-4">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div>
										<div className="text-sm text-gray-400">Генеральный директор:</div>
										<div className="text-white font-medium">Качалов Игорь Александрович</div>
									</div>
									<div>
										<div className="text-sm text-gray-400">На основании:</div>
										<div className="text-white font-medium">Устава</div>
									</div>
								</div>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div>
										<div className="text-sm text-gray-400">Система налогообложения:</div>
										<div className="text-white font-medium">ОСН</div>
									</div>
									<div>
										<div className="text-sm text-gray-400">Оператор ЭДО:</div>
										<div className="text-white font-medium">Сбис Тензор</div>
									</div>
								</div>
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