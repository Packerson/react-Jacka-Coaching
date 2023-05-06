ARG NODE_VERSION=16.14-alpine

FROM node:${NODE_VERSION} as node

FROM node as client-local-build

WORKDIR /app
ENV PATH="/app/node_modules/.bin:$PATH"
COPY package.json package-lock.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]