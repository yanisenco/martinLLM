# Dockerfile
FROM node:lts-buster-slim AS development

WORKDIR /app

COPY package*.json yarn.lock ./

RUN yarn install --legacy-peer-deps

COPY --chown=node:node . .

EXPOSE 3001

CMD [ "yarn", "run", "dev" ]