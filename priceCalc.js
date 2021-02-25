const priceCalc = (milliElapsed, initPrice) => {
    //For tasks running for a longer time, we give a discount
    let discount = 0;
    if (milliElapsed > 1000){
        discount = 0.20
    }
    return initPrice - (initPrice * discount)
}

module.exports = { priceCalc};