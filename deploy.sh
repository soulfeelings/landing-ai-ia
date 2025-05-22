#!/bin/bash
# MOCK FOR REAL DEPLOY SCRIPT

# Загрузка переменных окружения
if [ ! -f .env ]; then
    echo "❌ Error: .env file not found!"
    exit 1
fi

source .env

# Сборка React приложения
echo "🔨 Building React application..."
npm run build

# Копирование файлов на сервер
echo "📤 Copying files to server..."
scp -r dist/* $USER@$IP:$PATH_TO_PUBLIC_FOLDER/
scp server.js $USER@$IP:$PATH_TO_SERVER_JS
scp package.json $USER@$IP:$PATH_TO_PUBLIC_FOLDER/
scp .env $USER@$IP:$PATH_TO_ENV

# Подключение к серверу и перезапуск приложения
echo "🚀 Restarting application on server..."
ssh $USER@$IP << 'ENDSSH'
cd $PATH_TO_PUBLIC_FOLDER
npm install --production
pm2 restart landing || pm2 start server.js --name landing
ENDSSH

echo "✅ Deployment completed!" 