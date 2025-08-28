'use client'

import { useState } from 'react'
import { sendToTelegram } from '@/utils/telegram'

export default function ContactForm() {
	const [phone, setPhone] = useState('')
	const [agreeToPrivacy, setAgreeToPrivacy] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPhone(e.target.value)
		// Сбрасываем статус при изменении поля
		if (submitStatus !== 'idle') {
			setSubmitStatus('idle')
		}
	}

	const handleAgreeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setAgreeToPrivacy(e.target.checked)
		// Сбрасываем статус при изменении согласия
		if (submitStatus !== 'idle') {
			setSubmitStatus('idle')
		}
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		
		if (!phone.trim()) {
			setSubmitStatus('error')
			return
		}

		if (!agreeToPrivacy) {
			setSubmitStatus('error')
			return
		}

		setIsLoading(true)
		setSubmitStatus('idle')

			try {
		// Используем решение из Vite проекта - прямой вызов Telegram API
		await sendToTelegram({
			phone: phone.trim(),
			privacyConsent: true,
			consentDate: new Date().toISOString()
		})

		setSubmitStatus('success')
		setPhone('')
		setAgreeToPrivacy(false)
	} catch (error) {
		console.error('Ошибка отправки заявки:', error)
		setSubmitStatus('error')
	} finally {
		setIsLoading(false)
	}
	}

	const handleDirectWhatsApp = () => {
		window.open('https://wa.me/79084444043?text=Здравствуйте! Хочу заказать автомобиль для ВЭФ 2025', '_blank')
	}

	const handleDirectTelegram = () => {
		window.open('https://t.me/schmidt_cars?text=Здравствуйте! Хочу заказать автомобиль для ВЭФ 2025', '_blank')
	}

	const handleCall = () => {
		window.open('tel:+79084444043', '_blank')
	}

	const handleEmail = () => {
		window.open('mailto:info@schmidt-cars.ru?subject=Заявка на аренду автомобиля', '_blank')
	}

	return (
		<section id="contact-form" className="relative py-16 pt-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden" role="region" aria-labelledby="contact-form-title">
			{/* Фоновые элементы */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
			</div>
			
			<div className="container-modern relative z-10">
				{/* Заголовок секции */}
				<div className="text-center space-y-4 mb-12">
					<div className="inline-block px-6 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full backdrop-blur-sm">
						<span className="text-yellow-400 font-bold text-sm tracking-widest uppercase">Свяжитесь с нами</span>
					</div>
					<h2 id="contact-form-title" className="text-4xl md:text-5xl lg:text-6xl font-bold">
						<span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
							Свяжитесь с нами
						</span>
					</h2>
					<p className="text-body text-gray-300 max-w-2xl mx-auto">
						Оставьте заявку и мы свяжемся с вами
					</p>
				</div>
				
				{/* Объединенный блок контактов и формы */}
				<div className="p-8 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
						{/* Левая часть - Контакты */}
						<div className="space-y-4">
							<h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Наши контакты</h3>
							<div className="space-y-3">
								{/* Телефон */}
								<button
									onClick={handleCall}
									className="w-full flex items-center gap-3 p-3 bg-gray-800/30 border border-gray-600/30 rounded-xl hover:bg-gray-800/50 hover:border-yellow-400/30 transition-all group"
								>
									<div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
										<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
										</svg>
									</div>
									<div className="text-left flex-1">
										<div className="text-white font-semibold text-sm">Телефон</div>
										<div className="text-yellow-400 flex items-center gap-2">
											+7 908 444-40-43
											<svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
											</svg>
										</div>
										<div className="text-gray-400 text-xs">Круглосуточно</div>
									</div>
								</button>

								{/* WhatsApp */}
								<button
									onClick={handleDirectWhatsApp}
									className="w-full flex items-center gap-3 p-3 bg-gray-800/30 border border-gray-600/30 rounded-xl hover:bg-gray-800/50 hover:border-green-400/30 transition-all group"
								>
									<div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
										<svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
											<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
										</svg>
									</div>
									<div className="text-left flex-1">
										<div className="text-white font-semibold text-sm">WhatsApp</div>
										<div className="text-green-400 flex items-center gap-2">
											+7 908 444-40-43
											<svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
											</svg>
										</div>
										<div className="text-gray-400 text-xs">Напишите нам</div>
									</div>
								</button>

								{/* Telegram */}
								<button
									onClick={handleDirectTelegram}
									className="w-full flex items-center gap-3 p-3 bg-gray-800/30 border border-gray-600/30 rounded-xl hover:bg-gray-800/50 hover:border-blue-400/30 transition-all group"
								>
									<div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
										<svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
											<path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.236-2.977 3.31-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
										</svg>
									</div>
									<div className="text-left flex-1">
										<div className="text-white font-semibold text-sm">Telegram</div>
										<div className="text-blue-400 flex items-center gap-2">
											@schmidt_cars
											<svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
											</svg>
										</div>
										<div className="text-gray-400 text-xs">Напишите нам</div>
									</div>
								</button>

								{/* Email */}
								<button
									onClick={handleEmail}
									className="w-full flex items-center gap-3 p-3 bg-gray-800/30 border border-gray-600/30 rounded-xl hover:bg-gray-800/50 hover:border-yellow-400/30 transition-all group"
								>
									<div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
										<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
										</svg>
									</div>
									<div className="text-left flex-1">
										<div className="text-white font-semibold text-sm">Email</div>
										<div className="text-yellow-400 flex items-center gap-2">
											info@schmidt-cars.ru
											<svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
											</svg>
										</div>
										<div className="text-gray-400 text-xs">Для заявок</div>
									</div>
								</button>
							</div>
						</div>

						{/* Правая часть - Форма */}
						<div className="space-y-4">
										<h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Оставить заявку</h3>
			
			<form onSubmit={handleSubmit} className="space-y-4" role="form" aria-labelledby="contact-form-title">
								<div className="space-y-2">
									<label htmlFor="phone" className="text-sm font-semibold text-white">
										Телефон *
									</label>
									<input
										type="tel"
										id="phone"
										name="phone"
										value={phone}
										onChange={handleInputChange}
										required
										disabled={isLoading}
										className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/30 rounded-xl text-white placeholder-gray-400 focus:border-yellow-400/50 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
										placeholder="+7 (___) ___-__-__"
										aria-required="true"
									/>
								</div>

								{/* Согласие на обработку персональных данных */}
								<div className="space-y-2">
									<div className="flex items-start gap-3">
										<input
											type="checkbox"
											id="agree"
											name="agree"
											checked={agreeToPrivacy}
											onChange={handleAgreeChange}
											required
											disabled={isLoading}
											className="mt-1 w-4 h-4 text-yellow-400 bg-gray-800/50 border border-gray-600/30 rounded focus:ring-2 focus:ring-yellow-400/20 focus:ring-offset-0 focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
											aria-required="true"
										/>
										<label htmlFor="agree" className="text-sm text-gray-300 leading-relaxed">
											Я соглашаюсь на обработку персональных данных в соответствии с{' '}
											<a 
												href="/privacy-policy" 
												target="_blank" 
												rel="noopener noreferrer"
												className="text-yellow-400 hover:text-yellow-300 underline transition-colors"
											>
												Политикой конфиденциальности
											</a>
											. *
										</label>
									</div>
								</div>
								
								{/* Статус отправки */}
								{submitStatus === 'success' && (
									<div className="p-3 bg-green-500/20 border border-green-400/30 rounded-xl">
										<p className="text-green-400 text-sm font-medium">
											✅ Заявка успешно отправлена! Мы свяжемся с вами.
										</p>
									</div>
								)}
								
								{submitStatus === 'error' && (
									<div className="p-3 bg-red-500/20 border border-red-400/30 rounded-xl">
										<p className="text-red-400 text-sm font-medium">
											❌ {!phone.trim() ? 'Введите номер телефона.' : !agreeToPrivacy ? 'Необходимо согласие на обработку персональных данных.' : 'Ошибка отправки заявки. Попробуйте еще раз или свяжитесь с нами напрямую.'}
										</p>
									</div>
								)}
								
								<button
									type="submit"
									disabled={isLoading || !phone.trim() || !agreeToPrivacy}
									className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105 font-semibold py-3 px-6 rounded-xl text-lg shadow-lg hover:shadow-xl hover:shadow-yellow-400/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
								>
									{isLoading ? (
										<div className="flex items-center justify-center gap-2">
											<div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
											Отправка...
										</div>
									) : (
										'Отправить заявку'
									)}
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
} 