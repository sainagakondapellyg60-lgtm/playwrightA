"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientSideDelayPage = void 0;
const utility_1 = require("utility");
class clientSideDelayPage {
    constructor(page, actions) {
        this.page = page;
        this.actions = actions;
        this.clientSieDealybtn = page.getByRole('button', { name: 'Button Triggering Client Side Logic' });
        this.clientreplyText = page.locator('.bg-success');
    }
    async navigate() {
        await this.page.goto('/');
    }
    async clickonClientDelaybtn() {
        await this.actions.click(this.clientSieDealybtn, 'clientDelay button');
        return this;
    }
    async getReponsefromClient() {
        await this.actions.waitForVisible(this.clientreplyText, "Awaiting for response text from client");
        // await this.clientreplyText.waitFor({ state: 'visible', timeout: TIMEOUTS.CLIENT_SIDE_DELAY })
        const text = await this.actions.getText(this.clientreplyText, 'client reply');
        utility_1.logger.info(`Returned: ${text}`);
        return text ?? '';
    }
}
exports.clientSideDelayPage = clientSideDelayPage;
