// initialize express
const express = require('express');
const soloRouter = express.Router();
const bodyParser = require('body-parser');
const morgan = require('morgan');

// set body-parser
soloRouter.use(bodyParser.json());

// set morgan (logging)
soloRouter.use(morgan('tiny'));

// STACK
const soloStack = require('./soloStack.js');

// ROUTES

// get all makes
soloRouter.get('/makes', soloStack.retrieveMakes);

// get all models given a brand
soloRouter.get('/models', soloStack.retrieveModels);

// get all trims  given a brand and model
soloRouter.get('/trims', soloStack.retrieveTrims);

// get all years  given a brand, model and trim
soloRouter.get('/years', soloStack.retrieveYears);

// get a class given the year
soloRouter.get('/class', soloStack.retrieveClass);

// get a class given the model
soloRouter.get('/class2', soloStack.retrieveClass2);

// get a class given the trim
soloRouter.get('/class3', soloStack.retrieveClass3);

// export menu Router
module.exports = soloRouter;
