FROM node:6-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm install pm2 -g --silent

COPY package.json /usr/src/app

RUN npm install --silent

COPY . /usr/src/app

RUN npm run build && npm prune --silent --production

ENV NODE_ENV production

EXPOSE 3000
CMD ["pm2-docker", "process.json"]
