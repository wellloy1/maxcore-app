FROM node:18-alpine

WORKDIR /app
COPY package.json .
COPY package-lock.json .

RUN npm ci --omit=dev
COPY knexfile.js .
COPY ./migrations ./migrations
COPY ./schemas ./schemas
