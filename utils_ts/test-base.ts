import {test as baseTest} from '@playwright/test';
interface testDataForOrder{
    username : string;
    password : string;
    productName : string; 
}
export const customTest = baseTest.extend<{testDataForOrder:testDataForOrder}>(
{
    testDataForOrder : {
        username : "mangesh013@gmail.com",
        password : "Mangesh@123",
        productName : "ADIDAS ORIGINAL"
    }
});

module.exports = {customTest};
