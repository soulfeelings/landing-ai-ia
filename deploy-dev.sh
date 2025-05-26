#!/bin/bash
# MOCK FOR REAL DEPLOY SCRIPT

# Загрузка переменных окружения
if [ ! -f .env.dev ]; then
    echo "❌ Error: .env.dev file not found!"
    exit 1
fi

source .env.dev

# Сборка React приложения
echo "🔨 Building React application..."
npm run build

# Копирование файлов на сервер
echo "📤 Copying files to server..."
scp -r dist/* $USER@$IP:$PATH_TO_PUBLIC_FOLDER/
scp server.js $USER@$IP:$PATH_TO_SERVER_JS
scp package.json $USER@$IP:$PATH_TO_PROJECT_FOLDER/
scp .env.dev $USER@$IP:$PATH_TO_ENV

# Подключение к серверу и перезапуск приложения
echo "🚀 Restarting application on server..."
ssh $USER@$IP << ENDSSH
cd $PATH_TO_PROJECT_FOLDER
npm install --production
PORT=3001 pm2 restart landing-dev || PORT=3001 pm2 start server.js --name landing-dev
ENDSSH

echo "✅ Deployment completed!" 