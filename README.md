# ECV NODE API

## Groupe

1. Baptiste COLLIGNON : baptiste.collignon@mail-ecv.fr
2. Vincent MANACHEM : vincent.manachem@mail-ecv.fr
3. Gautier MAIRE : gautier.maire@mail-ecv.fr
4. Stan DELAMOURD : stan.delamourd@mail-ecv.fr

## Setup

### DEV

```bash
git clone git@github.com:BCollignonEcv/ECV-node-api-project.git
npm run setup.dev
```

### PROD

```bash
git clone git@github.com:BCollignonEcv/ECV-node-api-project.git
npm run setup.prod
```

## TODO

### Global

* [x] Setup
* [ ] Error
* [x] Swagger
* [x] Postman

#### Middlewares

* [x] Authentification

#### Services

* [x] Scraper

### User

* [x] Models
* [x] Migrations
* [x] Seeders
* [x] Routes
* [x] Controllers
* [ ] Validator

### Source

* [x] Models
* [x] Migrations
* [x] Seeders
* [x] Routes
* [x] Controllers
* [ ] Validator

### Role

* [x] Models
* [x] Migrations
* [ ] Seeders
* [x] Routes
* [ ] Controllers
* [ ] Validator

## Dependencies

* [Express](https://www.npmjs.com/package/express)

* [Axios](https://www.npmjs.com/package/axios)

* [Sequelize](https://www.npmjs.com/package/sequelize)

* [Bcrypt](https://www.npmjs.com/package/bcrypt)

* [Body-parser](https://www.npmjs.com/package/body-parser)

* [Cors](https://www.npmjs.com/package/cors)

* [Dotenv](https://www.npmjs.com/package/dotenv)

* [Uuid](https://www.npmjs.com/package/uuid)

* [swagger-ui-express](https://github.com/scottie1984/swagger-ui-express)

* [swagger-jsdoc](https://github.com/Surnet/swagger-jsdoc)


## API Documentation

To view the list of available APIs and their specifications, run the server and go to `http://localhost:8080/api/docs/` in your browser. This documentation page is automatically generated using the [swagger](https://swagger.io/) definitions written as comments in the route files.
