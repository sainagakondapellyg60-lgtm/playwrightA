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
        this.SelectDepartDateFromCal = page.locator('button').filter({ hasText: '29' }).first()
        this.selectReturnDateFromCal = page.locator('button').filter({ hasText: '10' }).last()
        this.Search = page.locator('button:has-text("SEARCH")');
        this.searchResultDepart1 = page.locator('(//*[@class="page_header--wrap"])[1]')
        this.searchResultDepart = page.getByText('1. Paris to New York');
    }

    async searchDestination(Origin, Destination) {
        await console.log(Origin + "--" + Destination)
        await this.page.waitForLoadState('load');
        await this.SelectOrigin.fill(Origin);
        await this.page.keyboard.press('Enter', {delay:150});
      
        await this.SelectDestination.fill(Destination,{delay:150});
        await this.page.keyboard.press('Enter',{delay:150});
        
        await this.SelectDepartDate.click();
        await this.SelectDepartDateFromCal.click({delay:150});
        
        await this.selectReturnDateFromCal.click({delay:150});
       
        await this.Search.click({delay:150});
  
    }
    async searchResults() {
        
        return await this.searchResultDepart1.textContent();
    }
}

module.exports = { HomepageSA, DestinationSA };

