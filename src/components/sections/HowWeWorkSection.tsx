'use client'

export default function HowWeWorkSection() {
	const handleWhatsAppContact = () => {
		const message = `Здравствуйте! Хочу узнать подробнее о процессе работы и заказать автомобиль для ВЭФ 2025`
		window.open(`https://wa.me/74232802002?text=${encodeURIComponent(message)}`, '_blank')
	}

	const workSteps = [
		{
			step: '01',
			icon: '📞',
			title: 'Заявка и консультация',
			description: 'Свяжитесь с нами по телефону или WhatsApp. Наш менеджер подберет оптимальное решение для ваших потребностей на ВЭФ 2025',
			details: ['Индивидуальная консультация', 'Подбор автомобиля', 'Расчет стоимости', 'Согласование маршрута']
		},
		{
			step: '02',
			icon: '📋',
			title: 'Оформление заказа',
			description: 'Оформление договора, подготовка автомобиля премиум-класса и назначение профессионального водителя',
			details: ['Оформление договора', 'Проверка документов', 'Подготовка автомобиля', 'Инструктаж водителя']
		},
		{
			step: '03',
			icon: '🚗',
			title: 'Подача автомобиля',
			description: 'Точная подача автомобиля в назначенное время и место. Водитель встретит вас с именной табличкой',
			details: ['Подача в назначенное время', 'Встреча с табличкой', 'Проверка документов', 'Инструктаж по маршруту']
		},
		{
			step: '04',
			icon: '⭐',
			title: 'Путешествие',
			description: 'Комфортное путешествие с профессиональным водителем. Всегда на связи для решения вопросов',
			details: ['Комфортное путешествие', 'Профессиональный водитель', 'Поддержка 24/7', 'Безопасность']
		},
		{
			step: '05',
			icon: '💰',
			title: 'Завершение',
			description: 'Завершение поездки, оплата услуг и обратная связь для улучшения качества обслуживания',
			details: ['Завершение поездки', 'Оплата услуг', 'Обратная связь', 'Следующее путешествие']
		}
	]

	const advantages = [
		{
			icon: '🏆',
			title: 'Официальный статус',
			description: 'Аккредитованный партнер ВЭФ 2025',
			highlight: 'Все необходимые допуски и лицензии'
		},
		{
			icon: '⚡',
			title: 'Профессиональное обслуживание',
			description: 'Качественное обслуживание клиентов',
			details: ['Профессиональный подход', 'Качество обслуживания', 'Внимание к деталям']
		},
		{
			icon: '🛡️',
			title: 'Гарантии качества',
			description: 'Страховка и полная ответственность',
			highlight: '100% возврат при неудовлетворительном сервисе'
		},
		{
			icon: '💼',
			title: 'Деловой протокол',
			description: 'Соблюдение всех протоколов ВЭФ',
			highlight: 'Опыт работы с высокопоставленными лицами'
		}
	]

	const specialOffers = [
		{
			icon: '🎯',
			title: 'Индивидуальный подход',
			description: 'Персональный менеджер для каждого клиента ВЭФ',
			price: 'Персонализация включена'
		},
		{
			icon: '📱',
			title: 'Мобильное приложение',
			description: 'Отслеживание автомобиля в реальном времени',
			price: 'Бесплатно для всех клиентов'
		},
		{
			icon: '🌟',
			title: 'VIP-пакет ВЭФ',
			description: 'Комплексное обслуживание на все дни форума',
			price: 'Скидка до 25%'
		}
	]

	return (
		<section className="relative py-20 pt-24 bg-gradient-to-br from-gray-900 via-green-900 to-gray-800 overflow-hidden">
			{/* Статичный фон */}
			<div className="absolute inset-0">
				<div className="absolute top-1/4 left-1/6 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
				<div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
			</div>
			
			{/* Статичная сетка */}
			<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
			
			<div className="container-modern relative z-10">
				{/* Заголовок секции */}
				<div className="text-center space-y-6 mb-16">
					<div className="inline-block px-6 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full backdrop-blur-sm">
						<span className="text-yellow-400 font-bold text-sm tracking-widest uppercase">Процесс работы • 4 простых шага</span>
					</div>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
						<span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
							Как мы работаем
						</span>
					</h2>
					<p className="text-body text-gray-300 max-w-3xl mx-auto">
						Простой и понятный процесс бронирования автомобиля с водителем
					</p>
				</div>
				
				{/* Шаги работы */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Шаг 1 */}
					<div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30 hover:shadow-xl transition-shadow duration-300">
						<div className="space-y-6">
							<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
								<span className="text-2xl font-bold text-white">1</span>
							</div>
							<div className="space-y-4">
								<h3 className="text-2xl md:text-3xl font-bold text-white">Заявка</h3>
								<p className="text-body text-gray-300">Оставьте заявку через сайт, телефон или WhatsApp</p>
							</div>
							<div className="space-y-3">
								<div className="flex items-center text-sm text-gray-400">
									<div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
									Укажите дату и время
								</div>
								<div className="flex items-center text-sm text-gray-400">
									<div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
									Выберите автомобиль
								</div>
								<div className="flex items-center text-sm text-gray-400">
									<div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
									Укажите маршрут
								</div>
							</div>
						</div>
					</div>
					
					{/* Шаг 2 */}
					<div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30 hover:shadow-xl transition-shadow duration-300">
						<div className="space-y-6">
							<div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center">
								<span className="text-2xl font-bold text-white">2</span>
							</div>
							<div className="space-y-4">
								<h3 className="text-2xl md:text-3xl font-bold text-white">Подтверждение</h3>
								<p className="text-body text-gray-300">Менеджер свяжется с вами для уточнения деталей</p>
							</div>
							<div className="space-y-3">
								<div className="flex items-center text-sm text-gray-400">
									<div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
									По договоренности
								</div>
								<div className="flex items-center text-sm text-gray-400">
									<div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
									Уточнение деталей
								</div>
								<div className="flex items-center text-sm text-gray-400">
									<div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
									Расчет стоимости
								</div>
							</div>
						</div>
					</div>
					
					{/* Шаг 3 */}
					<div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30 hover:shadow-xl transition-shadow duration-300">
						<div className="space-y-6">
							<div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
								<span className="text-2xl font-bold text-white">3</span>
							</div>
							<div className="space-y-4">
								<h3 className="text-2xl md:text-3xl font-bold text-white">Подача</h3>
								<p className="text-body text-gray-300">Автомобиль подается точно в назначенное время</p>
							</div>
							<div className="space-y-3">
								<div className="flex items-center text-sm text-gray-400">
									<div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
									Точная подача
								</div>
								<div className="flex items-center text-sm text-gray-400">
									<div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
									Чистый автомобиль
								</div>
								<div className="flex items-center text-sm text-gray-400">
									<div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
									Профессиональный водитель
								</div>
							</div>
						</div>
					</div>
					
					{/* Шаг 4 */}
					<div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30 hover:shadow-xl transition-shadow duration-300">
						<div className="space-y-6">
							<div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center">
								<span className="text-2xl font-bold text-white">4</span>
							</div>
							<div className="space-y-4">
								<h3 className="text-2xl md:text-3xl font-bold text-white">Оплата</h3>
								<p className="text-body text-gray-300">Удобная оплата наличными или безналом</p>
							</div>
							<div className="space-y-3">
								<div className="flex items-center text-sm text-gray-400">
									<div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
									Наличными водителю
								</div>
								<div className="flex items-center text-sm text-gray-400">
									<div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
									Безналичный расчет
								</div>
								<div className="flex items-center text-sm text-gray-400">
									<div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
									С НДС по запросу
								</div>
							</div>
						</div>
					</div>
				</div>
				
				{/* Дополнительная информация */}
				<div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30 text-center space-y-4">
						<div className="text-4xl font-bold text-yellow-400">60 мин</div>
						<div className="text-caption text-gray-400">Время ответа на заявку</div>
					</div>
					<div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30 text-center space-y-4">
						<div className="text-4xl font-bold text-yellow-400">24/7</div>
						<div className="text-caption text-gray-400">Доступность сервиса</div>
					</div>
					<div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-600/30 text-center space-y-4">
						<div className="text-4xl font-bold text-yellow-400">100%</div>
						<div className="text-caption text-gray-400">Гарантия подачи</div>
					</div>
				</div>
			</div>
		</section>
	)
} 