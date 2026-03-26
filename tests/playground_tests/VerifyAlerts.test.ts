import { test, expect } from '../../fixtures/baseTest';
import { POMangerPG } from '../../pageobjects_uiPlayground/poManagerPlayground';

test('@reg  @ui @SBP @alert verify dialogs', async ({ page},testInfo) => {
    test.skip(testInfo.title.includes('dialogs'), 'skipping for reports');
    console.log('begin alerts-' + await page.goto('/'));
    const poObj = new POMangerPG(page);
    const alertsPageObj = poObj.getAlertPageObj();
    // await page.goto('/');
    await alertsPageObj.navigateToAlerts();

    const [dialogInfo] = await alertsPageObj.handlePrompt();
    await alertsPageObj.handleConfirm();
    await alertsPageObj.handleAlert();
    await expect.soft(dialogInfo.type).toBe('prompt');
    console.log('end alerts')

})