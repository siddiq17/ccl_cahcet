#!/bin/bash

APP_NAME="ccl_cahcet"
NEW_CONTAINER="ccl_cahcet_new"
PORT=3000
HOST_PORT=80

echo "Pulling latest changes..."
cd /home/ubuntu/ccl_cahcet || exit
git pull origin main

echo "Building new image..."
docker build -t library-site:latest .

echo "Running new container on port $PORT..."
docker run -d -p $HOST_PORT:3001 --name $NEW_CONTAINER library-site:latest

echo "Waiting for new container to be ready..."
sleep 5  # Optional: increase if needed for build time

# Simple health check
if curl -s http://localhost:3001 > /dev/null; then
  echo "✅ New container is healthy. Swapping..."

  echo "Stopping and removing old container..."
  docker stop $APP_NAME
  docker rm $APP_NAME

  echo "Starting new container on live port..."
  docker stop $NEW_CONTAINER
  docker rm $NEW_CONTAINER
  docker run -d -p $HOST_PORT:$PORT --name $APP_NAME library-site:latest

  echo "🚀 Swapped successfully! Website updated."
else
  echo "❌ New container failed health check. Keeping old site live."
  docker stop $NEW_CONTAINER
  docker rm $NEW_CONTAINER
fi
