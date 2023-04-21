ARG NODE_VERSION=16.14-alpine

FROM node:${NODE_VERSION} as node

FROM node as client-local-build

WORKDIR /range-viewer-react
ENV PATH=".../node_modules/.bin:$PATH"
COPY . .
RUN npm install
CMD ["npm", "start"]
