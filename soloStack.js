// initialize express
const express = require('express');
const soloRouter = express.Router();

// consigure sqlite
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./database.sqlite');

// STACKS
// get all years
const retrieveYears = (req, res, next) => {
  db.all("SELECT * FROM Years;", (err, years) => {
    if(err){
      res.status(500).send(err);
    }else{
      res.status(200).send(years);
    }
  });
}

// get all makes
const retrieveMakes = (req, res, next) => {
  db.all("SELECT * FROM Makes;", (err, makes) => {
    if(err){
      res.status(500).send(err);
    }else{
      res.status(200).send(makes);
    }
  });
}

// get all models given a brand
const retrieveModels = (req, res, next) => {
  db.all("SELECT * FROM Models m JOIN MakeModelMap mmm on m.id = mmm.model_id WHERE mmm.make_id = $id ORDER BY name ASC;", {$id: req.params.makeId}, (err, models) => {
    if(err){
      res.status(500).send(err);
    }else{
      res.status(200).send(models);
    }
  });
}

// get all trims  given a brand and model
const retrieveTrims = (req, res, next) => {
  db.all("SELECT * from Trims t JOIN ModelTrimMap mtm on t.id = mtm.trim_id WHERE mtm.model_id = $id;", {$id: req.params.modelId}, (err, trims) => {
    if(err){
      res.status(500).send(err);
    }else{
      res.status(200).send(trims);
    }
  });
}

// export the functions
module.exports = {
  retrieveYears,
  retrieveMakes,
  retrieveModels,
  retrieveTrims
}
