# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: testnetworkInterceptor.spec.js >> @SP Place the order
- Location: tests\testnetworkInterceptor.spec.js:17:1

# Error details

```
ReferenceError: APiUtils is not defined
```

# Test source

```ts
  1  | const { test, expect, request } = require('@playwright/test');
  2  | //const { APiUtils } = require('../utils/APiUtils');
  3  | const loginPayLoad = { userEmail: "anshika@gmail.com", userPassword: "Iamking@000" };
  4  | const orderPayLoad = { orders: [{ country: "India", productOrderedId: "67a8dde5c0d3e6622a297cc8" }] };
  5  | const fakePayLoadOrders = { data: [], message: "No Orders" };
  6  |  
  7  | let response;
  8  | test.beforeAll(async () => {
  9  |   const apiContext = await request.newContext();
> 10 |   const apiUtils = new APiUtils(apiContext, loginPayLoad);
     |                    ^ ReferenceError: APiUtils is not defined
  11 |   response = await apiUtils.createOrder(orderPayLoad);
  12 |  
  13 | })
  14 |  
  15 |  
  16 | //create order is success
  17 | test('@SP Place the order', async ({ page }) => {
  18 |   page.addInitScript(value => {
  19 |  
  20 |     window.localStorage.setItem('token', value);
  21 |   }, response.token);
  22 |   await page.goto("https://rahulshettyacademy.com/client");
  23 |  
  24 |  
  25 |   await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
  26 |     async route => {
  27 |       const response = await page.request.fetch(route.request());
  28 |       let body = JSON.stringify(fakePayLoadOrders);
  29 |       route.fulfill(
  30 |         {
  31 |           response,
  32 |           body, 
  33 |  
  34 |         });
  35 |       //intercepting response -APi response-> { playwright fakeresponse}->browser->render data on front end
  36 |     });
  37 |  
  38 |   await page.locator("button[routerlink*='myorders']").click();
  39 |   await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*")
  40 |  
  41 |   console.log(await page.locator(".mt-4").textContent());
  42 |  
  43 |  
  44 |  
  45 | });
```