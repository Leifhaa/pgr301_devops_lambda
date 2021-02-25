'use strict'
const {priceCalc} = require("./priceCalc");

exports.handler = async (event) => {
  const elapsed = Number(event.elapsed)
  const initPrice = Number(event.price)
  const finalPrice = priceCalc(elapsed, initPrice)

  //I'm not persisting the price anywhere, this is just for demonstration.
  //There could e.g be a database for invoices which we could persist the price.

  const response = {
    statusCode: 200,
    body: ""
    ,
  };
  return response;
};

