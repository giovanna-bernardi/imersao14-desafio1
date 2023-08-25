FROM node:20-slim

WORKDIR /home/node/app

RUN apt-get update -y && apt-get install -y openssl

USER node

CMD [ "tail", "-f", "/dev/null" ]
