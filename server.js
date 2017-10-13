// Pull in required dependencies
var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');

var passportGoogle = require("passport-google");

var FacebookStrategy = require('passport-facebook').Strategy;
var session = require("express-session");

var port = process.env.PORT || 5000;
console.log('its running');

var app = express();

// Send content for app
app.use(express.static(process.cwd() + '/public'));

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({
    extended: false
}));

var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://www.example.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

app.get('/auth/google',
passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback', 
passport.authenticate('google', { failureRedirect: '/login' }),
function(req, res) {
  // Successful authentication, redirect home.
  res.redirect('/');
});





// passport.use(new FacebookStrategy({
//     clientID: '108399119919875',
//     clientSecret: '1a122f27c879ffa23f0bb2c1a04f7b2b',
//     callbackURL: "http://localhost:3000/auth/facebook/callback"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ facebookId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
// ));

//app.get('/login',
// passport.authenticate('facebook', { failureRedirect: '/login' }),
// function(req, res) {
//   // Successful authentication, redirect home. 
//   app.get('/auth/facebook',
//   passport.authenticate('facebook', { authType: 'rerequest', scope: ['user_friends', 'manage_pages'] }));

//   new FacebookStrategy({
//     clientID: FACEBOOK_APP_ID,
//     clientSecret: FACEBOOK_APP_SECRET,
//     callbackURL: "http://localhost:3000/auth/facebook/callback",
//     profileFields: ['id', 'displayName', 'photos', 'email']
//   }),
  
//   res.redirect('/');
// });




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


var coinData = [{
  "coin": "bitcoin",
  "price": [4485, 4648, 4830, 4802, 5211],
  "date": ["2017-10-08", "2017-10-09", "2017-10-10", "2017-10-11", "2017-10-12"],
  "rating": [1, -1, -1, -1, 1]

},
{
  "coin": "ethereum",
  "price": [307, 295, 299, 303, 305],
  "date": ["2017-10-08", "2017-10-09", "2017-10-10", "2017-10-11", "2017-10-12"],
  "rating": [-1, -1, 1, 1, 1]
},
{
  "coin": "litecoin",
  "price": [52.94, 49.72, 50.57, 50.70, 53.62],
  "date": ["2017-10-08", "2017-10-09", "2017-10-10", "2017-10-11", "2017-10-12"],
  "rating": [-1, -1, -1, -1, -1]
}
];



app.get('/charts', (req, res) => {

  res.render('index');
  
      var datax=[];   //date array - used for each graph
  
      var data11y=[]; //used for bitcoin
      var data12y=[];
  
      var data21y=[]; //used for ethereum
      var data22y=[];
  
      var data31y=[]; //used for litecoin
      var data32y=[];
  
      for (var i = 0; i < coinData.length; i++) {
  
        //start traversing the object.  identify coin objects
        // and extract data for each coin
       
      if (coinData[i].name = "bitcoin"){  //if it's bitcoin, do this next block 
      console.log('bitcoin');  
      
      for (var ii =0; ii< coinData[i].date.length; ii++){
        console.log(coinData[i].date.length);
          datax.push(coinData[i].date[ii]);
          data11y.push(coinData[i].price[ii]);
          data12y.push(coinData[i].rating[ii]);
          switch (data12y[ii]){
            case -1:
              data12y[ii] = -200;
              break;
            case 0:
              data12y[ii] = 0;
              break;
            case 1:
              data12y[ii] = 200;
              break;
            default:
              data12y[ii] = 0;
          } // end of cases for prediction rendering
      }   //end of block that fills arrays for graphing
      
     
     var trace1 = {
       x: datax,
       y: data11y,
       name: "Bitcoin Values",
       type: "scatter"
     };
     var trace2 = {
       x: datax,
       y: data12y,
       name: "Predictions",
       type: "bar"
     };
     var data = [trace1, trace2];
     var graphOptions = {filename: "Bitcoin", fileopt: "overwrite"};
     plotly.plot(data, graphOptions, function (err, msg) {
  //       console.log(msg);
    });
  
  } //end of bitcoin actions
  
  
  if (coinData[i].name = "ethereum"){  //if it's ethereum, do this next block 
  console.log('ethereum');
  for (var jj =0; jj< coinData[i].date.length; jj++){
    console.log(coinData[i].date.length);
    datax.push(coinData[i].date[jj]);
    data21y.push(coinData[i].price[jj]);
    data22y.push(coinData[i].rating[jj]);
    switch (data22y[jj]){
      case -1:
        data22y[jj] = -20;
        break;
      case 0:
        data22y[jj] = 0;
        break;
      case 1:
        data22y[jj] = 20;
        break;
      default:
        data22y[jj] = 0;
    } // end of cases for prediction rendering
  }   //end of block that fills arrays for graphing
  
   
     var trace1 = {
      x: datax,
      y: data21y,
      name: "Ethereum Values",
      type: "scatter"
    };
    var trace2 = {
      x: datax,
      y: data22y,
      name: "Predictions",
      type: "bar"
    };
    var data = [trace1, trace2];
    var graphOptions = {filename: "Etherium", fileopt: "overwrite"};
    plotly.plot(data, graphOptions, function (err, msg) {
 //       console.log(msg);
    });
  
  }   // end of ethereum block
  
  
  if (coinData[i].name = "litecoin"){  //if it's ethereum, do this next block 
  console.log('litecoin');
  
  for (var kk =0; kk< coinData[i].date.length; kk++){
    console.log(coinData[i].date.length);
    
    datax.push(coinData[i].date[kk]);
    data31y.push(coinData[i].price[kk]);
    data32y.push(coinData[i].rating[kk]);
    switch (data32y[kk]){
      case -1:
        data32y[kk] = -20;
        break;
      case 0:
        data32y[kk] = 0;
        break;
      case 1:
        data32y[kk] = 20;
        break;
      default:
        data32y[kk] = 0;
    } // end of cases for prediction rendering
  }   //end of filling arrays for graphing
  
  
  
 
  
   var trace1 = {
    x: datax,
    y: data31y,
    name: "LiteCoin Values",
    type: "scatter"
  };
  var trace2 = {
    x: datax,
    y: data32y,
    name: "Predictions",
    type: "bar"
  };
  var data = [trace1, trace2];
  var graphOptions = {filename: "LiteCoin", fileopt: "overwrite"};
  //  console.log(msg);
  plotly.plot(data, graphOptions, function (err, msg) {
    
  });
  
 
  
  }   //end of litecoin block
  
  } //end of block that iterates through coinData objects
  
  




});







