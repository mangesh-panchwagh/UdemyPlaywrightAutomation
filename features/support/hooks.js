const {POManager} = require('../../pageobjects/POManager')
const playwright = require('@playwright/test');
const {Before,After,BeforeStep,AfterStep,Status} = require('@cucumber/cucumber');

// Synchronous
Before(async function () {
  
        const browser = await playwright.chromium.launch({
        headless:false
    });
    const context = await browser.newContext();
    this.page = await context.newPage();
    this.poManager = new POManager(this.page);
});

BeforeStep(async function () {
  
})

AfterStep(async function ({result}) {
  
    if (result.status === Status.FAILED) {
    this.driver.takeScreenshot({path:'screenshot1.png'});
  }
});

After(function(){

    console.log("I am the last to execute ");
});