FROM node:6.12-alpine

WORKDIR /app

COPY . /app/
RUN npm install

EXPOSE 3000

CMD [ "node", "server.js" ]