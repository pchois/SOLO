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

// get all years  given a brand, model and trim
soloRouter.get('/yearss3', soloStack.retrieveYearsS3);

// get a class given the model
soloRouter.get('/s1', soloStack.retrieveClassS1);

// get a class given the trim
soloRouter.get('/s2', soloStack.retrieveClassS2);

// get a class given the model
soloRouter.get('/s3', soloStack.retrieveClassS3);

// get a class given the year
soloRouter.get('/s4', soloStack.retrieveClassS4);

// export menu Router
module.exports = soloRouter;
