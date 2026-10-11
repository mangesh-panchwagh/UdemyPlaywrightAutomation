const {test,expect} = require('@playwright/test')


test('Browser context validatin error-login', async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/client/");
    console.log(await page.title());
    const userName = page.locator('#userEmail');
    const userPassword = page.locator('#userPassword');
    const loginBtn = page.locator("[value='Login']");

    await userName.fill('mangesh013@gmail.com');
    await userPassword.fill('Mangesh@123');
    await loginBtn.click();
    //console.log(await page.locator('.card-body b').nth(0).textContent());

    
    //await page.waitForLoadState('networkidle');
    //const cardTitles = page.locator(".card-body b");
   await page.locator(" ").last().waitFor();
    const allTitles = await page.locator(".card-body b").allTextContents();
    console.log("All Titles");
    console.log(allTitles);
});

test('Assignment',async ({page})=>{

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

test.only('Client App Login', async({page})=>{


    const products = page.locator(".card-body");
    const productName = 'ZARA COAT 3';
    await page.goto("https://rahulshettyacademy.com/client/");
    console.log(await page.title());

    
    const userName = page.locator('#userEmail');
    const userPassword = page.locator('#userPassword');
    const loginBtn = page.locator("[value='Login']");
    const cardName = page.locator(".field:has-text('Name on Card') input");
    const coupan = page.locator(".field:has-text('Apply Coupon') input");

    await userName.fill('mangesh013@gmail.com');
    await userPassword.fill('Mangesh@123');
    await loginBtn.click();

    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
    const count = await products.count();
    // Zara COat 4
    for(let i = 0; i<count;++i){

        if(await products.nth(i).locator("b").textContent() == productName){

            // add to cart
            await products.nth(i).locator("text= Add to Cart").click();
            //await page.locator("[routerlink='/dashboard/cart']").click();
            
            break;
        }
    }
    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").first().waitFor();
   
    //const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
    //expect(bool).toBeTruthy();

    await expect(page.locator("h3:has-text('ZARA COAT 3')")).toBeVisible();
    console.log(await page.locator("h3:has-text('ZARA COAT 3')").textContent());
    // 32 video
    await page.locator("text=Checkout").click();
    //await page.locator("button").nth(1).click();
    //await page.pause();
    const message = page.locator("text=Place Order");
    await expect(message).toHaveText("Place Order");
    console.log(await message.textContent());

    await page.pause()
    await cardName.fill("Mangesh Panchwagh");
    await page.pause()
    await coupan.fill("Diwali2026");
    await page.pause();

});