FROM node:18-alpine

WORKDIR /app

# Copy backend
COPY backend ./backend

# Copy frontend
COPY frontend ./frontend

# Install backend dependencies
WORKDIR /app/backend
RUN npm install

# Build frontend
WORKDIR /app/frontend
RUN npm install
RUN npm run build

# Move built frontend into backend/public
RUN mkdir -p /app/backend/public
RUN cp -r /app/frontend/dist/* /app/backend/public/

# Final working directory
WORKDIR /app/backend

EXPOSE 5000

CMD ["node", "server.js"]
