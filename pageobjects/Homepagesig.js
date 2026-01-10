const url = "https://www.singaporeair.com/";

class HomepageSA {
    constructor(page) {
        this.page = page;
        this.DestinationTile = page.getByText('Destinations');
        this.planTravel = page.getByLabel('Plan travel');

    }
    async navigate() {
        await this.page.goto(url);
    }

    async navigateToNewWindow() {
        await this.planTravel.click();
        const [DestinationPage] = await Promise.all(
            [
                this.page.waitForEvent('popup'),
                this.DestinationTile.click()
            ]
        );
        await DestinationPage.waitForLoadState('domcontentloaded');
        await DestinationPage.bringToFront();

        return DestinationPage;
    }



}

class DestinationSA {
    constructor(page) {
        this.page = page;
        this.SelectOrigin = page.getByPlaceholder('Select origin');
        this.SelectDestination = page.getByPlaceholder('Select destination');
        this.SelectDepartDate = page.locator('label:has-text("DEPART DATE")');
        this.SelectReturnDate = page.locator('label:has-text("RETURN DATE")');
        this.SelectDepartDateFromCal = page.locator('button').filter({ hasText: '21' }).first()
        this.selectReturnDateFromCal = page.locator('button').filter({ hasText: '10' }).last()
        this.Search = page.locator('button:has-text("SEARCH")');
    }

    async searchDestination() {
        await this.SelectOrigin.fill("Paris");
        await this.page.keyboard.press('Enter');
        await this.SelectDestination.fill("New York");
        await this.page.keyboard.press('Enter');
        await this.SelectDepartDate.click();
        await this.SelectDepartDateFromCal.click();
        await this.selectReturnDateFromCal.click();
        await this.Search.click();
    }
}

module.exports = { HomepageSA, DestinationSA };
