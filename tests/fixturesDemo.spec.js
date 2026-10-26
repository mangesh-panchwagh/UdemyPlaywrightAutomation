const{test,expect,request} = require('@playwright/test');
const {customtest} = require("../tests/utils/fixtures.js");

customtest('Fixtures demo',async({authenticatedPage,createOrder,testDataforOrder})=>{

    authenticatedPage.goto("https://rahulshettyacademy.com/client/");
    // Login to application and create order and verify if order is created from History page
    await authenticatedPage.locator("button[routerlink*='myorders']").click();
    await authenticatedPage.locator("tbody").waitFor();
    await expect(authenticatedPage.getByText(createOrder.orderId)).toBeVisible();

    console.log(authenticatedPage.getByText(createOrder.orderId));

    console.log(testDataforOrder.productName);

});

