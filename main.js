'use strict'


const priceCalc = (milliElapsed, initPrice) => {
  //For tasks running for a longer time, we give a discount
  let discount = 0;
  if (milliElapsed > 1000){
    discount = 0.20
  }
  return initPrice - (initPrice * discount)
}


exports.handler = async (event) => {
  const elapsed = Number(event.elapsed)
  const initPrice = Number(event.price)
  const finalPrice = priceCalc(elapsed, initPrice)

  //I'm not persisting the price anywhere, this is just for demonstration.
  //There could e.g be a database for invoices which we could persist the price.

  const response = {
    statusCode: 200,
    body: "initial price: " + initPrice + " and final is " + finalPrice
    ,
  };
  return response;
};

module.exports = { priceCalc};
