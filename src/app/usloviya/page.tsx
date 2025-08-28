import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ContactForm from '@/components/forms/ContactForm'
import ConditionsSection from '@/components/sections/ConditionsSection'

export const metadata: Metadata = {
	title: 'Условия аренды автомобиля с водителем | SCHMIDT Cars',
	description: 'Премиум условия аренды авто во Владивостоке: гибкие тарифы, гарантии качества, VIP сервис. 5 лет опыта.',
	keywords: 'условия аренды автомобиля, премиум аренда авто Владивосток, VIP транспорт, гарантии качества',
	openGraph: {
		title: 'Премиум условия аренды автомобиля | SCHMIDT Cars',
		description: 'Премиум условия аренды авто во Владивостоке: гибкие тарифы, гарантии качества, VIP сервис. 5 лет опыта.',
		type: 'website',
		locale: 'ru_RU',
		siteName: 'SCHMIDT Cars'
	}
}

export default function Usloviya() {
	return (
		<main className="min-h-screen bg-black">
			<Header />
			
			{/* Добавляем отступ от хедера */}
			<div className="pt-20">
				<ConditionsSection />
			</div>
			
			<ContactForm />
			<Footer />
		</main>
	)
} 