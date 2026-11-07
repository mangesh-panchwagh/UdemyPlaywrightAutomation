import {LoginPage} from './Loginpage';
import { DashboardPage} from '../pageobjects/DashboardPage';
import { OrdersHistoryPage } from '../pageobjects/OrdersHistoryPage';
import { OrdersReviewPage } from '../pageobjects/OrdersReviewPage';
import { CartPage } from '../pageobjects/CartPage';
import {Page} from '@playwright/test';
export class POManager{

    loginPage : LoginPage;
    dashboardPage : DashboardPage;
    ordersHistoryPage : OrdersHistoryPage;
    ordersReviewPage : OrdersReviewPage;
    cartPage : CartPage;
    page : Page;

    constructor(page:Page){

        this.page = page;
        //this.loginpage = new Loginpage(this.page);
        this.loginPage = new LoginPage(this.page);
        this.dashboardPage = new DashboardPage(this.page);

        this.ordersHistoryPage = new OrdersHistoryPage(this.page);
        this.ordersReviewPage = new OrdersReviewPage(this.page);
        this.cartPage = new CartPage(this.page);
    }

    getLoginPage(){
        return this.loginPage;
    }

    getCartPage()
    {
    return this.cartPage;
    }

    getDashboardPage(){
        return this.dashboardPage;
    }
    
    getOrdersHistoryPage()
    {
        return this.ordersHistoryPage;
    }

    getOrdersReviewPage()
    {
    return this.ordersReviewPage;
    }
}

module.exports = {POManager};
