// Адаптированное решение из Vite проекта для Next.js
interface FormData {
  phone: string
  privacyConsent: boolean
  consentDate: string
}

export async function sendToTelegram(data: FormData) {
  // Токены как в вашем рабочем Vite проекте - прямо в коде
  const TELEGRAM_BOT_TOKEN = '8224853388:AAFyyvKvM8ishdsEGf_Ltig8jJMltLkUuVg'
  const TELEGRAM_CHAT_ID = '-4785642266'

  // Базовая проверка
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    throw new Error('Telegram configuration not found')
  }

  const message = `
🚗 *Новая заявка с сайта SCHMIDT Cars*

📞 Телефон: \`${data.phone}\`
⏰ Время: ${new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Vladivostok' })}
🌐 Источник: Сайт SCHMIDT Cars
✅ Согласие на обработку ПД: ${data.privacyConsent ? 'Да' : 'Нет'}
📅 Дата согласия: ${new Date(data.consentDate).toLocaleString('ru-RU', { timeZone: 'Asia/Vladivostok' })}

_Заявка на ВЭФ 2025_
`

  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error('Telegram API Error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorData
      })
      throw new Error(`Telegram API Error: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Failed to send message to Telegram:', error)
    throw error
  }
} 