
//api to pull current price of coins
var btcUrl = "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=BTC,USD"
var ethUrl = "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=ETH,USD"
var ltcUrl = "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=ETH,USD"
var ethReddit = "https://www.reddit.com/r/ethtrader/comments/.json"
var btcReddit = "https://www.reddit.com/r/BitcoinMarkets/comments/.json"
var ltcReddit = "https://www.reddit.com/r/LitecoinMarkets/comments/.json"
var ethVal = 0;
var btcVal = 0;
var ltcVal = 0;
var btcInfo = "Nothing"
var ethInfo = "Nothing"
var litInfo = "Nothing"

function fetchBtc() {
  $.ajax({
    url: btcReddit,
    method: "GET"
  })
  .done(function(response){
    for (var i = 0; i < 10; i++) {
    var JSONBody = JSON.parse(response);
    btcInfo = (JSONBody.data.children[i].data.body)
    console.log(JSONBody.data.children[i].data.body)

 }
  });
  $.ajax({
      url: btcUrl,
      method: "GET"
    })
    .done(function (response) {
      console.log(response.USD);
      btcVal = (response.USD)

      $.ajax({
        url: "/api/value",
        method: "POST",
        data: btcVal
      })
    })
}

function fetchEth() {
  $.ajax({
    url: ethReddit,
    method: "GET"
  })
  .done(function(response){
    for (var i = 0; i < 10; i++) {
    var JSONBody = JSON.parse(response);
    ethInfo = (JSONBody.data.children[i].data.body)
    console.log(JSONBody.data.children[i].data.body)

 }
  });
  $.ajax({
      url: ethUrl,
      method: "GET"
    })
    .done(function (response) {
      console.log(response.USD);
      ethVal = (response.USD)
      $.ajax({
        url: "/",
        method: "POST",
        data: ethVal
      })
    })
}

function fetchLtc() {
  $.ajax({
    url: ltcReddit,
    method: "GET"
  })
  .done(function(response){
    for (var i = 0; i < 10; i++) {
    var JSONBody = JSON.parse(response);
    ltcInfo = (JSONBody.data.children[i].data.body)
    console.log(JSONBody.data.children[i].data.body)

 }
  })
  $.ajax({
      url: ltcUrl,
      method: "GET"
    })
    .done(function (response) {
      console.log(response.USD);
      ltcVal = (response.USD)
      $.ajax({
        url: "/",
        method: "POST",
        data: ltcVal
      })
    })
}

fetchBtc();
fetchEth();
fetchLtc();


// module.exports = currentVal;