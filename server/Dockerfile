# Dockerfile
FROM node:lts-buster-slim AS development

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY --chown=node:node . .

EXPOSE 3001

CMD [ "npm", "run", "dev" ]