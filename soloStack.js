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

// get all brands
const retrieveBrands = (req, res, next) => {
  db.all("SELECT * FROM Brands;", (err, brands) => {
    if(err){
      res.status(500).send(err);
    }else{
      res.status(200).send(brands);
    }
  });
}

// get all models given a brand
const retrieveModels = (req, res, next) => {
  db.all("SELECT DISTINCT(name) FROM Models WHERE brand_id = $id ORDER BY name ASC;", {$id: req.params.brandId}, (err, models) => {
    if(err){
      res.status(500).send(err);
    }else{
      res.status(200).send(models);
    }
  });
}

// export the functions
module.exports = {
  retrieveYears,
  retrieveBrands,
  retrieveModels
}
