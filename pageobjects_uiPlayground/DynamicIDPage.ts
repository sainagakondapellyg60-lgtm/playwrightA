import { Page, Locator } from '@playwright/test';

export class DynamicID {
    private readonly page: Page;
    private readonly dynamicButton: Locator;
    private readonly dynamicID: Locator;


    constructor(page: Page) {
        this.page = page;
        this.dynamicButton = page.getByRole('button', { name: 'Button with Dynamic ID' })
        this.dynamicID = page.locator('a[href="/dynamicid"]');

    }
    async navigateToDynamicID() {
        await this.dynamicID.click();
        return new DynamicID(this.page);

    }
    async clickIDbtn(): Promise<string> {
        await this.dynamicButton.click();
        const id = await this.dynamicButton.getAttribute('id');
        await this.page.reload();
        return id ?? '';
    }
}