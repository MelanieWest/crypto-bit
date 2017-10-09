// Pull in required dependencies
var express = require('express');
var route = express.Router();

// Import the model 
let destiny = require('../models/destiny.js');

// Create the routes and associated logic
route.get('/', function(req, res) {
  destiny.selectAll(function(data) {
    var hbsObject = {
      raids: data
    };
    // console the object
    res.render('index', hbsObject);
  });
});

route.post('/raids', function(req, res) {
  destiny.insertOne([
    'raid_name'
  ], [
    req.body.raid_name
  ], function(data) {
    res.redirect('/');
  });
});

route.put('/raids/:id', function(req, res) {
  var c = 'id = ' + req.params.id;

  destiny.updateOne({
    defeated: true
  }, c, function(data) {
    res.redirect('/');
  });
});

// Export routes for server.js to use.
module.exports = route;