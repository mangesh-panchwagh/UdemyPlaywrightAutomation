const {test, expect} = require ('@playwright/test')

test('Browser Context Playwright test', async ({browser})=>{

    // Playwright code -
    // step1 - open browser
    // step2 - enter u/p
    // step3 - click
    // javascript is asynchronous

    // chrome plugins and cookies
    
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());
    const userName = page.locator("#username");
    const password = page.locator("[type='password']");
    const signIn = page.locator("#signInBtn");
    const checkoutBtn = page.getByRole('link', { name: /Checkout/ });
    const cardTitles = page.locator(".card-body a");
    // css, xpath tyoe and fill
    //await page.locator("#username").type("rahulshetty") this is deprecated
    await userName.fill("NileshPail@gmail.com");
    await password.fill("learning");
    await signIn.click();
    // wait until this locator shown up page
    console.log(await page.locator("[style*='block']").textContent());
    const message = page.locator("[style*='block']");
    await expect(message).toHaveText('Incorrect username/password.');
    await expect(message).toContainText("Incorrect username/password.");

    // type method or fill method for entering information on  page
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
     await password.fill("Learning@830$3mK2");
    await signIn.click();
    await checkoutBtn.isVisible();
    //console.log(await checkoutBtn.textContent());
    //expect (checkoutBtn).toBeVisible();
    /*
   console.log(await cardTitles.nth(0).textContent());
   console.log(await cardTitles.first().textContent());
   console.log(await cardTitles.nth(0).textContent());
   console.log(await page.locator(".card-body a").nth(1).textContent());
   console.log(await page.locator(".card-body a").nth(2).textContent());
   console.log(await page.locator(".card-body a").nth(3).textContent());
   console.log(await page.locator(".card-body a").last().textContent());
    */
   // get titles of all cards
   const allTitles = await cardTitles.allTextContents();
   console.log("All titles : ");
   console.log(allTitles);
});


test('Page Playwright test', async ({page})=>{

    await page.goto('https://www.google.com/');
    console.log(await page.title());
    await expect(page).toHaveTitle('Google');
});

test.only('Assignment',async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/client/");
    console.log(await page.title());
    const userName = page.locator('#userEmail');
    const userPassword = page.locator('#userPassword');
    const loginBtn = page.locator('#login');
    const title = page.locator('.card-body b')

    await userName.fill('mangesh013@gmail.com');
    await userPassword.fill('Mangesh@123');
    await loginBtn.click();
    console.log(await title.nth(0).textContent());
    console.log(await title.nth(1).textContent());
    console.log(await title.last().textContent());
});