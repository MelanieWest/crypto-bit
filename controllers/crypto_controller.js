// Pull in required dependencies
var express = require('express');
var route = express.Router();
var connection = require("../config/connection.js");
var mysql = require("mysql");
var crypto = require('../models/crypto.js');
var updateInfo = require('../public/js/script')

//Create the routes and associated logic
route.get('/', function (req, res) {
  crypto.selectAll(function (data) {
    var hbsObject = {
      raids: data
    };
    // console the object
    res.render('index', hbsObject);
  });
});

// route.post('/value', function(req, res) {
//   crypto.insertOne(
//     {coin_name : req.body.coin_name, act_val : btcVal, }
//   , function(data) {
//     res.redirect('/');
//   });
// });

route.put('/value/:id', function (req, res) {
  var c = 'id = ' + req.params.id;

  crypto.updateOne({
    emot: " " + 0
  }, c, function (data) {
    res.redirect('/');
  });
});

route.put('/current/:id', function (req, res) {
  var c = 'id = ' + 1
  crypto.updateOne("currency", {
    "act_val": updateInfo.btcVal,
  }, c, function (data) {
    res.redirect('/');
  });
});

// Export routes for server.js to use.
module.exports = route;