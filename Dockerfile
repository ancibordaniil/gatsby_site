FROM node:18

WORKDIR /app

COPY ./src ./src
COPY ./locales ./locales 
COPY . . 

RUN npm install

EXPOSE 8000

CMD ["npm", "run", "develop"]