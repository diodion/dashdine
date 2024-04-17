FROM node:21.6-alpine

RUN mkdir -p /dinedash/backend

WORKDIR /dinedash/backend

COPY package.json .

ENV NODE_ENV=env

RUN npm install

COPY . .

EXPOSE 3030

CMD ["npm", "start"]