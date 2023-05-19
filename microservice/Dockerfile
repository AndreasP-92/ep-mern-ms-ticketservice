FROM node:alpine
WORKDIR /microservice
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm install
RUN npm install nodemon
EXPOSE  4001
CMD ["npm", "start"]