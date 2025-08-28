import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Политика конфиденциальности | SCHMIDT Cars',
	description: 'Политика обработки персональных данных в соответствии с ФЗ-152. Информация о сборе, использовании и защите персональных данных.',
	keywords: 'политика конфиденциальности, персональные данные, ФЗ-152, защита данных',
	robots: {
		index: true,
		follow: true,
	},
}

export default function PrivacyPolicy() {
	return (
		<main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
			{/* Hero Section */}
			<section className="relative py-20 pt-32 overflow-hidden">
				{/* Фоновые элементы */}
				<div className="absolute inset-0">
					<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
				</div>
				
				<div className="container-modern relative z-10">
					<div className="text-center space-y-4 mb-12">
						<div className="inline-block px-6 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full backdrop-blur-sm">
							<span className="text-yellow-400 font-bold text-sm tracking-widest uppercase">Правовая информация</span>
						</div>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
							<span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
								Политика конфиденциальности
							</span>
						</h1>
						<p className="text-body text-gray-300 max-w-2xl mx-auto">
							Политика обработки персональных данных в соответствии с Федеральным законом от 27.07.2006 N 152-ФЗ "О персональных данных"
						</p>
					</div>
				</div>
			</section>

			{/* Content Section */}
			<section className="relative py-16">
				<div className="container-modern">
					<div className="max-w-4xl mx-auto">
						<div className="p-8 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30 space-y-8">
							
							{/* Общие положения */}
							<div className="space-y-4">
								<h2 className="text-3xl md:text-4xl font-bold text-white">1. Общие положения</h2>
								<div className="space-y-3 text-body text-gray-300">
									<p>
										1.1. Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок обработки персональных данных пользователей сайта <strong>schmidtcars.ru</strong> (далее — «Сайт») компанией ООО «Шмидт Машинери» (далее — «Компания», «мы», «нас»).
									</p>
									<p>
										1.2. Политика разработана в соответствии с Федеральным законом от 27.07.2006 N 152-ФЗ «О персональных данных» (далее — «ФЗ-152») и иными нормативными правовыми актами Российской Федерации.
									</p>
									<p>
										1.3. Используя Сайт и оставляя заявки, вы соглашаетесь с условиями настоящей Политики.
									</p>
								</div>
							</div>

							{/* Основные понятия */}
							<div className="space-y-4">
								<h2 className="text-3xl md:text-4xl font-bold text-white">2. Основные понятия</h2>
								<div className="space-y-3 text-body text-gray-300">
									<p>
										<strong>Персональные данные</strong> — любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу (субъекту персональных данных).
									</p>
									<p>
										<strong>Обработка персональных данных</strong> — любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными.
									</p>
									<p>
										<strong>Оператор персональных данных</strong> — ООО «Шмидт Машинери», самостоятельно или совместно с другими лицами организующее и (или) осуществляющее обработку персональных данных.
									</p>
								</div>
							</div>

							{/* Цели обработки */}
							<div className="space-y-4">
								<h2 className="text-3xl md:text-4xl font-bold text-white">3. Цели обработки персональных данных</h2>
								<div className="space-y-3 text-body text-gray-300">
									<p>3.1. Компания обрабатывает персональные данные в следующих целях:</p>
									<ul className="list-disc list-inside space-y-2 ml-4">
										<li>Обработка заявок на аренду автомобилей</li>
										<li>Связь с клиентами для уточнения деталей заказа</li>
										<li>Предоставление информации об услугах компании</li>
										<li>Улучшение качества обслуживания</li>
										<li>Выполнение обязательств по договорам</li>
										<li>Соблюдение требований законодательства РФ</li>
									</ul>
								</div>
							</div>

							{/* Состав обрабатываемых данных */}
							<div className="space-y-4">
								<h2 className="text-3xl md:text-4xl font-bold text-white">4. Состав обрабатываемых персональных данных</h2>
								<div className="space-y-3 text-body text-gray-300">
									<p>4.1. Компания обрабатывает следующие персональные данные:</p>
									<ul className="list-disc list-inside space-y-2 ml-4">
										<li>Номер телефона</li>
										<li>Дата и время отправки заявки</li>
										<li>IP-адрес пользователя</li>
										<li>Информация о согласии на обработку персональных данных</li>
									</ul>
									<p>
										4.2. В случае расширения функционала Сайта могут быть добавлены дополнительные поля для сбора персональных данных (имя, email и др.).
									</p>
								</div>
							</div>

							{/* Правовые основания */}
							<div className="space-y-4">
								<h2 className="text-3xl md:text-4xl font-bold text-white">5. Правовые основания обработки персональных данных</h2>
								<div className="space-y-3 text-body text-gray-300">
									<p>5.1. Обработка персональных данных осуществляется на основании:</p>
									<ul className="list-disc list-inside space-y-2 ml-4">
										<li>Согласия субъекта персональных данных на обработку его персональных данных</li>
										<li>Необходимости обработки для исполнения договора, стороной которого является субъект персональных данных</li>
										<li>Необходимости обработки для соблюдения обязательного для оператора законодательства</li>
									</ul>
								</div>
							</div>

							{/* Сроки обработки */}
							<div className="space-y-4">
								<h2 className="text-3xl md:text-4xl font-bold text-white">6. Сроки обработки персональных данных</h2>
								<div className="space-y-3 text-body text-gray-300">
									<p>
										6.1. Персональные данные обрабатываются в течение срока, необходимого для достижения целей обработки, указанных в разделе 3 настоящей Политики.
									</p>
									<p>
										6.2. Персональные данные удаляются или обезличиваются по достижении целей обработки или в случае утраты необходимости в достижении этих целей.
									</p>
								</div>
							</div>

							{/* Меры защиты */}
							<div className="space-y-4">
								<h2 className="text-3xl md:text-4xl font-bold text-white">7. Меры по защите персональных данных</h2>
								<div className="space-y-3 text-body text-gray-300">
									<p>7.1. Компания принимает необходимые и достаточные правовые, организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, предоставления, распространения персональных данных, а также от иных неправомерных действий в отношении персональных данных.</p>
									<p>7.2. Защита персональных данных обеспечивается следующими мерами:</p>
									<ul className="list-disc list-inside space-y-2 ml-4">
										<li>Использование защищенных каналов связи (HTTPS)</li>
										<li>Ограничение доступа к персональным данным</li>
										<li>Регулярное обновление систем безопасности</li>
										<li>Мониторинг и аудит доступа к данным</li>
									</ul>
								</div>
							</div>

							{/* Права субъектов */}
							<div className="space-y-4">
								<h2 className="text-3xl md:text-4xl font-bold text-white">8. Права субъектов персональных данных</h2>
								<div className="space-y-3 text-body text-gray-300">
									<p>8.1. Субъект персональных данных имеет право:</p>
									<ul className="list-disc list-inside space-y-2 ml-4">
										<li>Получать информацию, касающуюся обработки его персональных данных</li>
										<li>Требовать уточнения, блокирования или уничтожения своих персональных данных</li>
										<li>Отзывать согласие на обработку персональных данных</li>
										<li>Обжаловать действия или бездействие в Роскомнадзоре</li>
										<li>Защищать свои права и законные интересы, в том числе на возмещение убытков и (или) компенсацию морального вреда в судебном порядке</li>
									</ul>
								</div>
							</div>

							{/* Передача данных */}
							<div className="space-y-4">
								<h2 className="text-3xl md:text-4xl font-bold text-white">9. Передача персональных данных третьим лицам</h2>
								<div className="space-y-3 text-body text-gray-300">
									<p>
										9.1. Компания может передавать персональные данные третьим лицам только в следующих случаях:
									</p>
									<ul className="list-disc list-inside space-y-2 ml-4">
										<li>Получено согласие субъекта персональных данных</li>
										<li>Передача необходима для исполнения договора</li>
										<li>Передача предусмотрена законодательством РФ</li>
									</ul>
									<p>
										9.2. При передаче данных в Telegram (для уведомлений) обеспечивается защита данных в соответствии с политикой конфиденциальности Telegram.
									</p>
								</div>
							</div>

							{/* Контактная информация */}
							<div className="space-y-4">
								<h2 className="text-3xl md:text-4xl font-bold text-white">10. Контактная информация</h2>
								<div className="space-y-3 text-body text-gray-300">
									<p>10.1. По всем вопросам, связанным с обработкой персональных данных, обращайтесь:</p>
									<div className="p-4 bg-gray-700/30 rounded-xl space-y-2">
										<p><strong>ООО «Шмидт Машинери»</strong></p>
										<p>Адрес: 690091, г. Владивосток, ул. Светланская, 15</p>
										<p>Телефон: <a href="tel:+79084444043" className="text-yellow-400 hover:text-yellow-300">+7 908 444-40-43</a></p>
										<p>Email: <a href="mailto:info@schmidtcars.ru" className="text-yellow-400 hover:text-yellow-300">info@schmidtcars.ru</a></p>
									</div>
								</div>
							</div>

							{/* Заключительные положения */}
							<div className="space-y-4">
								<h2 className="text-3xl md:text-4xl font-bold text-white">11. Заключительные положения</h2>
								<div className="space-y-3 text-body text-gray-300">
									<p>
										11.1. Настоящая Политика вступает в силу с момента ее утверждения и действует бессрочно, до замены ее новой Политикой.
									</p>
									<p>
										11.2. Компания оставляет за собой право вносить изменения в настоящую Политику. В случае внесения изменений новая версия Политики публикуется на Сайте.
									</p>
									<p>
										11.3. Актуальная версия Политики всегда доступна на Сайте по адресу: <strong>schmidtcars.ru/privacy-policy</strong>
									</p>
								</div>
							</div>

							{/* Дата и подпись */}
							<div className="pt-8 border-t border-gray-600">
								<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
									<div className="text-sm text-gray-400">
										<p>Дата последнего обновления: 05.08.2025</p>
										<p>Версия: 1.0</p>
									</div>
									<Link 
										href="/"
										className="inline-flex items-center px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 transition-colors"
									>
										Вернуться на главную
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
} 