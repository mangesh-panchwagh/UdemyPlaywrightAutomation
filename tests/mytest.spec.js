import {test,expect} from '@playwright/test';

test('Keivora Test', async({page})=>{

     await page.goto("https://keivora.com/");
    const pageTitle = await page.title();
    console.log(await page.title());
    await expect(page).toHaveTitle(pageTitle);

    const Products = page.locator("a[href*='products']").nth(0);
    Products.click();
    await page.waitForLoadState('networkidle');
   // await page.pause(); 
    
    const Home = page.locator("text=Home").nth(0);
    Home.click();
     await page.waitForLoadState('networkidle');
    //await page.pause();

     await page.getByRole("link", {name : "Home"}).nth(0).click();
     await page.waitForLoadState("networkidle");
     console.log(await page.title());
      await page.getByRole("link", {name : "About US"}).nth(0).click();
       await page.waitForLoadState("networkidle");
       console.log(await page.title());
       await page.getByRole("link", {name : "Products"}).nth(0).click();
        //await page.waitForLoadState("networkidle");
        console.log(await page.title());
        await page.getByRole("link", {name : "Reports"}).click();
         await page.waitForLoadState("networkidle");
         console.log(await page.title());
         await page.getByRole("link", {name : "Blogs"}).click();
          await page.waitForLoadState("networkidle");
          console.log(await page.title());
          await page.getByRole("link", {name : "Contact Us"}).click();
           await page.waitForLoadState("networkidle");
           console.log(await page.title());
});