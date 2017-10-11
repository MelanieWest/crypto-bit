// Pull in required dependencies
var express = require('express');
var bodyParser = require('body-parser');


var port = process.env.PORT || 5000;
console.log('its running');

var app = express();

// Send content for app
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}));

// Override with the POST 'method'


// Set view engine
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// enable graphing
var plotly = require('plotly')("MelanieWest", "JFj7Pjjq1UljWDSHTQMd");

// Give the server access to routes
var routes = require('./controllers/crypto_controller.js');

app.use('/', routes);

app.listen(port);


app.get('/charts', (req, res) => {
    console.log('app get');
  connection.query('SELECT `act_val`,`exch_date` FROM `currency` WHERE `coin_name`="bitcoin"', (err, results) => {
    res.render('index', {bitCoin: results});
      var data =[
        {
          x: [results[0].exch_date, results[1].exch_date, results[2].exch_date, results[3].exch_date, results[4].exch_date, results[5].exch_date],
          y: [results[0].act_val, results[1].act_val, results[2].act_val, results[3].act_val, results[4].act_val, results[5].act_val],
          type: "scatter"
        }
      ];
      var graphOptions = {filename: "date-axes", fileopt: "overwrite"};
      plotly.plot(data, graphOptions, function (err, msg) {
          console.log(msg);
      });
          console.log(JSON.stringify(results));
          console.log(results);
   });
        
});
      