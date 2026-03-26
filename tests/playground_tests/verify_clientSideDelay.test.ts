import { test, expect } from '../../fixtures/baseTest';
import { POMangerPG } from '../../pageobjects_uiPlayground/poManagerPlayground';




test('@smoke @ui @DM @button verifying the client Side delay ', async ({page}) => {
    const poObj = new POMangerPG(page);
    const clientObj = poObj.getClientSideDelayObj();
    const homepagePGObj = poObj.getHomepagePGObj();
    await clientObj.navigate();
    await homepagePGObj.clickHome();
    console.log('begin-2');
    await homepagePGObj.navigateToClientSideDelay();
    const response = await (await clientObj.clickonClientDelaybtn()).getReponsefromClient();
    await expect.soft(response,'Displayed the message').toBe('Data calculated on the client side.');
    console.log(response + '--end of test -2');

}
)