// initialize express
const express = require('express');
const soloRouter = express.Router();

// consigure sqlite
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./database.sqlite');

// STACKS
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
  db.all("SELECT * from Trims t JOIN ModelTrimMap mtm on t.id = mtm.trim_id WHERE mtm.model_id = $id ORDER BY name ASC;", {$id: req.params.modelId}, (err, trims) => {
    if(err){
      res.status(500).send(err);
    }else{
      res.status(200).send(trims);
    }
  });
}

// get all years  given a brand, model and trim
const retrieveYears = (req, res, next) => {
  db.all("SELECT * FROM Years y JOIN TrimYearMap tym ON y.id = tym.year_id WHERE trim_id = $id ORDER BY name ASC;", {$id: req.params.trimId}, (err, years) => {
    if(err){
      res.status(500).send(err);
    }else{
      res.status(200).send(years);
    }
  });
}

// get a class given a year
const retrieveClass = (req, res, next) => {
  db.all("SELECT * FROM Classes c JOIN Scenario4 s4 ON c.id = s4.class_id WHERE year_id = $id ORDER BY name ASC;;", {$id: req.params.yearId}, (err, classes) => {
    if(err){
      res.status(500).send(err);
    }else{
      res.status(200).send(classes);
    }
  });
}

// export the functions
module.exports = {
  retrieveMakes,
  retrieveModels,
  retrieveTrims,
  retrieveYears,
  retrieveClass
}
