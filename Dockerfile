FROM node:12.18.4

WORKDIR /proxy

COPY package*.json ./

RUN npm install

COPY . .

# EXPOSE 3000
RUN npm run webpack

CMD ["npm", "start"]