FROM node:latest

WORKDIR /sql

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3200

EXPOSE 3200

CMD ["npm", "start"]