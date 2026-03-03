import { test, expect, Page } from '@playwright/test';
import { POMangerPG } from '../../pageobjects_uiPlayground/poManagerPlayground';

let poObj: POMangerPG;
let page: Page;
let homepagePGObj: ReturnType<typeof poObj.getHomepagePGObj>;

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
    poObj = new POMangerPG(page);
    homepagePGObj = poObj.getHomepagePGObj();
    await homepagePGObj.launchURL();
});
test.beforeEach(async () => {
    await homepagePGObj.clickHome();
})

test('verify dynamic ID', async () => {

    console.log('begin');

    //method chaining
    const clickOne = await (await homepagePGObj
        .navigateToDynamicID())
        .clickIDbtn();

    //await page.pause();
    await page.reload();
    const dynamicIDpage = poObj.getDynamicIDpageObj();
    const clickTwo = await dynamicIDpage.clickIDbtn();


    // const clickThree = await dynamicIDpage.clickIDbtn()
    await expect.soft(clickOne).not.toBe(clickTwo);
    // await expect(clickOne).not.toBe(clickTwo)
    console.log(clickOne + '--' + clickTwo + ' \n-- end of test');


}

)

test('verifying the client Side delay ', async () => {
    const clientObj = poObj.getClientSideDelayObj();
    console.log('begin-2');
    await homepagePGObj.navigateToClientSideDelay();
    const response = await (await clientObj.clickonClientDelaybtn()).getReponsefromClient();
    await expect.soft(response).toBe('Data calculated on the client side.');
    console.log(response + '--end of test -2');

}
)