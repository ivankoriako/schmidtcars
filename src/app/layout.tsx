import type { Metadata } from 'next'
import './globals.css'
import ErrorBoundaryWrapper from '@/components/error-boundaries/ErrorBoundaryWrapper'

export const metadata: Metadata = {
	title: 'Аренда авто с водителем во Владивостоке | SCHMIDT Cars',
	description: 'Премиум и бизнес авто, автобусы и микроавтобусы. Услуги трансфера на ВЭФ. Бронирование и подача автомобилей.',
	keywords: 'аренда авто с водителем Владивосток, ВЭФ 2025, трансфер аэропорт, премиум автомобили, Mercedes, BMW, Lexus, микроавтобусы',
	authors: [{ name: 'Schmidt Cars' }],
	creator: 'Schmidt Cars',
	publisher: 'Schmidt Cars',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL('https://schmidtcars.ru'),
	alternates: {
		canonical: '/',
	},
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
	icons: {
		icon: '/schmidt-cars-logo.png',
		shortcut: '/schmidt-cars-logo.png',
		apple: '/schmidt-cars-logo.png',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	verification: {
		google: 'your-google-verification-code',
		yandex: 'your-yandex-verification-code',
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="ru" className="dark">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
					rel="stylesheet"
				/>
				
				{/* JSON-LD Schema.org разметка */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "LocalBusiness",
							"name": "SCHMIDT Cars",
							"description": "Аренда автомобилей с водителем во Владивостоке. Премиум и бизнес авто, микроавтобусы для ВЭФ и деловых поездок.",
							"url": "https://schmidtcars.ru",
							"telephone": "+7-XXX-XXX-XX-XX",
							"email": "info@schmidtcars.ru",
							"address": {
								"@type": "PostalAddress",
								"addressLocality": "Владивосток",
								"addressRegion": "Приморский край",
								"addressCountry": "RU"
							},
							"geo": {
								"@type": "GeoCoordinates",
								"latitude": "43.1332",
								"longitude": "131.9113"
							},
							"openingHours": "Mo-Su 08:00-21:00",
							"areaServed": "Владивосток",
							"serviceType": "Аренда автомобилей с водителем",
							"priceRange": "$$$$",
							"currenciesAccepted": "RUB",
							"paymentAccepted": "Cash, Card, Bank Transfer",
							"hasOfferCatalog": {
								"@type": "OfferCatalog",
								"name": "Автопарк SCHMIDT Cars",
								"itemListElement": [
									{
										"@type": "Offer",
										"itemOffered": {
											"@type": "Product",
											"name": "Бизнес-класс автомобили",
											"description": "Toyota Camry, Mercedes E-Class с водителем"
										}
									},
									{
										"@type": "Offer", 
										"itemOffered": {
											"@type": "Product",
											"name": "VIP автомобили",
											"description": "Mercedes S-Class, BMW 7, Lexus с персональным водителем"
										}
									},
									{
										"@type": "Offer",
										"itemOffered": {
											"@type": "Product", 
											"name": "Микроавтобусы",
											"description": "Toyota Alphard, Honda Stepwagon для групповых поездок"
										}
									}
								]
							},
							"sameAs": [
								"https://t.me/schmidtcars",
								"https://wa.me/7XXXXXXXXXX"
							],
							"image": "https://schmidtcars.ru/schmidt-cars-logo.png",
							"logo": "https://schmidtcars.ru/schmidt-cars-logo.png"
						})
					}}
				/>
			</head>
			<body className="antialiased">
				<ErrorBoundaryWrapper>
					{children}
				</ErrorBoundaryWrapper>
			</body>
		</html>
	)
}
