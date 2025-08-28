'use client'

import { useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

function ScrollHandlerContent() {
	const searchParams = useSearchParams()

	useEffect(() => {
		const scroll = searchParams.get('scroll')
		
		if (scroll === 'contact-form') {
			// Небольшая задержка для полной загрузки страницы
			setTimeout(() => {
				const contactForm = document.getElementById('contact-form')
				if (contactForm) {
					contactForm.scrollIntoView({ 
						behavior: 'smooth',
						block: 'start'
					})
				}
			}, 100)
		}
	}, [searchParams])

	return null
}

export default function ScrollHandler() {
	return (
		<Suspense fallback={null}>
			<ScrollHandlerContent />
		</Suspense>
	)
} 