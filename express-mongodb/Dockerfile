ARG NODE_IMAGE=node:26.1.0-alpine

FROM $NODE_IMAGE AS dev

WORKDIR /app

ENTRYPOINT [ "npm" ]
CMD [ "run", "start:dev" ]

FROM dev AS prod

COPY src/package.json .

RUN npm i --omit=dev

COPY src .

CMD [ "start" ]
