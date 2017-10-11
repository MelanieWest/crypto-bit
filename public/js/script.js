global.fetch = require("node-fetch");
const cc = require("cryptocompare");
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