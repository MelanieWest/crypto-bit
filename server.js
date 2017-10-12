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


// Express and MySQL code should go here.
app.get('/charts', (req, res) => {
    connection.query('SELECT `act_val`,`exch_date`,`predict_val`,`emot` FROM `currency` WHERE `coin_name`="bitcoin"', (err, results) => {
     res.render('index', {bitCoin: results});
  
      var datax=[];
      var data1y=[];
      var data2y=[];
  
      for (var i = 0; i < results.length; i++) {
  
        //push data into arrays for graphing; modify values to be closer
        // to 3800 (current value)
  
      datax.push(results[i].exch_date);
      data1y.push(results[i].act_val*2 + 3500);
      //change boolean false to -1;  then scale up values for graphing 
      data2y.push(results[i].emot);
      if (data2y[i] == 0){
        data2y[i] = -200;
      }else{
        data2y[i] = 200;
      }
    }
     
     var trace1 = {
       x: datax,
       y: data1y,
       name: "Bitcoin Values",
       type: "scatter"
     };
     var trace2 = {
       x: datax,
       y: data2y,
       name: "Predictions",
       type: "bar"
     };
     var data = [trace1, trace2];
     var graphOptions = {filename: "Bitcoin", fileopt: "overwrite"};
     plotly.plot(data, graphOptions, function (err, msg) {
         console.log(msg);
     });
  
     //create two more tables using random data
  
     //create random data for coin and boolean values;
     var testArrayLength = 7;
     var newBool;
     // assume Etherium is starting at a current value of 300;
     var seedEthereum = 300;
     var ether =[];
     var boolE =[];
     var newEthVal;
  
     //create random data for ethereum
     for (var j=0; j<testArrayLength; j++){
        if (j == 0){
          newEthVal = seedEthereum*(1+((Math.floor(Math.random()*3)-1)*(.05)));         
        }else{
          newEthVal = ether[j-1]*(1+((Math.floor(Math.random()*3)-1)*(.05)));         
        }
        ether.push(newEthVal);
        newBool = Math.floor(Math.random()*2);
        boolE.push(newBool);
        if(boolE[j]==0){
          boolE[j]= -20;
        }else{
          boolE[j]= 20;
        }
     }
     console.log('etherium: '+ether+boolE);
  
     var trace1 = {
      x: datax,
      y: ether,
      name: "Ethereum Values",
      type: "scatter"
    };
    var trace2 = {
      x: datax,
      y: boolE,
      name: "Predictions",
      type: "bar"
    };
    var data = [trace1, trace2];
    var graphOptions = {filename: "Etherium", fileopt: "overwrite"};
    plotly.plot(data, graphOptions, function (err, msg) {
        console.log(msg);
    });
  
  
  
  
  
  
     // assume litecoin is starting at a current value of 50;
     var newLiteVal;
     var seedLiteCoin = 50;
     var boolL =[];
     var lite =[];
     
     //create random data
     for (var k=0; k<testArrayLength; k++){
      if (k == 0){
        newLiteVal = seedLiteCoin*(1+((Math.floor(Math.random()*3)-1)*(.05)));         
      }else{
        newLiteVal = lite[k-1]*(1+((Math.floor(Math.random()*3)-1)*(.05)));         
      }
      lite.push(newLiteVal);
      newBool = Math.floor(Math.random()*2);
      boolL.push(newBool);
      if(boolL[k]==0){
        boolL[k]= -20;
      }else{
        boolL[k]= 20;
      }
   }
  console.log('lite: '+lite+boolL);
  
   var trace1 = {
    x: datax,
    y: lite,
    name: "LiteCoin Values",
    type: "scatter"
  };
  var trace2 = {
    x: datax,
    y: boolL,
    name: "Predictions",
    type: "bar"
  };
  var data = [trace1, trace2];
  var graphOptions = {filename: "LiteCoin", fileopt: "overwrite"};
  plotly.plot(data, graphOptions, function (err, msg) {
      console.log(msg);
  });
  
  
    });
  });
  
  
  
      