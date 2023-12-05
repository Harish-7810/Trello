FROM node:latest

WORKDIR /test

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=4201

EXPOSE 4201

CMD ["npm", "run", "start"]