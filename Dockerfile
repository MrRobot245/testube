FROM node:alpine AS builder

WORKDIR /app

COPY . .
ENV NG_CLI_ANALYTICS=ci
RUN export NG_CLI_ANALYTICS=ci && npm install ng build --prod

FROM nginx:alpine

COPY --from=builder /app/ /usr/share/nginx/html/