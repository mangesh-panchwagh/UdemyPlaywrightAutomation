const {test,expect} = require ('@playwright/test');

test('Popup validations',async({page})=>{

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    // await page.goto('http://google.com');
    // await page.goBack();
    // await page.goForward();
    
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();

    // popup handling
     await page.locator("#confirmbtn").click();
    //await page.getByRole("button",{name:'Confirm'}).click();
    await page.on("dialog",dialog => dialog.accept());
    //page.on("dialog",dialog=> dialog.dismiss());
    await page.locator("#mousehover").hover();
    // frames
    const framesPage = page.frameLocator("#courses-iframe");
    await framesPage.locator("li a[href*='lifetime-access']:visible").click();
    //const textCheck =  framesPage.locator(".text h2").textContent();
    //console.log(textCheck.split(" ")[1]);

});