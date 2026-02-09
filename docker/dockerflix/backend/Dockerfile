FROM node:24-alpine

WORKDIR /app
COPY . .

RUN npm install

EXPOSE 4050

CMD ["node", "server.js", "--host", "0.0.0.0", "--port", "4050"]