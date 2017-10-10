
//api to pull current price of coins
var btcUrl = "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=BTC,USD"
var ethUrl = "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=ETH,USD"
var ltcUrl = "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=ETH,USD"
var ethVal = 0;
var btcVal = 0;
var ltcVal = 0;



function fetchBtc() {
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