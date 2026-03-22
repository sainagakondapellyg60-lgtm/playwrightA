import { Locator, Page } from '@playwright/test';

const lauchshopurl = 'https://shop.polymer-project.org/'
export class shopcart {
    private readonly page: Page
    private readonly outerWearbutton: Locator;
    private readonly productgrid: Locator;
    private readonly titles: Locator;
    private readonly addcart: Locator;
    private readonly viewcart: Locator;

    constructor(page: Page) {
        this.page = page;
        this.outerWearbutton = page.getByRole('link', { name: "Men's Outerwear" })
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

    async isProductGridVisible(): Promise<boolean> {
        return await this.productgrid.isVisible();
    }

    async addProductTocart(product: string) {

        const countofItems = await this.titles.count();
        console.log(countofItems);
        const allitemsnames: string[] = await this.titles.allTextContents();
        console.log(allitemsnames)

        for (const i of allitemsnames) {
            if (i === product) {
                console.log(i)
                await this.titles.filter({ hasText: product }).click();
                break;
            }
        }
        await this.addcart.click();
        await this.viewcart.click();
    }
}