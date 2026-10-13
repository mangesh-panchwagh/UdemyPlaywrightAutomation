const{test,expect,request} = require ('@playwright/test');
const loginPayload = {
    userEmail: "mangesh013@gmail.com",
    userPassword: "Mangesh@123"
};

let token;
// code will execute first before executing the test 
test.beforeAll(async()=>{

    const apiContext =  await request.newContext({
        ignoreHTTPSErrors: true
    });
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data:loginPayload
        })  // 200, 201
        expect((await loginResponse).ok).toBeTruthy();
        const loginResponseJson = await loginResponse.json();
        token = loginResponseJson.token;
        console.log(token);
    });

test.beforeEach(()=>{

});

// test 1, test 2, test 3

test('Client App Login API Testing',async({page})=>{

    
    await page.addInitScript(value => {

        window.localStorage.setItem('token',value);
    },token );
    // await page.goto("https://rahulshettyacademy.com/client/");
    // await page.locator('#userEmail').fill(email);
    // await page.locator('#userPassword').fill('Mangesh@123');
    // await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    const email = '';
    const products = page.locator(".card-body");
    const productName = 'ZARA COAT 3';
    await page.goto("https://rahulshettyacademy.com/client/");

    await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
    const count = await products.count();
    // Zara COat 4
    for(let i = 0; i<count;++i){
        if(await products.nth(i).locator("b").textContent() == productName){

            // add to cart
            await products.nth(i).locator("text= Add to Cart").click(); 
            break;
        }
    }   
    await page.locator("[routerlink*='cart']").click(); // click on Cart at top bar
    await page.locator("div li").first().waitFor();

    await expect(page.locator("h3:has-text('ZARA COAT 3')")).toBeVisible();
    console.log(await page.locator("h3:has-text('ZARA COAT 3')").textContent());
    // 32 video
    await page.locator("text=Checkout").click();    // Click on Checout button

    const message = page.locator("text=Place Order");
    await expect(message).toHaveText("Place Order");
    console.log(await message.textContent());

    await page.locator(".field:has-text('Name on Card') input").fill("Mangesh Panchwagh");
    await page.locator(".field:has-text('Apply Coupon') input").fill("Diwali2026");
    await page.locator(".field:has-text('CVV Code') input").fill("123");

    await page.locator("[placeholder*='Country']").pressSequentially('ind',{delay:100});
    const dropdown = page.locator(".ta-results");
    await dropdown.waitFor();
    const optionsCount = await dropdown.locator("button").count();
    for(let i=0; i<optionsCount; ++i){
        
        const text = await dropdown.locator("button").nth(i).textContent();
        if(text === ' India'){
            // click
            //await page.pause();
            dropdown.locator("button").nth(i).click();
            break;
        }
    }

    //await expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
    await expect(page.getByText('mangesh013@gmail.com')).toBeVisible();
// Verify dropdown/backdrop has closed
await expect(page.locator(".ta-backdrop")).toBeHidden();

    await page.locator(".action__submit").click(); // Click on PLACE ORDER 
    // Click Place Order

    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    // verify order id
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