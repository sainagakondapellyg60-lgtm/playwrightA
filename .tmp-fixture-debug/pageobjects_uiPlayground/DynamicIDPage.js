"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicID = void 0;
class DynamicID {
    constructor(page, actions) {
        this.page = page;
        this.actions = actions;
        this.dynamicButton = page.getByRole('button', { name: 'Button with Dynamic ID' });
        this.dynamicID = page.locator('a[href="/dynamicid"]');
    }
    async navigateToDynamicID() {
        await this.actions.click(this.dynamicID, 'dynamic id link on dashboard');
    }
    async clickIDbtn() {
        await this.actions.click(this.dynamicButton, 'dynamic id button');
        const id = await this.dynamicButton.getAttribute('id');
        await this.page.reload();
        return id ?? '';
    }
}
exports.DynamicID = DynamicID;
