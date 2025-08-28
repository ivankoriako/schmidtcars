# 🔒 Настройка переменных окружения

## 📋 Что нужно сделать

### 1. **Создать Telegram бота** (если еще нет)
1. Написать в Telegram боту [@BotFather](https://t.me/BotFather)
2. Создать нового бота командой `/newbot`
3. Следовать инструкциям и получить **BOT_TOKEN**

### 2. **Получить CHAT_ID**
1. Создать группу/канал в Telegram
2. Добавить бота как администратора
3. Написать в группу любое сообщение
4. Перейти по ссылке: `https://api.telegram.org/bot<BOT_TOKEN>/getUpdates`
5. Найти в ответе `"chat":{"id":-123456789}` - это ваш **CHAT_ID**

### 3. **Локальная разработка**
Создать файл `.env.local` в корне проекта:
```env
NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=ваш_bot_token_здесь
NEXT_PUBLIC_TELEGRAM_CHAT_ID=ваш_chat_id_здесь
```

### 4. **Netlify Production**
1. Перейти в **Site settings → Environment variables**
2. Добавить переменные:
   - `NEXT_PUBLIC_TELEGRAM_BOT_TOKEN` = ваш bot token
   - `NEXT_PUBLIC_TELEGRAM_CHAT_ID` = ваш chat id

## ⚠️ **Важно!**

- Префикс `NEXT_PUBLIC_` **обязателен** для статических сайтов
- Эти переменные будут видны в браузере (это нормально для Telegram ботов)
- Не используйте секретные API ключи с этим префиксом

## 🧪 **Тестирование**

После настройки переменных:
1. Соберите проект: `npm run build`
2. Деплойте на Netlify
3. Заполните форму на сайте
4. Проверьте сообщение в Telegram группе

## 🔍 **Диагностика**

Если не работает:
1. Откройте Developer Tools (F12) → Console
2. Посмотрите на ошибки при отправке формы
3. Проверьте что переменные установлены: `console.log(process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN)` 