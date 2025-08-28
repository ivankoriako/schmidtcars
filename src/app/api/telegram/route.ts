import { NextRequest, NextResponse } from 'next/server'

// Конфигурация для статического экспорта
export const dynamic = 'force-static'
export const revalidate = false

export async function GET(request: NextRequest) {
	// Обработка webhook для Telegram
	const { searchParams } = new URL(request.url)
	const token = searchParams.get('token')
	
	if (token === process.env.TELEGRAM_BOT_TOKEN) {
		return NextResponse.json({ status: 'ok' })
	}
	
	return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
}

export async function POST(request: NextRequest) {
	try {
		const { phone, privacyConsent, consentDate } = await request.json()

		if (!phone) {
			return NextResponse.json(
				{ error: 'Телефон обязателен' },
				{ status: 400 }
			)
		}

		if (!privacyConsent) {
			return NextResponse.json(
				{ error: 'Необходимо согласие на обработку персональных данных' },
				{ status: 400 }
			)
		}

		// Конфигурация Telegram бота
		const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
		const CHAT_ID = process.env.TELEGRAM_CHAT_ID

		if (!BOT_TOKEN || !CHAT_ID) {
			console.error('Отсутствуют переменные окружения для Telegram')
			console.error('BOT_TOKEN:', BOT_TOKEN ? 'установлен' : 'отсутствует')
			console.error('CHAT_ID:', CHAT_ID ? 'установлен' : 'отсутствует')
			return NextResponse.json(
				{ error: 'Ошибка конфигурации' },
				{ status: 500 }
			)
		}

		// Формируем сообщение с информацией о согласии
		const message = `🚗 *Новая заявка с сайта*

📞 Телефон: \`${phone}\`
⏰ Время: ${new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Vladivostok' })}
🌐 Источник: Сайт SCHMIDT Cars
✅ Согласие на обработку ПД: ${privacyConsent ? 'Да' : 'Нет'}
📅 Дата согласия: ${consentDate ? new Date(consentDate).toLocaleString('ru-RU', { timeZone: 'Asia/Vladivostok' }) : 'Не указана'}

_Заявка на ВЭФ 2025_`

		console.log('Отправка сообщения в Telegram:', { 
			chat_id: CHAT_ID, 
			message,
			privacyConsent,
			consentDate 
		})

		// Логируем согласие на обработку персональных данных
		console.log('Согласие на обработку персональных данных:', {
			phone: phone,
			privacyConsent: privacyConsent,
			consentDate: consentDate,
			timestamp: new Date().toISOString(),
			ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
		})

		// Отправляем сообщение в Telegram
		const telegramResponse = await fetch(
			`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					chat_id: CHAT_ID,
					text: message,
					parse_mode: 'Markdown',
					disable_web_page_preview: true,
				}),
			}
		)

		if (!telegramResponse.ok) {
			const errorData = await telegramResponse.json()
			console.error('Ошибка отправки в Telegram:', errorData)
			return NextResponse.json(
				{ error: 'Ошибка отправки сообщения', details: errorData },
				{ status: 500 }
			)
		}

		const responseData = await telegramResponse.json()
		console.log('Успешная отправка в Telegram:', responseData)

		return NextResponse.json({ success: true, message: 'Заявка отправлена' })
	} catch (error) {
		console.error('Ошибка обработки заявки:', error)
		return NextResponse.json(
			{ error: 'Внутренняя ошибка сервера' },
			{ status: 500 }
		)
	}
} 