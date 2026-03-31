import { Page, Locator } from '@playwright/test';
import { UIActions, logger } from 'utility';

export class clientSideDelayPage {
    
    private readonly clientSieDealybtn: Locator;
    private readonly clientreplyText: Locator;
   
    constructor(private page: Page,private actions: UIActions) {
        this.clientSieDealybtn = page.getByRole('button', { name: 'Button Triggering Client Side Logic' });
        this.clientreplyText = page.locator('.bg-success');
    }
    async navigate() {
        await this.page.goto('/');
    }
    async clickonClientDelaybtn() {
        await this.actions.click(this.clientSieDealybtn,'clientDelay button');
        return this;
    }
    async getReponsefromClient(): Promise<string> {
        await this.actions.waitForVisible(this.clientreplyText, "Awaiting for response text from client")
        // await this.clientreplyText.waitFor({ state: 'visible', timeout: TIMEOUTS.CLIENT_SIDE_DELAY })
        const text = await this.actions.getText(this.clientreplyText,'client reply');
        logger.info(`Returned: ${text}`);
        return text ?? '';
    }

}
