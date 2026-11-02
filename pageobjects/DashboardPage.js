const { expect } = require('@playwright/test');
class DashboardPage{

    constructor(page){
             this.page = page;
            this.products = page.locator(".card-body");
            this.productsText = page.locator(".card-body b");
            this.cart =  page.locator("[routerlink*='cart']");
            this.orders = page.locator("button[routerlink*='myorders']");
    }

    // async searchProductAddCart(productName){
       
    // const titles = await this.productsText.allTextContents();
    // console.log(titles);
    // const count = await this.products.count();
    // // Zara COat 4
    // for(let i = 0; i<count;++i){

    //     if(await this.products.nth(i).locator("b").textContent() == productName){

    //         // add to cart
    //         await this.products.nth(i).locator("text= Add to Cart").click();
    //         break;
    //     }
    // }   
    // }

     async searchProductAddCart(productName) {

            const product = this.products.filter({
            hasText: productName
        });

        // await product
        //     .getByRole('button', { name: /add to cart/i })
        //     .click();
            
        const addToCartButton = product.getByRole('button', {
        name: /add to cart/i
        });

        console.log("Add To Cart button count:", await addToCartButton.count());

        await expect(product).toHaveCount(1);

        await addToCartButton.click();

        // const product = this.products.filter({
        //     hasText: productName
        // });

        // await product
        //     .getByRole('button', { name: /add to cart/i })
        //     .click();

        //  const product = this.products.filter({
        //     has: this.page.getByText(productName, {
        //         exact: true
        //     })
        // });

        // await expect(product).toHaveCount(1);

        // await product
        //     .getByRole('button', {
        //         name: /add to cart/
        //     })
        //     .click();
    }

    async navigateToOrders(){
    await this.orders.click();
    }

    async navigateToCart(){
        await this.cart.click();
    }
}

module.exports = {DashboardPage};