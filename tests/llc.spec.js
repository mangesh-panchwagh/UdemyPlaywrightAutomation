import {test,expect} from '@playwright/test';

test('Playwright Special locators',async({page})=>{

    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    const pagetitle = await page.title();
    await expect(page).toHaveTitle(pagetitle);

    await page.locator("[name='name']").nth(0).fill("Mangesh Panchwagh");
    await page.locator("[name='email']").nth(0).fill("mangesh013@gmail.com");
    //await page.pause();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByLabel("Check me out if you Love IceCreams!").check();
    //await page.pause();
    await page.getByLabel("Employed").check();
    //await page.pause();

    // getbyPlaceholder
    await page.getByPlaceholder("Password").fill("TestPassword@123");
    //await page.pause();
    await page.getByRole("button", {name:'Submit'}).click();
    //await page.pause();
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();

    // 5 seconds default timeout for except assertions -- {timeout:10000} step level
    await expect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible( { timeout : 10_000 } );

    await page.getByRole("link", {name : "Shop"}).click();
    await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();
});

test.only('Test Level Timeout',async({page})=>{


    test.setTimeout(60000);
    page.setDefaultTimeout(9000);
    const slowExcept = await expect.configure({timeout:9000});   // time for test level
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    const pagetitle = await page.title();
    await expect(page).toHaveTitle(pagetitle);

    await page.locator("[name='name']").nth(0).fill("Mangesh Panchwagh");
    await page.locator("[name='email']").nth(0).fill("mangesh013@gmail.com");
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByLabel("Check me out if you Love IceCreams!").check();
    await page.getByLabel("Employed").check();

    // getbyPlaceholder
    await page.getByPlaceholder("Password").fill("TestPassword@123");
    
    await page.getByRole("button", {name:'Submit'}).click();
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();

    // 5 seconds default timeout for except assertions -- {timeout:10000} step level - test level
    await slowExcept(page.getByText("Success! The Form has been submitted successfully!."));

    // Global -> test -> step
    await page.getByRole("link", {name : "Shop"}).click({timeout:15000});
    await slowExcept(await page.locator(".my-4").first()).toHaveText("Shop Name");

    await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();
});









































