ARG NODE_VERSION=16.14-alpine

FROM node:${NODE_VERSION} as node

FROM node as client-local-build

WORKDIR /app
COPY package*.json /app/
RUN ls /app
RUN npm install
COPY . .
CMD ["npm", "start"]
