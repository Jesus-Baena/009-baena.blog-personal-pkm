# Stage 1: Build the site in a clean Node.js environment
FROM node:22-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx quartz build

# Stage 2: Serve the built site with a lightweight NGINX server
FROM nginx:stable
COPY --from=builder /app/public /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]