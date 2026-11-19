const {When, Then, Given} = require('@cucumber/cucumber');
//const {POManager} = require('../pageobjects/POManager');
const {POManager} = require('../../pageobjects/POManager')
const {expect} = require('@playwright/test');
const playwright = require('@playwright/test');

Given('a login to Ecommerce application with {string} and {string}', {timeout:100*1000}, async function (username, password){

   //js file- Login js, DashboardPage
 
   const products = this.page.locator(".card-body");
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

Given('a login to Ecommerce2 application with {string} and {string}', {timeout:100*1000},async function (username, password) {
 
     await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await this.page.title());
    const userName = this.page.locator("#username");
    const passWord = this.page.locator("[type='password']");
    const signIn = this.page.locator("#signInBtn");

    await userName.fill(username);
    await passWord.fill(password);
    await signIn.click();
});

Then('Verify Error messgae is displayed', async function () {
  
    console.log(await this.page.locator("[style*='block']").textContent());
    await expect(this.page.locator("[style*='block']")).toContainText('Incorrect username/password');

});

