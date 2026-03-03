import { Page, Locator } from '@playwright/test';

export class DynamicID {
    page: Page;
    dynamicButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.dynamicButton = page.getByRole('button', { name: 'Button with Dynamic ID' })

    }
    async clickIDbtn(): Promise<string> {
        await this.dynamicButton.click();
        const id = await this.dynamicButton.getAttribute('id');
        return id ?? '';
    }
}