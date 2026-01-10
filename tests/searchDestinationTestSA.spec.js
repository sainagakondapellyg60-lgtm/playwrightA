const { test, expect } = require('@playwright/test')
const { HomepageSA,DestinationSA } = require('../pageobjects/Homepagesig')

test('testing destination search of singapore airline', async ({ page }) => {

    const homeObj = new HomepageSA(page);
    await homeObj.navigate();
    const destPage = await homeObj.navigateToNewWindow();
    const destObj = new DestinationSA(destPage);
    await destObj.searchDestination();
}
)
