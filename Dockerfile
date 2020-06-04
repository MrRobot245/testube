FROM node:alpine AS builder

WORKDIR /app

COPY . .

RUN npm install && npm run ng build --prod

FROM webdevops/apache:latest

COPY --from=builder /app/dist/ /app