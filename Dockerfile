FROM node:18

WORKDIR /usr/src/app

# Instalación global de pnpm y Nest CLI
RUN npm install -g pnpm @nestjs/cli

COPY pnpm-lock.yaml package.json ./

RUN pnpm install

COPY . .

# Hacer ejecutables los binarios de node_modules
RUN chmod -R +x /usr/src/app/node_modules/.bin

# Crear un enlace simbólico para Nest CLI
RUN [ -e /usr/local/bin/nest ] || ln -s /usr/src/app/node_modules/@nestjs/cli/bin/nest.js /usr/local/bin/nest

RUN pnpm run build

# outils de MongoDB
RUN apt-get update \
    && apt-get install -y mongodb-clients \
    && rm -rf /var/lib/apt/lists/*

EXPOSE 3002

CMD ["pnpm", "run", "start:prod"]
