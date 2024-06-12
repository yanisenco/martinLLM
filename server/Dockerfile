# Dockerfile
FROM node:lts-buster-slim AS development

RUN apt-get update -y && apt-get install -y openssl

WORKDIR /app

COPY package*.json yarn.lock ./

RUN yarn install --legacy-peer-deps

COPY --chown=node:node . .

RUN npx prisma generate --schema=./prisma/schema.prisma && \
    npx prisma migrate deploy --schema=./prisma/schema.prisma

RUN yarn add bcrypt

EXPOSE 3001

CMD [ "yarn", "run", "start" ]