exports.handler = async (event, context) => {
  // Разрешаем только POST запросы
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    }
  }

  try {
    const { phone, privacyConsent, consentDate } = JSON.parse(event.body)

    if (!phone) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Телефон обязателен' })
      }
    }

    if (!privacyConsent) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Необходимо согласие на обработку персональных данных' })
      }
    }

    // Конфигурация Telegram бота из переменных окружения Netlify
    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID

    if (!BOT_TOKEN || !CHAT_ID) {
      console.error('Отсутствуют переменные окружения для Telegram')
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Ошибка конфигурации' })
      }
    }

    // Формируем сообщение с информацией о согласии
    const message = `🚗 *Новая заявка с сайта*

📞 Телефон: \`${phone}\`
⏰ Время: ${new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Vladivostok' })}
🌐 Источник: Сайт SCHMIDT Cars
✅ Согласие на обработку ПД: ${privacyConsent ? 'Да' : 'Нет'}
📅 Дата согласия: ${consentDate ? new Date(consentDate).toLocaleString('ru-RU', { timeZone: 'Asia/Vladivostok' }) : 'Не указана'}

_Заявка на ВЭФ 2025_`

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
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Ошибка отправки сообщения' })
      }
    }

    const responseData = await telegramResponse.json()
    console.log('Успешная отправка в Telegram:', responseData)

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({ success: true, message: 'Заявка отправлена' })
    }
  } catch (error) {
    console.error('Ошибка обработки заявки:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Внутренняя ошибка сервера' })
    }
  }
} 