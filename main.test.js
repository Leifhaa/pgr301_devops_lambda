const {priceCalc} = require('./priceCalc')

test('Test Discount', () => {
    let firstElapsed = 999 //Not qualified for discount
    const initPriceFirst = 999
    let finalFirstPrice = priceCalc(firstElapsed, initPriceFirst)
    expect(initPriceFirst).toBe(finalFirstPrice);

    let secondElapsed = 1001 //Qualified for discount
    let initPriceSecond = 1001
    let finalSecond = priceCalc(secondElapsed, initPriceSecond)
    expect(initPriceSecond).toBeGreaterThan(finalSecond)
});