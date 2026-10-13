const {test,expect} = require('@playwright/test')

test('Handling dropdown, radio buttons', async({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    const userName = page.locator('#username');
    const singIn = page.locator('#singInBtn');
 //   const documentLink = page.locator("a[href*='documnets-request']");
    const dropdown = page.locator("select.form-control");
    await dropdown.selectOption("consult");
    page.pause();

    // radio buttons
    //await page.locator('.radiotextsty').nth(1).click();
     await page.locator('.radiotextsty').last().click();
    await page.locator('#okayBtn').click();
    console.log(await page.locator(".radiotextsty").last().isChecked());
    await expect(page.locator('.radiotextsty').last()).toBeChecked();
 
    await page.locator("#terms").click();
    await expect(page.locator('#terms').last()).toBeChecked();

    await page.locator("#terms").uncheck();
    expect(await page.locator("#terms").isChecked()).toBeFalsy();

    const documentLink = page.locator("a[href*='documents-request']");

   console.log("Document link count:", await documentLink.count());

   await expect(documentLink).toHaveAttribute('class', 'blinkingText');
   //await expect(documentLink).toHaveAttribute('class','blinkingText');

});

test('Child window handle',async({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator("#username");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("a[href*='documents-request']");

    const [newPage]= await Promise.all
    ([
        context.waitForEvent('page'),  // listen for any new page pending,rejected,fulfilled
        documentLink.click(),
    ] ) // new page is opened
  // await text = newPage.locator(".red").textContent();
    const text = await newPage.locator(".red").textContent();
    const arrayText = text.split("@");
    const doaminName = arrayText[1].split(" ")[0];
    //console.log(text);
    //console.log(doaminName);
    await page.locator("#username").fill(doaminName);
    //await page.pause();
    console.log(await page.locator("#username").textContent());
     console.log(await page.locator("#username").inputValue());

});