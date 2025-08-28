export default function ContactUsSection() {
	return (
		<section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
			{/* Статичный фон */}
			<div className="absolute inset-0">
				<div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl"></div>
				<div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-slate-500/10 rounded-full blur-3xl"></div>
			</div>
			
			{/* Градиентная линия сверху */}
			<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
			
			<div className="container-modern relative z-10">
				<div className="text-center space-y-6 mb-12">
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full">
						<span className="text-sm font-medium text-yellow-400">Свяжитесь с нами • Контакты</span>
					</div>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
						<span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
							Свяжитесь с нами
						</span>
					</h2>
					<p className="text-body text-gray-300 max-w-2xl mx-auto">
						Свяжитесь с нами любым удобным способом. Наши специалисты ответят на все вопросы и помогут подобрать оптимальный вариант для ваших потребностей.
					</p>
				</div>
				
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Телефон */}
					<div className="card-modern text-center space-y-4">
						<div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto">
							<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
							</svg>
						</div>
						<div>
							<h3 className="text-lg font-semibold text-white mb-2">Телефон</h3>
							<a href="tel:+79084444043" className="text-body text-gray-300 hover:text-yellow-400 transition-colors" aria-label="Позвонить по телефону +7 908 444-40-43">
								+7 908 444-40-43
							</a>
							<div className="text-sm text-gray-400 mt-1">Круглосуточно</div>
						</div>
					</div>
					
					{/* WhatsApp */}
					<div className="card-modern text-center space-y-4">
						<div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mx-auto">
							<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
							</svg>
						</div>
						<div>
							<h3 className="text-lg font-semibold text-white mb-2">WhatsApp</h3>
							<a href="https://wa.me/79084444043" className="text-body text-gray-300 hover:text-yellow-400 transition-colors" aria-label="Написать в WhatsApp">
								+7 908 444-40-43
							</a>
							<div className="text-sm text-gray-400 mt-1">Напишите нам</div>
						</div>
					</div>
					
					{/* Email */}
					<div className="card-modern text-center space-y-4">
						<div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center mx-auto">
							<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
						</div>
						<div>
							<h3 className="text-lg font-semibold text-white mb-2">Email</h3>
							<a href="mailto:info@schmidt-cars.ru" className="text-body text-gray-300 hover:text-yellow-400 transition-colors" aria-label="Написать на email info@schmidt-cars.ru">
								info@schmidt-cars.ru
							</a>
							<div className="text-sm text-gray-400 mt-1">Для заявок</div>
						</div>
					</div>
				</div>
				
				{/* Дополнительная информация */}
				<div className="mt-12 text-center">
					<div className="card-modern inline-block">
						<div className="flex items-center gap-4">
							<svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
							<div className="text-left">
								<div className="text-body text-gray-300">Владивосток, ул. Светланская, 15</div>
								<div className="text-sm text-gray-400">Главный офис</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
} 