const{test,expect,request} = require ('@playwright/test');
const {APiUtils} = require('./utils/APIUtils');
const fakePayloadOrders = {data : [], message:"No Orders"};
const loginPayload = {
    // userEmail: "mangesh013@gmail.com",
    // userPassword: "Mangesh@123"
     userEmail: "panchwaghmangesh177@gmail.com",
    userPassword: "Mangesh@123"
};
const orderPayload = {
    orders: [
        {
            country: "Switzerland",
            productOrderedId: "6960eac0c941646b7a8b3e68"
        }
    ]

};

let token;
let orderId;
let response;
// code will execute first before executing the test 
test.beforeAll(async()=>{

    // Login API
    const apiContext =  await request.newContext({
        ignoreHTTPSErrors: true
    });
    const apiUtils = new APiUtils(apiContext,loginPayload);
    response = await apiUtils.createOrder(orderPayload);
    /* This code we have moved to Utils APiUtils file under getToken method */
   
     });

     /* Before each is not required */
// test.beforeEach(()=>{

// });

// test 1, test 2, test 3

test('Place order',async({page})=>{

    //const apiUtils = new APIUtils(apiContext,loginPayload);
    //const orderId = createOrder(orderPayload);
    await page.addInitScript(value => {

        window.localStorage.setItem('token',value);
    
    },response.token );
  
    await page.waitForLoadState('networkidle');

    await page.goto("https://rahulshettyacademy.com/client/");

    // before clicking on Order we have to tell Playwright that go and mock orders 
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
        async route=>{
            
            const response = await page.request.fetch(route.request());    // it makes call manually and fetches response
            let body = JSON.stringify(fakePayloadOrders);
            route.fulfill(
                {
                    response,
                    body,

                }
            );
            // intercepting response - API response -> {faker response} ||| browser -> render data on front end
        });
   
        // in this file we are testing messsage if no any orders are present what message it shows.
        // it does not required to delete the existing orders
    await page.locator("button[routerlink*='myorders']").click();
   
    //await page.locator("tbody").waitFor();
    //const rows = await page.locator("tbody tr");
    await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");
    console.log(await page.locator(".mt-4").textContent());

});

