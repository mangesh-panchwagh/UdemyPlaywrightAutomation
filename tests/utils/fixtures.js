const base = require('@playwright/test');
//const {APIUtils} = require('./APiUtils');
const {APiUtils} = require('./APIUtils');
//const {APiUtils} = require("../tests/utils/APIUtils.js");
const{request,response} = require ('@playwright/test');

const loginPayload = {
    userEmail: "mangesh013@gmail.com",
    userPassword: "Mangesh@123"
};
const orderPayload = {
    orders: [
        {
            country: "Switzerland",
            productOrderedId: "6960eac0c941646b7a8b3e68"
        }
    ]

};

exports.customtest = base.test.extend(
{
    authenticatedPage : async({browser},use)=>{

   const context = await browser.newContext();
   const page = await context.newPage();
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill("mangesh013@gmail.com");
   await page.locator("#userPassword").fill("Mangesh@123");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');
   await use(page); // tear down
    },

    createOrder : async({},use)=>{

        const apiContext =  await request.newContext({ignoreHTTPSErrors: true});
        const apiUtils = new APiUtils(apiContext,loginPayload);
        const response = await apiUtils.createOrder(orderPayload);
        await use(response);
        await apiContext.dispose();
    },

    testDataforOrder : {
        productName : 'ADIDAS ORIGINAL'
    }
});
