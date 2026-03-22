import { Page, test, expect } from '@playwright/test';
import { POMangerPG } from '../../pageobjects_uiPlayground/poManagerPlayground';
import { alertsPage } from '../../pageobjects_uiPlayground/AlertsPage';


test('verify dialogs', async ({ page, baseURL }) => {
    console.log('begin alerts-'+baseURL);
   const poObj = new POMangerPG(page);
   const alertsPageObj = poObj.getAlertPageObj();
    await page.goto(baseURL!);
    await alertsPageObj.navigateToAlerts();

    const [dialogInfo] = await alertsPageObj.handlePrompt();
    await alertsPageObj.handleConfirm();
    await alertsPageObj.handleAlert();
    await expect.soft(dialogInfo.type).toBe('prompt');
    console.log('end alerts')


})