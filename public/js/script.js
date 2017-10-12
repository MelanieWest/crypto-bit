global.fetch = require("node-fetch");
const cc = require("cryptocompare");

var ethVal = [];
var btcVal = [];
var ltcVal = [];


cc.price('BTC', 'USD')
  .then(prices => {
    console.log("BTC " + prices.USD);
    btcVal.push(prices.USD);
    cc.price('ETH', 'USD')
      .then(prices => {
        console.log("ETH " + prices.USD);
        ethVal.push(prices.USD);
        cc.price('LTC', 'USD')
          .then(prices => {
            console.log("LTC " + prices.USD);
            ltcVal.push(prices.USD)
            console.log(ethVal[0], btcVal[0], ltcVal[0])
          });
      })
  })
  .catch(console.error)
var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var natural_language_understanding = new NaturalLanguageUnderstandingV1({
  'username': 'a3244273-018e-453a-b3bd-6759f8dcdd09',
  'password': 'nzvzgTKFTfW7',
  'version_date': '2017-02-27'
});
var btcRate = 0;
var ethRate = 0;
var ltcRate = 0;

var btcParameters = {
  'url': 'https://www.reddit.com/r/BitcoinMarkets/comments/',
  'features': {
    'sentiment': {}
  }
};

natural_language_understanding.analyze(btcParameters, function (err, response) {
  if (err)
    console.log('error:', err);
  else
    // console.log(JSON.stringify(response, null, 2));
    console.log(JSON.stringify(response.sentiment.document.label))

});
var ltcParameters = {
  'url': 'https://www.reddit.com/r/LitecoinMarkets/comments/',
  'features': {
    'sentiment': {}
  }
};

natural_language_understanding.analyze(ltcParameters, function (err, response) {
  if (err)
    console.log('error:', err);
  else
    // console.log(JSON.stringify(response, null, 2));
    console.log(JSON.stringify(response.sentiment.document.label))

});

var ethParameters = {
  'url': 'https://www.reddit.com/r/ethtrader/comments/',
  'features': {
    'sentiment': {}
  }
};

natural_language_understanding.analyze(ethParameters, function (err, response) {
  if (err)
    console.log('error:', err);
  else
    // console.log(JSON.stringify(response, null, 2));
    console.log(JSON.stringify(response.sentiment.document.label))

});