'use strict'

exports.handler = function (event, context, callback) {
  console.log("event: " + event)
  console.log("context: " + context)
  console.log("callback: " + callback)
  const price = priceCalc(100)

  //I'm not persisting the price anywhere, this is just for demonstration.
  //There could e.g be a database for invoices which we could persist the price.

  var response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
    body: '',
  }
  callback(null, response)
}

const priceCalc = (milliElapsed) => {
  //For tasks running for a longer time, we give a discount
  let discount = 0;
  if (milliElapsed > 1000){
    discount = 0.20
  }
  let tmpPrice = milliElapsed * 0.015
  return tmpPrice - (tmpPrice * discount)
}

module.exports = { priceCalc};

