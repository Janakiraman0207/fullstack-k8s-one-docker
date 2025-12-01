FROM node:18-alpine

WORKDIR /app

# Copy backend and frontend
COPY backend ./backend
COPY frontend ./frontend

# Install backend dependencies
WORKDIR /app/backend
RUN npm install

# Go back to app root
WORKDIR /app

EXPOSE 5000

CMD ["node", "backend/server.js"]
