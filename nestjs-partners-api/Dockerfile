FROM node:21-alpine

# RUN apt update && apt install -y openssl procps

RUN npm install -g @nestjs/cli@10.3.2

WORKDIR /home/node/app

USER node

# Keeps the container running
CMD tail -f /dev/null