const url = "https://automationexercise.com/";


class Homepage {
    constructor(page) {
        this.page = page;
        this.productLink = page.getByRole('link', { name: 'Products' });
        this.categoryMen = page.locator("//a[normalize-space()='Men']");
        this.tshirts=page.getByRole('link', { name: 'Tshirts' });
        this.tshirtsHeader=page.getByRole('heading', { name: 'Men - Tshirts Products' });

    }
    async navigate() {
        await this.page.goto(url);
    }

    async navigateToTshirts() {
        await this.productLink.click();
        await this.categoryMen.click();
        await this.tshirts.click();
        
    }
    async searchResults() {
        
        return await this.tshirtsHeader.textContent();
    }

}


module.exports = { Homepage };

