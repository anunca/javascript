ARG NODE_IMAGE=node:26.1.0-alpine

FROM $NODE_IMAGE

WORKDIR /app

COPY src/package.json .

RUN npm i

ENTRYPOINT [ "npm" ]
CMD [ "start" ]
