import { test, expect } from '@playwright/test';
import { POManager } from '../pageobjects_ts/POManager'
import testdata from '../pageobjects_ts/Testdata.json'
import { customtest } from '../tests/Test_base/testdataasFixture.ts';

//parameterization via json file
for (const data of testdata) {
    test.only(`testing destination search of singapore airline -- ${data.OriginCity}`, async ({ page }) => {
        const poObj = new POManager(page);

        //navigate
        const homeObj = poObj.getHomePage();
        await homeObj.navigate();

        //search
        const destPage = await homeObj.navigateToNewWindow();
        const destObj = poObj.getDestinationpage(destPage);
        await destObj.searchDestination(data.OriginCity, data.DestinationCity);
        const value = await destObj.searchResults();
        console.log(typeof (value) + value)
        expect(value).toContain("London to New York");
    }
    )
}

// testdata via fixtures
customtest(`testing destination search of singapore `, async ({ page, testDataforPlan }) => {
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