const { test, expect } = require('@playwright/test')
const { POManager } = require('../pageobjects/POManager.js')
const { devices } = require('@playwright/test')
// console.log(Object.keys(devices));


    test.only(`Testing of Automation Exercise`, async ({ page }) => {
        const poObj = new POManager(page);
       
        //navigate
        const exerciseObj = poObj.getHomeofExecrise();
        await exerciseObj.navigate();
        await exerciseObj.navigateToTshirts();
        const value = await exerciseObj.searchResults();
        console.log(typeof (value) + value)
        expect(value).toContain("London to New York");
    }
    )
