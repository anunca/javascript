ARG NODE_IMAGE=node:26.1.0-alpine
ARG NGINX_VERSION=nginx:1.30.0-alpine

FROM $NODE_IMAGE AS dev

RUN npm i -g create-react-app

WORKDIR /app

ENTRYPOINT [ "npm" ]
CMD [ "start" ]

FROM dev AS build

COPY src .

RUN npm i --omit=dev\
  && npm run build

FROM $NGINX_VERSION AS prod

COPY --from=build /app/build /usr/share/nginx/html
