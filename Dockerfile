FROM node:12
WORKDIR /target
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8082
CMD ["npm", "run", "start"]