const { test, expect } = require('@playwright/test')
const { POManager } = require('../pageobjects/POManager')
const testdata = require('../pageobjects/Testdata.json')
const {customtest}=require('../tests/Test_base/testdataasFixture.js')

//parameterization via json file
for(const data of testdata){
test(`testing destination search of singapore airline ${data.OriginCity}`, async ({ page }) => {
    const poObj = new POManager(page);

    //navigate
    const homeObj = poObj.getHomePage();
    await homeObj.navigate();

    //search
    const destPage = await homeObj.navigateToNewWindow();
    const destObj = poObj.getDestinationpage(destPage);
    await destObj.searchDestination(data.OriginCity, data.DestinationCity);
    const value = await destObj.searchResults();
    console.log(value)
}
)
}

// testdata via fixtures
customtest.only(`testing destination search of singapore `, async ({ page,testDataforPlan }) => {
    const poObj = new POManager(page);

    //navigate
    const homeObj = poObj.getHomePage();
    await homeObj.navigate();

    //search
    const destPage = await homeObj.navigateToNewWindow();
    const destObj = poObj.getDestinationpage(destPage);
    await destObj.searchDestination(testDataforPlan.OriginCity, testDataforPlan.DestinationCity);
    const value = await destObj.searchResults();
    console.log(value)
}
)