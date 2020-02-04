FROM node:alpine AS builder

WORKDIR /app

COPY . .
ENV NG_CLI_ANALYTICS=ci
RUN npm install && export NG_CLI_ANALYTICS=ci && ng build --prod

FROM nginx:alpine

COPY --from=builder /app/ /usr/share/nginx/html/