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

// get all brands
soloRouter.get('/brands', soloStack.retrieveBrands);

// get all models given a brand
soloRouter.get('/models', soloStack.retrieveModels);


// export menu Router
module.exports = soloRouter;
