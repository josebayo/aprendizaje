/*  Exercise 1:
    The price of the vehicle es 25000€ in cash. 
    Financed the price would be 24000€ (3000€ + 28% interest).
    Registration fee 4000€, traffic tax 3000€, town hall stamp 1000€.
    Cash dicount 2%, financed discount 3%.
    Get the total price in both cases.
*/
var PRICE_CASH_VEHICLE = 25000 + 4000 + 3000 + 1000;
console.log(PRICE_CASH_VEHICLE);
var PRICE_FINANCED_VEHICLE = 24000;
console.log(PRICE_FINANCED_VEHICLE);
var CASH_DISCOUNT_VEHICLE = (PRICE_CASH_VEHICLE * 2 / 100);
console.log(PRICE_CASH_VEHICLE - CASH_DISCOUNT_VEHICLE);
var FINANCED_DISCOUNT_VEHICLE = (PRICE_FINANCED_VEHICLE * 3 / 100);
console.log(PRICE_FINANCED_VEHICLE - FINANCED_DISCOUNT_VEHICLE);
var INTEREST = 24000 * 24 / 100;
console.log(INTEREST);
//Exercise 1 version 2
var priceCashVehicle = 25000 + 4000 + 3000 + 1000;
console.log(priceCashVehicle);
var priceFinancedVehicle = 24000;
console.log(priceFinancedVehicle);
var cashDiscountVehicle = (priceCashVehicle * 2 / 100);
console.log(priceCashVehiclee - cashDiscountVehicle);
var financedDiscountVehicle = (priceFinancedVehicle * 3 / 100);
console.log(priceFinancedVehicle - financedDiscountVehicle);
var interest = 24000 * 24 / 100;
console.log(interest);
var totalInterest = (interest + 3000)
console.log(totalInterest)