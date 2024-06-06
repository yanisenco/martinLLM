# Dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn upgrade langsmith

EXPOSE 8888

CMD [ "npm", "run", "dev" ]