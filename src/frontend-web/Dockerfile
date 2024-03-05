FROM node:21.6-alpine

RUN mkdir -p /dinedash-wfe/src

WORKDIR /dinedash-wfe/src

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]