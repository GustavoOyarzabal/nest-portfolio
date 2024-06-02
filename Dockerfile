FROM node:18

WORKDIR /usr/src/app

RUN npm install -g pnpm

COPY pnpm-lock.yaml ./
COPY package.json ./

RUN pnpm install

RUN pnpm add -g @nestjs/cli

COPY . .

RUN chmod -R +x node_modules/.bin

RUN pnpm run build

EXPOSE 3001

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
