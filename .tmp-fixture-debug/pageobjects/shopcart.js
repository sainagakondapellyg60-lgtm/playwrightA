"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopcart = void 0;
const utility_1 = require("utility");
const lauchshopurl = 'https://shop.polymer-project.org/';
class shopcart {
    constructor(page) {
        this.page = page;
        this.outerWearbutton = page.getByRole('link', { name: "Men's Outerwear" });
        this.productgrid = page.locator('ul.grid');
        this.titles = page.locator('div.title');
        // this.addcart = page.getByRole('button', { name: 'ADD TO CART' })
        this.addcart = page.getByLabel('Add this item to cart');
        this.viewcart = page.getByText('View Cart');
    }
    async navigate() {
        await this.page.goto(lauchshopurl);
        return this;
    }
    async clickOuterwear() {
        await Promise.all([
            this.page.waitForLoadState('networkidle'),
            this.outerWearbutton.first().click()
        ]);
    }
    async isProductGridVisible() {
        return await this.productgrid.isVisible();
    }
    async addProductTocart(product) {
        const countofItems = await this.titles.count();
        utility_1.logger.info(`Product count on page: ${countofItems}`);
        const allitemsnames = await this.titles.allTextContents();
        utility_1.logger.debug(`Product titles: ${JSON.stringify(allitemsnames)}`);
        for (const i of allitemsnames) {
            if (i === product) {
                utility_1.logger.info(`Opening product: ${i}`);
                await this.titles.filter({ hasText: product }).click();
                break;
            }
        }
        await this.addcart.click();
        await this.viewcart.click();
    }
}
exports.shopcart = shopcart;
