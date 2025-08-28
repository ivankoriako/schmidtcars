# Деплой на Netlify

## Подготовка к деплою

### 1. Настройка репозитория

Убедитесь, что ваш код находится в Git репозитории (GitHub, GitLab, Bitbucket).

### 2. Переменные окружения

В настройках Netlify добавьте следующие переменные окружения:

```
TELEGRAM_BOT_TOKEN=your_telegram_bot_token_here
TELEGRAM_CHAT_ID=your_telegram_chat_id_here
NEXT_PUBLIC_SITE_URL=https://your-site-name.netlify.app
NEXT_PUBLIC_SITE_NAME=SCHMIDT Cars
NEXT_PUBLIC_API_URL=https://your-site-name.netlify.app/api
```

### 3. Настройки сборки

- **Build command:** `npm run build`
- **Publish directory:** `.next`
- **Node version:** 18.x

## Процесс деплоя

### Автоматический деплой (рекомендуется)

1. Зайдите на [netlify.com](https://netlify.com)
2. Нажмите "New site from Git"
3. Выберите ваш репозиторий
4. Настройте параметры сборки:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Нажмите "Deploy site"

### Ручной деплой

1. Выполните сборку локально:
   ```bash
   npm run build
   ```

2. Загрузите папку `.next` в Netlify через drag & drop

## Настройки домена

1. В настройках сайта перейдите в "Domain settings"
2. Добавьте ваш кастомный домен
3. Настройте SSL сертификат (автоматически)

## Мониторинг

- Проверяйте логи сборки в разделе "Deploys"
- Настройте уведомления о деплоях
- Мониторьте производительность в разделе "Analytics"

## Troubleshooting

### Ошибки сборки

1. Проверьте версию Node.js (должна быть 18.x)
2. Убедитесь, что все зависимости установлены
3. Проверьте логи сборки в Netlify

### Проблемы с API routes

1. Убедитесь, что `output: 'export'` закомментирован в `next.config.ts`
2. Проверьте, что API routes работают локально

### Проблемы с изображениями

1. Убедитесь, что `images.unoptimized: true` в `next.config.ts`
2. Проверьте пути к изображениям

## Поддержка

При возникновении проблем:
1. Проверьте логи в Netlify
2. Убедитесь, что все переменные окружения настроены
3. Проверьте совместимость версий Node.js и Next.js 