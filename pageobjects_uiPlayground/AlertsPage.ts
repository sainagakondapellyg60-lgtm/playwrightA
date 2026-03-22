import { Page, Locator } from '@playwright/test';
import { dialogHandler } from '../utility/dialoghandler';


export class alertsPage {


    private readonly clickAlertbtn: Locator;
    private readonly clickConfirmbtn: Locator;
    private readonly clickPromptbtn: Locator;
    private readonly Alert: Locator;
    private readonly page:Page


    dialog: dialogHandler
    constructor(page: Page) {
        this.page = page;
        this.clickAlertbtn = page.getByRole('button', { name: 'Alert' });
        this.clickConfirmbtn = page.getByRole('button', { name: /^\s*Confirm\s*$/ });//matches Confirm with ignoring whitespaces
        this.clickPromptbtn = page.getByRole('button', { name: 'Prompt' });
        this.Alert = page.getByRole('link', { name: 'Alerts' });
        this.dialog = new dialogHandler(page)

    }
    async handleAlert() {
        const returnvalue = await Promise.all([
            this.dialog.handleDialog('accept'),
            this.clickAlertbtn.click()
        ]);
        return returnvalue;
    }

    async handleConfirm() {
        const returnvalue = await Promise.all([
            this.dialog.handleDialog('accept'),
            this.clickConfirmbtn.click()
        ]); return returnvalue;
    }
    async handlePrompt() {
        const returnvalue = await Promise.all([
            this.dialog.handleDialog('accept', 'gooose'),
            this.clickPromptbtn.click()
        ]); return returnvalue;

    }
    async navigateToAlerts() {
        await this.Alert.click();

    }
}