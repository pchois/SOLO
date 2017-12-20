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
// get all years
soloRouter.get('/years', soloStack.retrieveYears);

// get all makes
soloRouter.get('/makes', soloStack.retrieveMakes);

// get all models given a brand
soloRouter.get('/models/:makeId', soloStack.retrieveModels);

// get all trims  given a brand and model
soloRouter.get('/trims/:modelId', soloStack.retrieveTrims);


// export menu Router
module.exports = soloRouter;
