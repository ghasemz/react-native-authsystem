FROM node:6.2.2-wheezy
ADD sources.list /etc/apt/sources.list
RUN apt-get -y update && apt-get -y --force-yes install git curl libkrb5-dev
#RUN npm install -g n && n 6.2.1 && rm -rf /usr/bin/node && ln -s /usr/local/bin/node /usr/bin/node
#RUN npm install -g npm@3.9.3
MAINTAINER Hamed Ghasemzadeh version: 0.2

RUN mkdir -p /opt/app/dist && mkdir -p /opt/app/src
WORKDIR /opt/app

RUN cd $(npm root -g)/npm \
 && npm install fs-extra \
 && sed -i -e s/graceful-fs/fs-extra/ -e s/fs\.rename/fs.move/ ./lib/utils/rename.js

RUN  npm install body-parser cache-manager cache-manager-mongodb cache-manager-redis compression
RUN  npm install cookie-parser cookie-session express express-session jade jade-cache soap
RUN  npm install -g webpack


ADD ./package.json /opt/app/package.json

RUN npm install
ADD ./webpack.config.js /opt/app/webpack.config.js
COPY ./src /opt/app/src/

RUN webpack

ENV DEPLOYMENT PROD
ENV NODE_ENV production
EXPOSE 80
EXPOSE 443

ENV PORT 80
CMD ["npm", "start"]