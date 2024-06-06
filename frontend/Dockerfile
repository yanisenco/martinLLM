# Dockerfile
FROM node:lts-buster-slim AS development

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY --chown=node:node . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]