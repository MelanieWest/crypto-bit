// Pull in required dependencies
var express = require('express');
var route = express.Router();

// Import the model 
var crypto = require('../models/crypto.js');

// Create the routes and associated logic
route.get('/', function(req, res) {
  crypto.selectAll(function(data) {
    var hbsObject = {
      raids: data
    };
    // console the object
    res.render('index', hbsObject);
  });
});

route.post('/value', function(req, res) {
  crypto.insertOne([
    'coin_name'
  ], [
    req.body.raid_name
  ], function(data) {
    res.redirect('/');
  });
});

route.put('/value/:id', function(req, res) {
  var c = 'id = ' + req.params.id;

  crypto.updateOne({
    defeated: true
  }, c, function(data) {
    res.redirect('/');
  });
});

// Export routes for server.js to use.
module.exports = route;