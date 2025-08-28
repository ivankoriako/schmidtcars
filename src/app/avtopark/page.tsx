import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import CarsByLevelSection from '@/components/sections/CarsByLevelSection'
import ContactForm from '@/components/forms/ContactForm'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
	title: 'Автопарк SCHMIDT Cars | Бизнес, VIP, автобусы',
	description: 'Весь наш автопарк с фото, характеристиками и ценами. Аренда легковых авто, минивэнов, автобусов во Владивостоке.',
	keywords: 'автопарк Schmidt Cars, аренда автомобилей Владивосток, VIP автомобили, бизнес класс, микроавтобусы',
	openGraph: {
		title: 'Автопарк SCHMIDT Cars | Бизнес, VIP, автобусы',
		description: 'Весь наш автопарк с фото, характеристиками и ценами. Аренда легковых авто, минивэнов, автобусов во Владивостоке.',
		url: 'https://schmidtcars.ru/avtopark',
		siteName: 'Schmidt Cars',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Автопарк Schmidt Cars - Премиум автомобили',
			},
		],
		locale: 'ru_RU',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Автопарк SCHMIDT Cars | Бизнес, VIP, автобусы',
		description: 'Весь наш автопарк с фото, характеристиками и ценами. Аренда легковых авто, минивэнов, автобусов во Владивостоке.',
		images: ['/og-image.jpg'],
	},
	alternates: {
		canonical: '/avtopark',
	},
}

export default function Avtopark() {
	return (
		<main className="min-h-screen bg-black">
			<Header />
			{/* Добавляем отступ от хедера */}
			<div className="pt-20">
				<CarsByLevelSection />
			</div>
			<ContactForm />
			<Footer />
		</main>
	)
} 