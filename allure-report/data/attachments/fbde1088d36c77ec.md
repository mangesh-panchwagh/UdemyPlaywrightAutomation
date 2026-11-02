# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: mytest.spec.js >> Keivora Test
- Location: tests\mytest.spec.js:3:5

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('a[href*=\'products\']').first()
    - locator resolved to <a class="ekit-menu-nav-link" href="https://keivora.com/products/">Products</a>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <a class="ekit-menu-nav-link" href="https://keivora.com/wp-content/uploads/2026/10/Aravvat_Combined_Test_Report.pdf">Reports</a> from <li id="menu-item-4691" data-vertical-menu="750px" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-4691 nav-item elementskit-mobile-builder-content">…</li> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <a class="ekit-menu-nav-link" href="https://keivora.com/wp-content/uploads/2026/10/Aravvat_Combined_Test_Report.pdf">Reports</a> from <li id="menu-item-4691" data-vertical-menu="750px" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-4691 nav-item elementskit-mobile-builder-content">…</li> subtree intercepts pointer events
    - retrying click action
      - waiting 100ms
    18 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <a class="ekit-menu-nav-link" href="https://keivora.com/wp-content/uploads/2026/10/Aravvat_Combined_Test_Report.pdf">Reports</a> from <li id="menu-item-4691" data-vertical-menu="750px" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-4691 nav-item elementskit-mobile-builder-content">…</li> subtree intercepts pointer events
     - retrying click action
       - waiting 500ms

