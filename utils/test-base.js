const {test:base} = require('@playwright/test');

const customtest = base.extend({

    testDataForOrder : {
        username : "mangesh013@gmail.com",
        password : "Mangesh@123",
        productName : "ADIDAS ORIGINAL"
    }
});

module.exports = {customtest};
