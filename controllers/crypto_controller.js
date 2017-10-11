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



module.exports = route;