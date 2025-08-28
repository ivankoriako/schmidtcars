# 🚀 Быстрый деплой на Netlify

## Готово к деплою! ✅

Ваш проект настроен для деплоя на Netlify. Все необходимые файлы созданы:

- ✅ `netlify.toml` - конфигурация Netlify
- ✅ `next.config.ts` - настроен для продакшена
- ✅ `deploy.sh` - скрипт для сборки
- ✅ `NETLIFY_DEPLOY.md` - подробные инструкции

## 🎯 Быстрые шаги:

### 1. Подготовка репозитория
```bash
# Убедитесь, что все изменения закоммичены
git add .
git commit -m "Подготовка к деплою на Netlify"
git push origin main
```

### 2. Деплой на Netlify

1. **Перейдите на [netlify.com](https://netlify.com)**
2. **Нажмите "New site from Git"**
3. **Выберите ваш репозиторий** (GitHub/GitLab/Bitbucket)
4. **Настройте параметры сборки:**
   - Build command: `npm run build`
   - Publish directory: `.next`
5. **Нажмите "Deploy site"**

### 3. Настройка переменных окружения

В настройках сайта (Site settings > Environment variables) добавьте:

```
TELEGRAM_BOT_TOKEN=ваш_токен_бота
TELEGRAM_CHAT_ID=ваш_chat_id
NEXT_PUBLIC_SITE_URL=https://ваш-сайт.netlify.app
NEXT_PUBLIC_SITE_NAME=SCHMIDT Cars
```

### 4. Проверка деплоя

- ✅ Сайт доступен по адресу `https://ваш-сайт.netlify.app`
- ✅ Все страницы работают
- ✅ API routes функционируют
- ✅ Изображения загружаются

## 🔧 Возможные проблемы:

### Ошибка сборки
- Проверьте версию Node.js (должна быть 18.x)
- Убедитесь, что все зависимости в `package.json`

### API не работает
- Проверьте переменные окружения
- Убедитесь, что `output: 'export'` закомментирован

### Изображения не загружаются
- Проверьте пути в `public/`
- Убедитесь, что `images.unoptimized: true`

## 📞 Поддержка

При проблемах:
1. Проверьте логи в Netlify (Deploys > Latest deploy)
2. Убедитесь, что все переменные окружения настроены
3. См. подробные инструкции в `NETLIFY_DEPLOY.md`

---

**🎉 Поздравляем! Ваш сайт готов к продакшену!** 