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

    const allTitles = await page.locator(".card-body b").
    allTextContents();
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

test('Client App Login', async({page})=>{

    const email = 'mangesh013@gmail.com'
    const products = page.locator(".card-body");
    const productName = 'ZARA COAT 3';
    await page.goto("https://rahulshettyacademy.com/client/");
    console.log(await page.title());

    
    await page.getByPlaceholder("email@example.com").fill(email);
   await page.getByPlaceholder("enter your passsword").fill("Iamking@000");
   await page.getByRole('button',{name:'Login'}).click();

    const userName = page.getByPlaceholder("email@example.com");
    const userPassword = page.getByPlaceholder('enter your passsword');
    const loginBtn = page.getByRole('button',{name:'Login'});
    const cardName = page.locator(".field:has-text('Name on Card') input");
    const coupan = page.locator(".field:has-text('Apply Coupon') input");
    const cvvValue = page.locator(".field:has-text('CVV Code') input");
    await userName.fill(email);
    await userPassword.fill('Mangesh@123');
    await loginBtn.click();

    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
    const count = await products.count();
    // Zara COat 4

   await page.locator(".card-body").filter({hasText:"ZARA COAT 3"})
   .getByRole('button',{name:"Add to Cart"}).click();

    await page.getByRole("listitem").getByRole('button',{name:"Cart"}).click(); // click on Cart at top bar
    
    await page.locator("div li").first().waitFor();
   await expect(page.getByText("ZARA COAT 3")).toBeVisible();

    console.log(await page.getByText("ZARA COAT 3").textContent());
    // 32 video
    await page.getByRole('button',{name:'Checkout'}).click();  // Click on Checout button
   
    const message = page.locator("text=Place Order");
    await expect(message).toHaveText("Place Order");
    console.log(await message.textContent());

    await cardName.fill("Mangesh Panchwagh");
  
    await coupan.fill("Diwali2026");
  
    await cvvValue.fill("123");


    //await page.locator("[placeholder*='Country']").pressSequentially('ind',{delay:100});
   await page.getByPlaceholder('Select Country').pressSequentially('ind',{delay:100});
   
   await page.getByRole('button',{name:'Ind'}).nth(1).click();

    const emailLabel = await page.locator("label[type='text']");
    console.log(await emailLabel.textContent());
    await expect(emailLabel).toHaveText(email);

// Verify dropdown/backdrop has closed
await expect(page.locator(".ta-backdrop")).toBeHidden();

    await page.getByText("PLACE ORDER").click(); // Click on PLACE ORDER 
    // Click Place Order
    
    //await page.pause();
    // verity order place with Thank you message
    //await page.locator(".hero-primary").waitFor();
    //await page.waitForLoadState('networkidle');


    // Verify confirmation page
//const confirmationMessage = page.locator(".hero-primary");

//await expect(confirmationMessage).toContainText(" Thankyou for the order. ");
     await expect(page.getByText(" Thankyou for the order. ")).toBeVisible();
    // verify order id // change from here onwoards
    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderId);

   await page.getByRole('button',{name:"Orders"}).click();
   
   await page.locator("tbody").waitFor();
   const rows = await page.locator("tbody tr");
 
   //await page.locator(".card-body").filter({hasText:"ZARA COAT 3"})
   //.getByRole('button',{name:"Add to Cart"}).click();

   
   for (let i = 0; i < await rows.count(); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (orderId.includes(rowOrderId)) {
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }
      
   
   const orderIdDetails = await page.locator(".col-text").textContent();
   expect(orderId.includes(orderIdDetails)).toBeTruthy();
   
});

////////////////////////////////////////////////////////////////////////////////
// This is the code downloaded from udemy site
////////////////////////////////////////////////////////////////////////////////

test.only('@Webst Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "anshika@gmail.com";
   const productName = 'ZARA COAT 3';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").fill("Iamking@000");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 
   const count = await products.count();
   for (let i = 0; i < count; ++i) {
      if (await products.nth(i).locator("b").textContent() === productName) {
         //add to cart
         await products.nth(i).locator("text= Add To Cart").click();
         break;
      }
   }
 
   await page.locator("[routerlink*='cart']").click();
   //await page.pause();
 
   await page.locator("div li").first().waitFor();
   const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
   expect(bool).toBeTruthy();
   await page.locator("text=Checkout").click();
 
  await page.getByPlaceholder('Select Country').pressSequentially("ind", { delay: 150 }) 
   const dropdown = page.locator(".ta-results");
   await dropdown.waitFor();
   const optionsCount = await dropdown.locator("button").count();
   for (let i = 0; i < optionsCount; ++i) {
      const text = await dropdown.locator("button").nth(i).textContent();
      if (text === " India") {
         await dropdown.locator("button").nth(i).click();
         break;
      }
   }
 
   expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
   await page.locator(".action__submit").click();
   await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
   const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(orderId);
 
   await page.locator("button[routerlink*='myorders']").click();
   await page.locator("tbody").waitFor();
   const rows = await page.locator("tbody tr");
 
 
   for (let i = 0; i < await rows.count(); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (orderId.includes(rowOrderId)) {
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }
   const orderIdDetails = await page.locator(".col-text").textContent();
   expect(orderId.includes(orderIdDetails)).toBeTruthy();
 
});