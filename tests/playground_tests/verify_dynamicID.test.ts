import { test, expect } from '../../fixtures/baseTest';
import { POMangerPG } from '../../pageobjects_uiPlayground/poManagerPlayground';
//import { DynamicID } from '../../pageobjects_uiPlayground/DynamicIDPage'


test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(baseURL!);

})

test('@smoke @reg @ui @DM @ID verify dynamic ID', async ({page}) => {
    const poObj = new POMangerPG(page);
    const homepagePGObj = poObj.getHomepagePGObj();
    await homepagePGObj.clickHome();
    console.log('begin');
    const dynamicIDpage = poObj.getDynamicIDpageObj();
    //method chaining
    const clickOne = await (await dynamicIDpage.navigateToDynamicID()).clickIDbtn();

    //await page.pause();
    const clickTwo = await dynamicIDpage.clickIDbtn();

    // const clickThree = await dynamicIDpage.clickIDbtn()
    await expect.soft(clickOne,'id is not matched as expected').not.toBe(clickTwo);
    console.log(clickOne + '--' + clickTwo + ' \n-- end of test');


}

)
