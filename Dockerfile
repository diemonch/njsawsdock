FROM node:13-alpine

WORKDIR /home/ec2-user/test/

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
CMD [ "pm2 run", "server.js" ]
