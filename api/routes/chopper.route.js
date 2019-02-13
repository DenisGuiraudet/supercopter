const express = require('express');
const app = express();
const chopperRoutes = express.Router();

// Require Chopper model in our routes module
let Chopper = require('../models/Chopper');

// Defined store route
chopperRoutes.route('/add').post(function (req, res) {
  let chopper = new Chopper(req.body);
  chopper.save()
    .then(chopper => {
      res.status(200).json({'chopper': 'chopper in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
chopperRoutes.route('/').get(function (req, res) {
    Chopper.find(function (err, chopperes){
    if(err){
      console.log(err);
    }
    else {
      res.json(chopperes);
    }
  });
});

// Defined edit route
chopperRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Chopper.findById(id, function (err, chopper){
      res.json(chopper);
  });
});

//  Defined update route
chopperRoutes.route('/update/:id').post(function (req, res, next) {
    Chopper.findById(req.params.id, function(err, chopper) {
    if (!chopper)
      return next(new Error('Could not load Document'));
    else {
        chopper.chopper_name = req.body.chopper_name;
        chopper.chopper_brand = req.body.chopper_brand;
        chopper.chopper_place = req.body.chopper_place;

        chopper.save().then(chopper => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
chopperRoutes.route('/delete/:id').get(function (req, res) {
    Chopper.findOneAndDelete({_id: req.params.id}, function(err, chopper){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = chopperRoutes;