//  //   connection.query('SELECT `act_val`,`exch_date`,`predict_val`,`emot` FROM `currency` WHERE `coin_name`="bitcoin"', (err, results) => {
//  //    res.render('index', {bitCoin: results});
//       res.render('index'); 
//       var datax=[];
//       var data1y=[];
//       var data2y=[];
  
//       for (var i = 0; i < results.length; i++) {
  
//         //push data into arrays for graphing; modify values to be closer
//         // to 3800 (current value)
  
//       datax.push(results[i].exch_date);
//       data1y.push(results[i].act_val*2 + 3500);
//       //change boolean false to -1;  then scale up values for graphing 
//       data2y.push(results[i].emot);
//       if (data2y[i] == 0){
//         data2y[i] = -200;
//       }else{
//         data2y[i] = 200;
//       }
//     }
     
//      var trace1 = {
//        x: datax,
//        y: data1y,
//        name: "Bitcoin Values",
//        type: "scatter"
//      };
//      var trace2 = {
//        x: datax,
//        y: data2y,
//        name: "Predictions",
//        type: "bar"
//      };
//      var data = [trace1, trace2];
//      var graphOptions = {filename: "Bitcoin", fileopt: "overwrite"};
//     //  plotly.plot(data, graphOptions, function (err, msg) {
//     //      console.log(msg);
//     //  });
 
//      //create two more tables using random data
  
//      //create random data for coin and boolean values;
//      var testArrayLength = 7;
//      var newBool;
//      // assume Etherium is starting at a current value of 300;
//      var seedEthereum = 300;
//      var ether =[];
//      var boolE =[];
//      var newEthVal;
  
//      //create random data for ethereum
//      for (var j=0; j<testArrayLength; j++){
//         if (j == 0){
//           newEthVal = seedEthereum*(1+((Math.floor(Math.random()*3)-1)*(.05)));         
//         }else{
//           newEthVal = ether[j-1]*(1+((Math.floor(Math.random()*3)-1)*(.05)));         
//         }
//         ether.push(newEthVal);
//         newBool = Math.floor(Math.random()*2);
//         boolE.push(newBool);
//         if(boolE[j]==0){
//           boolE[j]= -20;
//         }else{
//           boolE[j]= 20;
//         }
//      }
//      console.log('etherium: '+ether+boolE);
  
//      var trace1 = {
//       x: datax,
//       y: ether,
//       name: "Ethereum Values",
//       type: "scatter"
//     };
//     var trace2 = {
//       x: datax,
//       y: boolE,
//       name: "Predictions",
//       type: "bar"
//     };
//     var data = [trace1, trace2];
//     var graphOptions = {filename: "Etherium", fileopt: "overwrite"};
//     // plotly.plot(data, graphOptions, function (err, msg) {
//     //     console.log(msg);

//     //});
  
  
  
  
  
  
//      // assume litecoin is starting at a current value of 50;
//      var newLiteVal;
//      var seedLiteCoin = 50;
//      var boolL =[];
//      var lite =[];
     
//      //create random data
//      for (var k=0; k<testArrayLength; k++){
//       if (k == 0){
//         newLiteVal = seedLiteCoin*(1+((Math.floor(Math.random()*3)-1)*(.05)));         
//       }else{
//         newLiteVal = lite[k-1]*(1+((Math.floor(Math.random()*3)-1)*(.05)));         
//       }
//       lite.push(newLiteVal);
//       newBool = Math.floor(Math.random()*2);
//       boolL.push(newBool);
//       if(boolL[k]==0){
//         boolL[k]= -20;
//       }else{
//         boolL[k]= 20;
//       }
//    }
//   console.log('lite: '+lite+boolL);
  
//    var trace1 = {
//     x: datax,
//     y: lite,
//     name: "LiteCoin Values",
//     type: "scatter"
//   };
//   var trace2 = {
//     x: datax,
//     y: boolL,
//     name: "Predictions",
//     type: "bar"
//   };
//   var data = [trace1, trace2];
//   var graphOptions = {filename: "LiteCoin", fileopt: "overwrite"};

//   plotly.plot(data, graphOptions, function (err, msg) {
//       console.log(msg);

 // });
  //});     end of connections (sql query) 
  
    // });
//   });
  
  

      