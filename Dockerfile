FROM node

RUN mkdir /src

WORKDIR /src

ADD ./src /src

RUN npm install

CMD ["npm", "run", "start"]