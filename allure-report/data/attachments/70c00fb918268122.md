# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: mytest.spec.js >> Keivora Test
- Location: tests\mytest.spec.js:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [active] [ref=f3e1]:
  - link "Skip to content" [ref=f3e2] [cursor=pointer]:
    - /url: "#content"
  - generic [ref=f3e6]:
    - link [ref=f3e11] [cursor=pointer]:
      - /url: https://keivora.com
      - img "Logo White" [ref=f3e14]
    - navigation "Header Menu" [ref=f3e18]:
      - button "Menu" [ref=f3e19]
      - generic [ref=f3e20]:
        - list [ref=f3e21]:
          - listitem [ref=f3e22]:
            - link "Home" [ref=f3e23] [cursor=pointer]:
              - /url: https://keivora.com/
          - listitem [ref=f3e24]:
            - link "About Us" [ref=f3e25] [cursor=pointer]:
              - /url: https://keivora.com/about-us/
          - listitem [ref=f3e26]:
            - link "Products" [ref=f3e27] [cursor=pointer]:
              - /url: https://keivora.com/products/
          - listitem [ref=f3e28]:
            - link "Reports" [ref=f3e29] [cursor=pointer]:
              - /url: https://keivora.com/wp-content/uploads/2026/10/Aravvat_Combined_Test_Report.pdf
          - listitem [ref=f3e30]:
            - link "Blogs" [ref=f3e31] [cursor=pointer]:
              - /url: https://keivora.com/blog/
          - listitem [ref=f3e32]:
            - link "Contact Us" [ref=f3e33] [cursor=pointer]:
              - /url: https://keivora.com/contact-us/
        - button "X" [ref=f3e35]
    - link "Cart 0" [ref=f3e38] [cursor=pointer]:
      - /url: /cart/
      - generic [ref=f3e43]: Cart
      - generic [ref=f3e44]: "0"
  - generic [ref=f3e45]:
    - heading "About us" [level=1] [ref=f3e50]
    - heading "Why Households Trust Verified A2 Ghee" [level=2] [ref=f3e55]
    - generic [ref=f3e63]:
      - heading "Committed to Purity Through Every Step" [level=2] [ref=f3e66]
      - generic [ref=f3e68]:
        - heading "OUR GOALS" [level=3] [ref=f3e70]
        - 'heading "Built Around One Idea: Purity You Can Verify" [level=2] [ref=f3e72]'
    - generic [ref=f3e75]:
      - heading "What Actually Makes Our A2 Ghee Different" [level=2] [ref=f3e78]
      - generic [ref=f3e79]:
        - generic [ref=f3e86]:
          - heading "Lab Tested Purity" [level=3] [ref=f3e87]
          - paragraph [ref=f3e88]: Tested for Vitamins A, D, E, and K by an independent lab.
        - generic [ref=f3e102]:
          - heading "Vedic Bilona Method" [level=3] [ref=f3e103]
          - paragraph [ref=f3e104]: Hand churned using the traditional process, with no cream separation shortcuts.
        - generic [ref=f3e120]:
          - heading "FSSAI Licensed" [level=3] [ref=f3e121]
          - paragraph [ref=f3e122]: Every pack carries our license number and batch details
    - generic [ref=f3e132]:
      - heading "Facts About Real A2 Ghee You May Not Know" [level=2] [ref=f3e134]
      - generic [ref=f3e135]:
        - generic [ref=f3e138]:
          - heading "3" [level=3] [ref=f3e139]
          - paragraph [ref=f3e140]: Pack Sizes
        - generic [ref=f3e143]:
          - heading "4" [level=3] [ref=f3e144]
          - paragraph [ref=f3e145]: Vitamins Tested
        - generic [ref=f3e148]:
          - heading "1" [level=3] [ref=f3e149]
          - paragraph [ref=f3e150]: Verified Lab Report
    - heading "Sourced and Verified With Care" [level=2] [ref=f3e155]
    - generic [ref=f3e164]:
      - generic [ref=f3e165]:
        - generic [ref=f3e166]: THE FAMILY BEHIND KEIVORA
        - heading "A 40-Year Search for the Taste of Home" [level=2] [ref=f3e167]:
          - text: A 40-Year Search for
          - generic [ref=f3e168]: the Taste of Home
        - paragraph [ref=f3e170]: After retiring, our founder Arjun searched for decades to find the pure, lovingly made ghee from his childhood. He finally found it on a small farm in Maharashtra.
        - paragraph [ref=f3e171]: At 64, he decided to curate and verify this authentic A2 Gir cow ghee rather than mass-producing it. Today, Keivora is a true family commitment to bringing real, traditional ghee back to your kitchen.
      - generic [ref=f3e172]:
        - generic [ref=f3e173]: MEET THE TEAM
        - heading "The People Behind Every Jar" [level=3] [ref=f3e174]
      - generic [ref=f3e175]:
        - generic [ref=f3e176]:
          - generic [ref=f3e177]: "01"
          - generic [ref=f3e178]:
            - heading "Arjun Kukade" [level=4] [ref=f3e179]
            - generic [ref=f3e180]: Founder
            - paragraph [ref=f3e181]: Uses his 64 years of life experience to curate and verify every batch, ensuring it matches the pure standards of his mother's kitchen.
        - generic [ref=f3e182]:
          - generic [ref=f3e183]: "02"
          - generic [ref=f3e184]:
            - heading "Savita Kukade" [level=4] [ref=f3e185]
            - generic [ref=f3e186]: Co-Founder
            - paragraph [ref=f3e187]: The heart of the Keivora home. Savita ensures every single order is packed and dispatched with love and care.
        - generic [ref=f3e188]:
          - generic [ref=f3e189]: "03"
          - generic [ref=f3e190]:
            - heading "Family" [level=4] [ref=f3e191]
            - generic [ref=f3e192]: Brand & Quality
            - paragraph [ref=f3e193]: While working full-time in IT, Arjun's son drives the brand's social media and process automation. Alongside him, his wife personally checks every quality parameter before the ghee reaches your door.
      - generic [ref=f3e194]:
        - generic [ref=f3e195]: ✦
        - generic [ref=f3e199]: OUR GUARANTEE
        - generic [ref=f3e200]: “
        - blockquote [ref=f3e201]:
          - text: We are not just selling ghee.
          - strong [ref=f3e202]: We are putting our family's name and trust
          - text: on every single jar.
        - generic [ref=f3e203]: ✦
    - 'heading "Our Promise: Purity and Honesty Always" [level=2] [ref=f3e211]'
  - generic [ref=f3e223]:
    - generic [ref=f3e224]:
      - generic [ref=f3e225]:
        - heading "Stay Connected with Keivora" [level=2] [ref=f3e227]
        - paragraph [ref=f3e229]: Get order updates and reorder reminders directly on WhatsApp. No inbox clutter.
        - link "CHAT WITH US ON WHATSAPP" [ref=f3e231] [cursor=pointer]:
          - /url: https://api.whatsapp.com/send/?phone=919112091037&text=Hi+%2AKeivora%2A%21+I+need+more+info+about+Keivora+https%3A%2F%2Fkeivora.com%2F_Sent+with+Joinchat_&type=phone_number&app_absent=0
      - generic [ref=f3e234]:
        - heading "Quick Links" [level=2] [ref=f3e236]
        - list [ref=f3e241]:
          - listitem [ref=f3e242]:
            - link "Home" [ref=f3e243] [cursor=pointer]:
              - /url: https://keivora.com/
          - listitem [ref=f3e244]:
            - link "About Us" [ref=f3e245] [cursor=pointer]:
              - /url: https://keivora.com/about-us/
          - listitem [ref=f3e246]:
            - link "Products" [ref=f3e247] [cursor=pointer]:
              - /url: https://keivora.com/products/
          - listitem [ref=f3e248]:
            - link "Blog" [ref=f3e249] [cursor=pointer]:
              - /url: https://keivora.com/blog/
          - listitem [ref=f3e250]:
            - link "Contact Us" [ref=f3e251] [cursor=pointer]:
              - /url: https://keivora.com/contact-us/
    - generic [ref=f3e256]:
      - link [ref=f3e259] [cursor=pointer]:
        - /url: tel:(+246)%20333-085
        - generic [ref=f3e261]:
          - heading "Call Us" [level=3] [ref=f3e262]
          - paragraph [ref=f3e263]: +91 91120 91037
      - link [ref=f3e266] [cursor=pointer]:
        - /url: mailto:info@domainname.com
        - generic [ref=f3e268]:
          - heading "E-mail Us" [level=3] [ref=f3e269]
          - paragraph [ref=f3e270]: customercare@keivora.com
    - generic [ref=f3e271]:
      - paragraph [ref=f3e276]: Copyright © Aravvat International Private Limited | Designed & Developed By Tlpglobus Solutions Pvt. Ltd.
      - list [ref=f3e279]:
        - listitem [ref=f3e280]:
          - link "Facebook" [ref=f3e281] [cursor=pointer]:
            - /url: https://www.facebook.com/KeivoraOfficial/
        - listitem [ref=f3e284]:
          - link "Youtube" [ref=f3e285] [cursor=pointer]:
            - /url: https://www.youtube.com/@Keivora_official
        - listitem [ref=f3e288]:
          - link "Instagram" [ref=f3e289] [cursor=pointer]:
            - /url: https://www.instagram.com/keivora_official/
        - listitem [ref=f3e292]:
          - generic [ref=f3e293] [cursor=pointer]: Google
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | 
  3  | test('Keivora Test', async({page})=>{
  4  | 
  5  |      await page.goto("https://keivora.com/");
  6  |     const pageTitle = await page.title();
  7  |     console.log(await page.title());
  8  |     await expect(page).toHaveTitle(pageTitle);
  9  | 
  10 |     const Products = page.locator("a[href*='products']").nth(0);
  11 |     Products.click();
  12 |     await page.waitForLoadState('networkidle');
  13 |    // await page.pause(); 
  14 |     
  15 |     const Home = page.locator("text=Home").nth(0);
  16 |     Home.click();
  17 |      await page.waitForLoadState('networkidle');
  18 |     //await page.pause();
  19 | 
  20 |      await page.getByRole("link", {name : "Home"}).nth(0).click();
  21 |      await page.waitForLoadState("networkidle");
  22 |      console.log(await page.title());
  23 |       await page.getByRole("link", {name : "About US"}).nth(0).click();
> 24 |        await page.waitForLoadState("networkidle");
     |                   ^ Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
  25 |        console.log(await page.title());
  26 |        await page.getByRole("link", {name : "Products"}).nth(0).click();
  27 |         //await page.waitForLoadState("networkidle");
  28 |         console.log(await page.title());
  29 |         await page.getByRole("link", {name : "Reports"}).click();
  30 |          await page.waitForLoadState("networkidle");
  31 |          console.log(await page.title());
  32 |          await page.getByRole("link", {name : "Blogs"}).click();
  33 |           await page.waitForLoadState("networkidle");
  34 |           console.log(await page.title());
  35 |           await page.getByRole("link", {name : "Contact Us"}).click();
  36 |            await page.waitForLoadState("networkidle");
  37 |            console.log(await page.title());
  38 | });
```