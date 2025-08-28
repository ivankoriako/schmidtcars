import Header from '@/components/layout/Header'
import HeroSection from '@/components/sections/HeroSection'
import QuickServicesSection from '@/components/sections/QuickServicesSection'
import CarsByLevelSection from '@/components/sections/CarsByLevelSection'
import ContactForm from '@/components/forms/ContactForm'
import Footer from '@/components/layout/Footer'
import ScrollHandler from '@/components/ScrollHandler'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Аренда авто с водителем во Владивостоке | SCHMIDT Cars',
	description: 'Премиум и бизнес авто, автобусы и микроавтобусы. Услуги трансфера на ВЭФ. Бронирование и подача автомобилей.',
	keywords: 'аренда авто с водителем Владивосток, ВЭФ 2025, трансфер аэропорт, премиум автомобили, Mercedes, BMW, Lexus, микроавтобусы',
	openGraph: {
		title: 'Аренда авто с водителем во Владивостоке | SCHMIDT Cars',
		description: 'Премиум и бизнес авто, автобусы и микроавтобусы. Услуги трансфера на ВЭФ. Бронирование и подача автомобилей.',
		url: 'https://schmidtcars.ru',
		siteName: 'Schmidt Cars',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Schmidt Cars - Премиум автопрокат',
			},
		],
		locale: 'ru_RU',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Аренда авто с водителем во Владивостоке | SCHMIDT Cars',
		description: 'Премиум и бизнес авто, автобусы и микроавтобусы. Услуги трансфера на ВЭФ. Бронирование и подача автомобилей.',
		images: ['/og-image.jpg'],
	},
	alternates: {
		canonical: '/',
	},
}

export default function Home() {
	return (
		<main className="min-h-screen bg-black">
			<ScrollHandler />
			<Header />
			<HeroSection />
			
			{/* О компании под баннером (Hero) */}
			<section className="py-16 bg-gradient-to-br from-black via-gray-900 to-black border-y border-white/10">
				<div className="container-modern">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
						<div className="lg:col-span-2 space-y-6">
							<div className="inline-block px-4 py-1.5 bg-yellow-400/10 border border-yellow-400/30 rounded-full backdrop-blur-sm">
								<span className="text-yellow-400 text-xs font-bold tracking-widest uppercase">О компании</span>
							</div>
							<h2 className="text-3xl md:text-4xl font-bold text-white">SCHMIDT Cars — премиальный транспорт для бизнес‑мероприятий</h2>
							<div className="space-y-4 text-gray-300 leading-relaxed">
								<p>
									Мы компания Шмидт Карс, занимаемся сдачей премиальных авто
									исключительно на большие бизнес‑мероприятия, такие как ВЭФ.
								</p>
								<p>
									Мы узконаправлены по одному сегменту — предоставление премиальных
									авто на бизнес‑мероприятия. Это даёт нам неоспоримое преимущество:
									мы точно понимаем потребности клиента и нюансы организации,
									говорим с вами на одном языке.
								</p>
								<p>
									Наши водители проходят обучение сервису: готовы оперативно помочь,
									подсказать по городу, выбрать оптимальный маршрут.
								</p>
								<p>
									На время форума выделяем команду менеджеров, которые работают 24/7.
									За каждым клиентом закрепляется персональный менеджер — от брони до
									закрывающих документов.
								</p>
								<div className="p-4 rounded-xl bg-gray-800/40 border border-gray-700/50 text-sm text-gray-400">
									<p>
										P.S. Пусть вас не смущают сгенерированные фото на одном фоне — это
										сделано для удобства сайта. По запросу предоставим актуальные фото
										конкретных автомобилей.
									</p>
								</div>
						</div>
						</div>
						<div className="space-y-4">
							<div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30">
								<h3 className="text-lg font-bold text-white mb-3">Почему это важно для бизнеса</h3>
								<ul className="space-y-2 text-gray-300 text-sm">
									<li className="flex items-start gap-2"><span className="text-yellow-400">•</span> Подача авто точно в срок</li>
									<li className="flex items-start gap-2"><span className="text-yellow-400">•</span> Водители в форме, премиальный сервис</li>
									<li className="flex items-start gap-2"><span className="text-yellow-400">•</span> Работа по безналу, полный пакет документов</li>
									<li className="flex items-start gap-2"><span className="text-yellow-400">•</span> Реальные авто и прозрачные условия</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
			
			{/* CTA секция после Hero */}
			<section className="py-16 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 border-y border-yellow-400/20">
				<div className="container-modern">
					<div className="text-center space-y-6">
						<h2 className="text-3xl md:text-4xl font-bold text-white">
							Готовы к поездке?
						</h2>
						<p className="text-xl text-gray-300 max-w-2xl mx-auto">
							Выберите подходящий автомобиль из нашего автопарка или свяжитесь с нами для консультации
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
							<a 
								href="#cars-by-level" 
								className="inline-flex items-center px-8 py-4 bg-yellow-400 text-black font-bold rounded-xl hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400/25"
							>
								Выбрать автомобиль
								<svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
								</svg>
							</a>
							<a 
								href="#contact-form" 
								className="inline-flex items-center px-8 py-4 bg-transparent text-yellow-400 font-bold rounded-xl border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105"
							>
								Связаться с нами
								<svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</section>
			
			<CarsByLevelSection />
			<QuickServicesSection />
			<ContactForm />
			<Footer />
		</main>
	)
}
