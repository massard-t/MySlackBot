FROM node:8.5.0

WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json

RUN npm install

COPY . /usr/src/app/

CMD npm start
