const {test,expect} = require ('@playwright/test');



// here we are sending order id which does not belongs to existing logged in user.
test('Security test request intercept',async({page})=>{

    // login and read order page
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill("mangesh013@gmail.com");
   await page.locator("#userPassword").fill("Mangesh@123");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   
   await page.locator("button[routerlink*='myorders']").click();

    // Here we have put the orderid which is not part of the existing user, 
    // orderif of other user and accessing it from logged in user.
    // it should give authorization error as shown in assert (ecpect)
     
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
        route=> route.continue({
            url : 'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=621661f884b053f6765465b6'
        })
    );
    await page.locator("button:has-text('View')").first().click();
   // await page.pause(); // unauthorised 401 or 403
    await expect(page.locator("p").last()).toHaveText("You are not authorize to view this order");





});