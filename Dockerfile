FROM node:alpine

ENV HOME=/usr/app

COPY package*.json $HOME/server/

WORKDIR $HOME/server

RUN npm install -g typescript

RUN npm install

RUN npm install -g knex

RUN npm install --save knex

RUN npm install --save mysql

COPY . $HOME/server

CMD ["npm", "start"]
