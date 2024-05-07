<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# Portfolio

#
## Exécuter en développement (Francais)

1. Cloner le dépôt
2. Exécuter
```
npm i 
```
3. Avoir Nest CLI installé
```
npm i -g @nestjs/cli
```
4. Démarrer la base de données
```
docker-compose up -d
```
5. Cloner le fichier .env.template et renommer la copie en .env

6. Supprimer le "defaultLimit" de "portfolios.Service.ts", de "joi.validation.ts" et de "env.config.ts"

7. Remplir les variables d'environnement définies dans le .env

8. Exécuter l'application en mode 'dev'

Stack utilisée:
* MongoDB
* Nest


## Ejecutar en desarrollo (Español)

1. Clonar el repositorio
2. Ejecutar
```
npm i
```
3. Tener Nest CLI instalado 
```
npm i -g @nestjs/cli
```
4. Levantar la base de datos
```
docker-compose up -d
```
5. Clonar el archivo __.env.template__ y renombrar la copia a __.env__

6. Eliminar el "defaultLimit": del "portfolios.Service.ts", del "joi.validation.ts" y del "env.config.ts"

7. Llenar las variables de entorno definidas en el ```.env```

8. Ejecutar la aplicacion en 'dev':
```
npm run start:dev
```

Stack usado:
* MongoDB
* Nest


#
# Run in development (English)

1. Clone the repository
2. Run
```
npm i
```
3. Have Nest CLI installed
```
npm i -g @nestjs/cli
```
4. Start the database
```
docker-compose up -d
```
5. Clone the .env.template file and rename the copy to .env.

6. Remove the "defaultLimit" from "portfolios.Service.ts", "joi.validation.ts", and "env.config.ts"

7. Fill in the environment variables defined in the .env.

8. Run the application in 'dev' mode.

Stack used:
* MongoDB
* Nest