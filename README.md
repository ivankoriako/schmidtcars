# SCHMIDT Cars - Премиум аренда автомобилей

Этот проект представляет собой веб-сайт для премиум аренды автомобилей с водителем во Владивостоке.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Настройка Telegram бота

Для работы формы обратной связи с отправкой сообщений в Telegram группу необходимо настроить бота:

### 1. Создание бота

1. Найдите @BotFather в Telegram
2. Отправьте команду `/newbot`
3. Следуйте инструкциям для создания бота
4. Сохраните полученный токен бота

### 2. Добавление бота в группу

1. Создайте группу в Telegram или используйте существующую
2. Добавьте вашего бота в группу
3. Сделайте бота администратором группы
4. Получите ID группы (можно использовать @userinfobot или отправить сообщение в группу и посмотреть в API)

### 3. Настройка переменных окружения

Создайте файл `.env.local` в корне проекта:

```bash
# Telegram Bot Configuration
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
```

**Где:**
- `TELEGRAM_BOT_TOKEN` - токен вашего бота (получен от @BotFather)
- `TELEGRAM_CHAT_ID` - ID вашей группы (может быть отрицательным для групп)

### 4. Получение Chat ID

Для получения ID группы:

1. Добавьте бота в группу
2. Отправьте любое сообщение в группу
3. Откройте в браузере: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
4. Найдите `chat.id` в ответе - это и есть ID группы

### 5. Тестирование

После настройки:
1. Запустите проект: `npm run dev`
2. Откройте форму обратной связи
3. Введите номер телефона и отправьте заявку
4. Проверьте, что сообщение появилось в вашей Telegram группе

## Структура проекта

```
src/
├── app/
│   ├── api/
│   │   └── telegram/
│   │       └── route.ts          # API для отправки в Telegram
│   ├── components/
│   │   └── forms/
│   │       └── ContactForm.tsx   # Форма обратной связи
│   └── ...
└── ...
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
