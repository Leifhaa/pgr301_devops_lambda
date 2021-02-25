const {priceCalc} = require('./main')

test('Test Discount', () => {
    let firstElapsed = 999 //Not qualified for discount
    let firstPrice = priceCalc(firstElapsed)
    expect(firstPrice).toBeLessThan(firstElapsed);

    let secondElapsed = 1000 //Qualified for discount
    let secondPrice = priceCalc(secondElapsed)
    expect(secondPrice).toBeLessThan(firstElapsed)

});