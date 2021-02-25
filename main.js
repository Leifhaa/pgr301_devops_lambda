'use strict'

const priceCalc = (milliElapsed, initPrice) => {
  //For tasks running for a longer time, we give a discount
  let discount = 0;
  if (milliElapsed > 1000){
    discount = 0.20
  }
  return initPrice - (initPrice * discount)
}


exports.handler = function (event, context, callback) {
  const elapsed = Number(event.elapsed)
  const initPrice = Number(event.price)
  const finalPrice = priceCalc(elapsed, initPrice)

  //I'm not persisting the price anywhere, so the calculation is just for demonstration.
  //There could e.g be a database for invoices which we could persist the final price.

  var response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
    body: '',
  }
  callback(null, response)
}

module.exports = { priceCalc};
