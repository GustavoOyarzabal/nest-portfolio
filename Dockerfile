FROM node:18

WORKDIR /usr/src/app

# Instalation global de pnpm and Cli
RUN npm install -g pnpm @nestjs/cli

# 
COPY pnpm-lock.yaml package.json ./

# Copy package.json => adresse work
#COPY pnpm-lock.yaml ./
#COPY package.json ./

# dependencies
RUN pnpm install

COPY . .

# scripts => node_modules/.bin =>licencie de execution
RUN chmod -R +x /usr/src/app/node_modules/.bin
# lic de nest
RUN [ -e /usr/local/bin/nest ] || ln -s /usr/src/app/node_modules/@nestjs/cli/bin/nest.js /usr/local/bin/nest

# build 
RUN pnpm run build

EXPOSE 3002

CMD ["pnpm", "run", "start:prod"]








# FROM node:18

# WORKDIR /usr/src/app

# COPY package.json ./ pnpm-lock.yaml ./

# RUN npm install -g pnpm
# RUN pnpm install

# COPY . .

# RUN pnpm run build

# EXPOSE 3001

# CMD ["pnpm", "run", "start:prod"]
