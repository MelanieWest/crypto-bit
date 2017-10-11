global.fetch = require("node-fetch");
const cc = require("cryptocompare");
var ethReddit = "https://www.reddit.com/r/ethtrader/comments/.json";
var btcReddit = "https://www.reddit.com/r/BitcoinMarkets/comments/.json";
var ltcReddit = "https://www.reddit.com/r/LitecoinMarkets/comments/.json";
var ethVal = 0;
var btcVal = 0;
var ltcVal = 0;
var btcInfo = "Nothing";
var ethInfo = "Nothing";
var litInfo = "Nothing";
cc.price('BTC', 'USD')
  .then(prices => {
    console.log("BTC " + prices.USD)
  })
  .catch(console.error)
cc.price('ETH', 'USD')
  .then(prices => {
    console.log("ETH " + prices.USD)
  })
cc.price('LTC', 'USD')
  .then(prices => {
    console.log("LTC " + prices.USD)
  });



function fetchBtc() {
  $.ajax({
      url: btcReddit,
      method: "GET"
    })
    .done(function (response) {
      for (var i = 0; i < 10; i++) {
        var JSONBody = JSON.parse(response);
        btcInfo = (JSONBody.data.children[i].data.body)
        console.log(JSONBody.data.children[i].data.body)

      }
    });
}

function fetchEth() {
  $.ajax({
      url: ethReddit,
      method: "GET"
    })
    .done(function (response) {
      for (var i = 0; i < 10; i++) {
        var JSONBody = JSON.parse(response);
        ethInfo = (JSONBody.data.children[i].data.body)
        console.log(JSONBody.data.children[i].data.body)

      }
    });
}

function fetchLtc() {
  $.ajax({
      url: ltcReddit,
      method: "GET"
    })
    .done(function (response) {
      for (var i = 0; i < 10; i++) {
        var JSONBody = JSON.parse(response);
        ltcInfo = (JSONBody.data.children[i].data.body)
        console.log(JSONBody.data.children[i].data.body)

      }
    })
}

fetchBtc();
fetchEth();
fetchLtc();


// module.exports = currentVal;