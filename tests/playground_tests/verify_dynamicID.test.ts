import { test, expect, Page } from '@playwright/test';
import { POMangerPG } from '../../pageobjects_uiPlayground/poManagerPlayground';
//import { DynamicID } from '../../pageobjects_uiPlayground/DynamicIDPage'


test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(baseURL!);

})

test('verify dynamic ID', async ({page}) => {
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
    await expect.soft(clickOne).not.toBe(clickTwo);
    console.log(clickOne + '--' + clickTwo + ' \n-- end of test');


}

)