```

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Home' }).first()
    - locator resolved to <a href="https://keivora.com/" class="ekit-menu-nav-link active">Home</a>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <a class="ekit-menu-nav-link" href="https://keivora.com/about-us/">About Us</a> from <li id="menu-item-317" data-vertical-menu="750px" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-317 nav-item elementskit-mobile-builder-content">…</li> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <a class="ekit-menu-nav-link" href="https://keivora.com/about-us/">About Us</a> from <li id="menu-item-317" data-vertical-menu="750px" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-317 nav-item elementskit-mobile-builder-content">…</li> subtree intercepts pointer events
    - retrying click action
      - waiting 100ms
    18 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <a class="ekit-menu-nav-link" href="https://keivora.com/about-us/">About Us</a> from <li id="menu-item-317" data-vertical-menu="750px" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-317 nav-item elementskit-mobile-builder-content">…</li> subtree intercepts pointer events
     - retrying click action
       - waiting 500ms

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Skip to content" [ref=e2] [cursor=pointer]:
    - /url: "#content"
  - generic [ref=e4]:
    - link [ref=e9] [cursor=pointer]:
      - /url: https://keivora.com
      - img "Logo White" [ref=e12]
    - navigation "Header Menu" [ref=e16]:
      - button "Menu" [ref=e17]
      - generic [ref=e18]:
        - list [ref=e19]:
          - listitem [ref=e20]:
            - link "Home" [ref=e21] [cursor=pointer]:
              - /url: https://keivora.com/
          - listitem [ref=e22]:
            - link "About Us" [ref=e23] [cursor=pointer]:
              - /url: https://keivora.com/about-us/
          - listitem [ref=e24]:
            - link "Products" [ref=e25] [cursor=pointer]:
              - /url: https://keivora.com/products/
          - listitem [ref=e26]:
            - link "Reports" [ref=e27] [cursor=pointer]:
              - /url: https://keivora.com/wp-content/uploads/2026/10/Aravvat_Combined_Test_Report.pdf
          - listitem [ref=e28]:
            - link "Blogs" [ref=e29] [cursor=pointer]:
              - /url: https://keivora.com/blog/
          - listitem [ref=e30]:
            - link "Contact Us" [ref=e31] [cursor=pointer]:
              - /url: https://keivora.com/contact-us/
        - button "X" [ref=e33]
    - link "Cart 0" [ref=e36] [cursor=pointer]:
      - /url: /cart/
      - generic [ref=e41]: Cart
      - generic [ref=e42]: "0"
  - generic [ref=e43]:
    - heading "The Purity of A2 Gir Cow Ghee, Straight From the Source" [level=1] [ref=e48]
    - generic [ref=e53]:
      - generic [ref=e54]:
        - generic [ref=e55]:
          - text: 100% Pure A2 Milk
          - generic [ref=e56]: ✦
        - generic [ref=e57]:
          - text: Authentic Vedic Bilona Method
          - generic [ref=e58]: ✦
        - generic [ref=e59]:
          - text: 100% Lab Tested Purity
          - generic [ref=e60]: ✦
        - generic [ref=e61]:
          - text: Certified FSSAI Compliant
          - generic [ref=e62]: ✦
        - generic [ref=e63]:
          - text: Traditional Wooden Churned
          - generic [ref=e64]: ✦
        - generic [ref=e65]:
          - text: Zero Preservatives & Additives
          - generic [ref=e66]: ✦
        - generic [ref=e67]:
          - text: Nourishing Grass-Fed Desi Cows
          - generic [ref=e68]: ✦
        - generic [ref=e69]:
          - text: Rich Aroma & Golden Texture
          - generic [ref=e70]: ✦
        - generic [ref=e71]:
          - text: Trusted Ayurvedic Quality
          - generic [ref=e72]: ✦
        - generic [ref=e73]:
          - text: Rich in Vitamins A, D, E & K
          - generic [ref=e74]: ✦
        - generic [ref=e75]:
          - text: Tested Free from 350+ Pesticides
          - generic [ref=e76]: ✦
      - generic [aria-hidden] [ref=e77]:
        - generic [ref=e78]:
          - text: 100% Pure A2 Milk
          - generic [ref=e79]: ✦
        - generic [ref=e80]:
          - text: Authentic Vedic Bilona Method
          - generic [ref=e81]: ✦
        - generic [ref=e82]:
          - text: 100% Lab Tested Purity
          - generic [ref=e83]: ✦
        - generic [ref=e84]:
          - text: Certified FSSAI Compliant
          - generic [ref=e85]: ✦
        - generic [ref=e86]:
          - text: Traditional Wooden Churned
          - generic [ref=e87]: ✦
        - generic [ref=e88]:
          - text: Zero Preservatives & Additives
          - generic [ref=e89]: ✦
        - generic [ref=e90]:
          - text: Nourishing Grass-Fed Desi Cows
          - generic [ref=e91]: ✦
        - generic [ref=e92]:
          - text: Rich Aroma & Golden Texture
          - generic [ref=e93]: ✦
        - generic [ref=e94]:
          - text: Trusted Ayurvedic Quality
          - generic [ref=e95]: ✦
        - generic [ref=e96]:
          - text: Rich in Vitamins A, D, E & K
          - generic [ref=e97]: ✦
        - generic [ref=e98]:
          - text: Tested Free from 350+ Pesticides
          - generic [ref=e99]: ✦
    - heading "Verified Purity, Rooted in Tradition" [level=2] [ref=e109]
    - heading "A2 Ghee Made to Be Verified, Not Just Believed" [level=2] [ref=e117]
    - heading "Pure A2 Ghee You Can Actually Verify" [level=2] [ref=e122]
    - heading "See How Our A2 Ghee Is Actually Made" [level=2] [ref=e136]
    - generic [ref=e139]:
      - heading "Purity Backed by Real Proof, Not Just Promises" [level=2] [ref=e141]
      - generic [ref=e142]:
        - generic [ref=e144]:
          - generic [ref=e145]: FSSAI Licensed
          - generic [ref=e146]:
            - generic [ref=e148]: "0"
            - generic [ref=e149]: "%"
        - generic [ref=e151]:
          - generic [ref=e152]: Lab Tested Ghee
          - generic [ref=e153]:
            - generic [ref=e155]: "0"
            - generic [ref=e156]: "%"
    - text: prev next
    - heading "Common Questions About Our A2 Ghee" [level=2] [ref=e165]
    - 'heading "The Keivora Journal: Ghee, Tradition & Wellness" [level=2] [ref=e172]'
  - generic [ref=e176]:
    - generic [ref=e177]:
      - generic [ref=e178]:
        - heading "Stay Connected with Keivora" [level=2] [ref=e180]
        - paragraph [ref=e182]: Get order updates and reorder reminders directly on WhatsApp. No inbox clutter.
        - link "CHAT WITH US ON WHATSAPP" [ref=e184] [cursor=pointer]:
          - /url: https://api.whatsapp.com/send/?phone=919112091037&text=Hi+%2AKeivora%2A%21+I+need+more+info+about+Keivora+https%3A%2F%2Fkeivora.com%2F_Sent+with+Joinchat_&type=phone_number&app_absent=0
      - generic [ref=e187]:
        - heading "Quick Links" [level=2] [ref=e189]
        - list [ref=e194]:
          - listitem [ref=e195]:
            - link "Home" [ref=e196] [cursor=pointer]:
              - /url: https://keivora.com/
          - listitem [ref=e197]:
            - link "About Us" [ref=e198] [cursor=pointer]:
              - /url: https://keivora.com/about-us/
          - listitem [ref=e199]:
            - link "Products" [ref=e200] [cursor=pointer]:
              - /url: https://keivora.com/products/
          - listitem [ref=e201]:
            - link "Blog" [ref=e202] [cursor=pointer]:
              - /url: https://keivora.com/blog/
          - listitem [ref=e203]:
            - link "Contact Us" [ref=e204] [cursor=pointer]:
              - /url: https://keivora.com/contact-us/
    - generic [ref=e209]:
      - link [ref=e212] [cursor=pointer]:
        - /url: tel:(+246)%20333-085
        - generic [ref=e214]:
          - heading "Call Us" [level=3] [ref=e215]
          - paragraph [ref=e216]: +91 91120 91037
      - link [ref=e219] [cursor=pointer]:
        - /url: mailto:info@domainname.com
        - generic [ref=e221]:
          - heading "E-mail Us" [level=3] [ref=e222]
          - paragraph [ref=e223]: customercare@keivora.com
    - generic [ref=e224]:
      - paragraph [ref=e229]: Copyright © Aravvat International Private Limited | Designed & Developed By Tlpglobus Solutions Pvt. Ltd.
      - list [ref=e232]:
        - listitem [ref=e233]:
          - link "Facebook" [ref=e234] [cursor=pointer]:
            - /url: https://www.facebook.com/KeivoraOfficial/
        - listitem [ref=e237]:
          - link "Youtube" [ref=e238] [cursor=pointer]:
            - /url: https://www.youtube.com/@Keivora_official
        - listitem [ref=e241]:
          - link "Instagram" [ref=e242] [cursor=pointer]:
            - /url: https://www.instagram.com/keivora_official/
        - listitem [ref=e245]:
          - generic [ref=e246] [cursor=pointer]: Google
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
> 20 |      await page.getByRole("link", {name : "Home"}).nth(0).click();
     |                                                           ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  21 |      await page.waitForLoadState("networkidle");
  22 |      console.log(await page.title());
  23 |       await page.getByRole("link", {name : "About US"}).nth(0).click();
  24 |        await page.waitForLoadState("networkidle");
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