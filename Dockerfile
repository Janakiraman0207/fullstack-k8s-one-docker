FROM node:18-alpine

WORKDIR /app

# Copy backend
COPY backend ./backend

# Copy frontend
COPY frontend ./frontend

# Install backend dependencies
WORKDIR /app/backend
RUN npm install

# Final working directory
WORKDIR /app

EXPOSE 5000

CMD ["node", "backend/server.js"]
