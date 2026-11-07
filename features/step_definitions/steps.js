const {When, Then, Given} = require('@cucumber/cucumber');
//const {POManager} = require('../pageobjects/POManager');
const {POManager} = require('../../pageobjects/POManager')
const {expect} = require('@playwright/test');
const playwright = require('@playwright/test');

Given('a login to Ecommerce application with {string} and {string}', {timeout:100*1000}, async function (username, password){
    const browser = await playwright.chromium.launch({
        headless:false
    });
    const context = await browser.newContext();
    const page = await context.newPage();
     this.poManager = new POManager(page);
   //js file- Login js, DashboardPage
 
   const products = page.locator(".card-body");
    const loginPage = this.poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(username,password);
});

When('Add {string}', {timeout:100*100},async function (productName) {
  
     this.dashboardPage = this.poManager.getDashboardPage();
     await this.dashboardPage.searchProductAddCart(productName);
     await this.dashboardPage.navigateToCart();
});

Then('Verify {string} is displayed in the cart', async function (productName) {
  
    const cartPage = this.poManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(productName);
    await cartPage.Checkout();
});

When('Enter valid details and Place the Order', async function () {
    const ordersReviewPage = this.poManager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect("ind","India");
    this.orderId = await ordersReviewPage.SubmitAndGetOrderId();
    console.log(this.orderId);
});

Then('Verify Order is present in the OrderHistory',async function () {
    this.dashboardPage.navigateToOrders();
   this.ordersHistoryPage = this.poManager.getOrdersHistoryPage();
   await this.ordersHistoryPage.searchOrderAndSelect(this.orderId);
   expect(this.orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();

});