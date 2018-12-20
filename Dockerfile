FROM node:10-alpine as build

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY .babelrc .
COPY webpack.config.js .
COPY flow-typed flow-typed
COPY helpers helpers
COPY src src

RUN npm run build

FROM nginx:1-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html/frontend-skeleton

WORKDIR /app

COPY Docker/launch.sh ./
RUN chmod +x launch.sh

CMD ["sh", "launch.sh"]
