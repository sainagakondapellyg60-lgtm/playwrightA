import { Page, Locator } from '@playwright/test';
import { UIActions, dialogHandler } from 'utility';

export class alertsPage {

    private readonly clickAlertbtn: Locator;
    private readonly clickConfirmbtn: Locator;
    private readonly clickPromptbtn: Locator;
    private readonly Alert: Locator;
   

    constructor( private page: Page,
        private actions: UIActions,
        private dialog: dialogHandler) {
    
        this.clickAlertbtn = page.getByRole('button', { name: 'Alert' });
        this.clickConfirmbtn = page.getByRole('button', { name: /^\s*Confirm\s*$/ });//matches Confirm with ignoring whitespaces
        this.clickPromptbtn = page.getByRole('button', { name: 'Prompt' });
        this.Alert = page.getByRole('link', { name: 'Alerts' });
    }
    async handleAlert() {
        const returnvalue = await Promise.all([
            this.dialog.handleDialog('accept'),
            this.actions.click(this.clickAlertbtn, 'Alert button')
        ]);
        return returnvalue;
    }

    async handleConfirm() {
        const returnvalue = await Promise.all([
            this.dialog.handleDialog('accept'),
            this.actions.click(this.clickConfirmbtn, 'confirm button')
        ]); return returnvalue;
    }
    async handlePrompt() {
        const returnvalue = await Promise.all([
            this.dialog.handleDialog('accept', 'gooose'),
            this.actions.click(this.clickPromptbtn, 'Prompt button')
        ]); return returnvalue;

    }
    async navigateToAlerts() {
        await this.Alert.click();

    }
}
