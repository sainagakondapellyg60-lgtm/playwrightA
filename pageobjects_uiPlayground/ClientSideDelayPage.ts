import { Page, Locator } from '@playwright/test';
import { TIMEOUTS } from '../constants/timeouts';

export class clientSideDelayPage {
    private readonly page: Page;
    private readonly clientSieDealybtn: Locator;
    private readonly clientreplyText: Locator;
    constructor(page: Page,) {

        this.page = page;
        this.clientSieDealybtn = page.getByRole('button', { name: 'Button Triggering Client Side Logic' });
        this.clientreplyText = page.locator('.bg-success');
    }
    async navigate(){
        await this.page.goto('/');
    }
    async clickonClientDelaybtn() {
        await this.clientSieDealybtn.click();
        return this;
    }
    async getReponsefromClient(): Promise<string> {
        await this.clientreplyText.waitFor({ state: 'visible', timeout: TIMEOUTS.CLIENT_SIDE_DELAY })
        const text = await this.clientreplyText.textContent();
        return text ?? '';
    }

}
