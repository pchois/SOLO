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
  db.all("SELECT * FROM Models m JOIN MakeModelMap mmm on m.id = mmm.model_id WHERE mmm.make_id = $id ORDER BY name ASC;",
  {$id: req.query.makeId},
  (err, models) => {
    if(err){
      res.status(500).send(err);
    }else if(models[0] == null){
      const none = ['empty'];
      res.status(200).send(models);
    }else{
      res.status(200).send(models);
    }
  });
}

// get all trims  given a brand and model
const retrieveTrims = (req, res, next) => {
  db.all("SELECT * from Trims t JOIN ModelTrimMap mtm on t.id = mtm.trim_id WHERE mtm.make_id = $make_id AND mtm.model_id = $model_id ORDER BY name ASC;",
  {$make_id: req.query.makeId, $model_id: req.query.modelId},
  (err, trims) => {
    if(err){
      res.status(500).send(err);
    }else{
      res.status(200).send(trims);
    }
  });
}

// get all years given a brand, model and trim
const retrieveYears = (req, res, next) => {
  db.all("SELECT * FROM Years y JOIN TrimYearMap tym ON y.id = tym.year_id WHERE tym.make_id = $make_id AND tym.model_id = $model_id AND tym.trim_id = $trim_id ORDER BY name ASC;",
  {$make_id: req.query.makeId, $model_id: req.query.modelId, $trim_id: req.query.trimId},
  (err, years) => {
    if(err){
      res.status(500).send(err);
    }else{
      res.status(200).send(years);
    }
  });
}

// get a class given a year
const retrieveClass = (req, res, next) => {
  db.get("SELECT * FROM Classes c JOIN Scenario4 s4 ON c.id = s4.class_id WHERE s4.make_id = $make_id AND s4.model_id = $model_id AND s4.trim_id = $trim_id AND s4.year_id = $year_id ORDER BY name ASC;",
  {$make_id: req.query.makeId, $model_id: req.query.modelId, $trim_id: req.query.trimId, $year_id: req.query.yearId},
  (err, classes) => {
    if(err){
      res.status(500).send(err);
    }else{
      res.status(200).send(classes);
    }
  });
}

// get all years given a brand and model
const retrieveClass2 = (req, res, next) => {
  db.all("SELECT * FROM Classes c JOIN Scenario1 s1 ON c.id = s1.class_id WHERE s1.make_id = $make_id AND s1.model_id = $model_id ORDER BY name ASC;",
  {$make_id: req.query.makeId, $model_id: req.query.modelId},
  (err, classes2) => {
    if(err){
      res.status(500).send(err);
    }else{
      res.status(200).send(classes2);
    }
  });
}

// get all years given a brand and model
const retrieveClass3 = (req, res, next) => {
  db.all("SELECT * FROM Classes c JOIN Scenario2 s2 ON c.id = s2.class_id WHERE s2.make_id = $make_id AND s2.model_id = $model_id AND s2.trim_id = $trim_id ORDER BY name ASC;",
  {$make_id: req.query.makeId, $model_id: req.query.modelId, $trim_id: req.query.trimId},
  (err, classes3) => {
    if(err){
      res.status(500).send(err);
    }else{
      res.status(200).send(classes3);
    }
  });
}

// export the functions
module.exports = {
  retrieveMakes,
  retrieveModels,
  retrieveTrims,
  retrieveYears,
  retrieveClass,
  retrieveClass2,
  retrieveClass3
}
