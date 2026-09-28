ARG NODE_IMAGE=node:26.7.0-alpine

FROM $NODE_IMAGE AS dev

WORKDIR /app

COPY src/package.json .
RUN npm install

ENTRYPOINT [ "npm" ]
CMD [ "run", "start:dev" ]

FROM dev AS prod

RUN npm prune --omit=dev

COPY src .

CMD [ "start" ]
