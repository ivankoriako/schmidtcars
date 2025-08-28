#!/bin/bash

# Скрипт для деплоя на Netlify

echo "🚀 Начинаем деплой на Netlify..."

# Проверяем, что мы в правильной директории
if [ ! -f "package.json" ]; then
    echo "❌ Ошибка: package.json не найден. Убедитесь, что вы находитесь в корневой папке проекта."
    exit 1
fi

# Устанавливаем зависимости
echo "📦 Устанавливаем зависимости..."
npm install

# Проверяем, что все зависимости установлены
if [ $? -ne 0 ]; then
    echo "❌ Ошибка при установке зависимостей"
    exit 1
fi

# Собираем проект
echo "🔨 Собираем проект..."
npm run build

# Проверяем, что сборка прошла успешно
if [ $? -ne 0 ]; then
    echo "❌ Ошибка при сборке проекта"
    exit 1
fi

echo "✅ Сборка завершена успешно!"
echo ""
echo "📋 Следующие шаги для деплоя на Netlify:"
echo "1. Зайдите на https://netlify.com"
echo "2. Нажмите 'New site from Git'"
echo "3. Выберите ваш репозиторий"
echo "4. Настройте параметры сборки:"
echo "   - Build command: npm run build"
echo "   - Publish directory: .next"
echo "5. Добавьте переменные окружения в настройках сайта"
echo "6. Нажмите 'Deploy site'"
echo ""
echo "📖 Подробные инструкции см. в файле NETLIFY_DEPLOY.md" 