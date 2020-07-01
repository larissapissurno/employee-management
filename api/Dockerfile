#stage 1 building the code
FROM node:alpine as builder
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

#stage 2
FROM node:alpine
WORKDIR /usr/app
COPY package*.json ./
RUN npm install

COPY --from=builder /usr/app/dist ./dist

COPY ormconfig.docker.json ./ormconfig.json

EXPOSE 3333
CMD ["npm", "start"]
