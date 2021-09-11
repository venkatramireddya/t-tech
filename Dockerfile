FROM node:14.6.0-alpine as builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build --prod
FROM nginx:1.19.1-alpine as prod
COPY nginx.config /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/t-tech /usr/share/nginx/html
EXPOSE 8000
