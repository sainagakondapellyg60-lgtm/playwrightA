import { test, expect, Page } from '@playwright/test';
import { POMangerPG } from '../../pageobjects_uiPlayground/poManagerPlayground';


test.beforeEach(async ({ page, baseURL }) => {
    console.log(baseURL)
    await page.goto(baseURL!);

})

test('verifying the client Side delay ', async ({ page }) => {
    const poObj = new POMangerPG(page);
    const clientObj = poObj.getClientSideDelayObj();
    const homepagePGObj = poObj.getHomepagePGObj();
    await homepagePGObj.clickHome();
    console.log('begin-2');
    await homepagePGObj.navigateToClientSideDelay();
    const response = await (await clientObj.clickonClientDelaybtn()).getReponsefromClient();
    await expect.soft(response).toBe('Data calculated on the client side.');
    console.log(response + '--end of test -2');

}
)