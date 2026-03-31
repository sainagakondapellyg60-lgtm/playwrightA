import { Page, Locator } from '@playwright/test';
import { UIActions } from 'utility';

export class DynamicID {

    private readonly dynamicButton: Locator;
    private readonly dynamicID: Locator;
    
    constructor(private page: Page, private actions: UIActions) {
        this.dynamicButton = page.getByRole('button', { name: 'Button with Dynamic ID' })
        this.dynamicID = page.locator('a[href="/dynamicid"]');
    }
    async navigateToDynamicID() {
        await this.actions.click(this.dynamicID, 'dynamic id link on dashboard');
    }
    async clickIDbtn(): Promise<string> {
        await this.actions.click(this.dynamicButton, 'dynamic id button');
        const id = await this.dynamicButton.getAttribute('id');
        await this.page.reload();
        return id ?? '';
    }
}
