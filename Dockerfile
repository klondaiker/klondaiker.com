FROM node:14

ARG APP_DIR=app
RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}

COPY package.json ./
COPY yarn.lock ./
RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "yarn", "run", "start" ]