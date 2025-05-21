#!/bin/bash
# MOCK FOR REAL DEPLOY SCRIPT

# Сборка React приложения
echo "🔨 Building React application..."
npm run build

# Проверка наличия .env файла
if [ ! -f .env ]; then
    echo "❌ Error: .env file not found!"
    exit 1
fi

# Копирование файлов на сервер
echo "📤 Copying files to server..."
scp -r dist/* user@your-server:/path/to/your/app/
scp server.js user@your-server:/path/to/your/app/
scp package.json user@your-server:/path/to/your/app/
scp .env user@your-server:/path/to/your/app/

# Подключение к серверу и перезапуск приложения
echo "🚀 Restarting application on server..."
ssh user@your-server << 'ENDSSH'
cd /path/to/your/app
npm install --production
pm2 restart your-app-name || pm2 start server.js --name your-app-name
ENDSSH

echo "✅ Deployment completed!" 