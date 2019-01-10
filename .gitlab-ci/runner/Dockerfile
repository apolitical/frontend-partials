FROM node:10-stretch-slim

WORKDIR /app

RUN chown 1000:1000 .

USER 1000

LABEL maintainer="engineering@apolitical.co"

COPY . .

RUN npm install
