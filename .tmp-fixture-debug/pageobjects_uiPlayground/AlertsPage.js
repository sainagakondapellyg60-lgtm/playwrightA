"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alertsPage = void 0;
class alertsPage {
    constructor(page, actions, dialog) {
        this.page = page;
        this.actions = actions;
        this.dialog = dialog;
        this.clickAlertbtn = page.getByRole('button', { name: 'Alert' });
        this.clickConfirmbtn = page.getByRole('button', { name: /^\s*Confirm\s*$/ }); //matches Confirm with ignoring whitespaces
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
        ]);
        return returnvalue;
    }
    async handlePrompt() {
        const returnvalue = await Promise.all([
            this.dialog.handleDialog('accept', 'gooose'),
            this.actions.click(this.clickPromptbtn, 'Prompt button')
        ]);
        return returnvalue;
    }
    async navigateToAlerts() {
        await this.Alert.click();
    }
}
exports.alertsPage = alertsPage;
