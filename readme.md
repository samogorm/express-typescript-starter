# Express + TypeScript Starter

## Description

A basic starter project to get an API up and running with Express and TypeScript.

## Uses

* [Express](https://expressjs.com/)
* [TypeScript](https://www.typescriptlang.org/)
* [MongoDB](https://www.mongodb.com/)
* [Jest](https://jestjs.io/)

## Getting Started

### System Requirements

* Node 13.0.0+

### Clone the Repository

#### Clone with SSH:

`git clone git@github.com:samogorm/express-typescript-starter.git`

*or*

### Clone with Https:

`git clone https://github.com/samogorm/express-typescript-starter.git`


### Installation

* Run `yarn install` to install node modules

### Configuration

* Create a `.env` file
* Copy the contents of `.env.example` into the `.env` file
* Customise the values

### Usage

* Run `yarn dev` to start the app locally
* Go to http://localhost:[APP_PORT]/api/[APP_VERSION]
* If you see a message saying `OK!`, then everything should be set up correctly

### Linting

Currently uses recommended eslint/tslint options provided by the `eslint-plugin` module. This can be configured in `.eslintrc`.

* Run `yarn lint` to run the linter
* Run `yarn lint:fix` to run the linter and fix any lint issues

### Tests

#### With Coverage

* Run `yarn test`


#### Without coverage

* Run `yarn jest`

### Builds

The compiled JS build will be put into `build` directory, this can be configured in `tsconfig.json` with the `outDir` option.

* Run `yarn build` to compile the project to JS
