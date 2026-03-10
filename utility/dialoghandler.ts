import { Page } from '@playwright/test';

export class dialogHandler {
    constructor(private page: Page) { }

    handleDialog(action: 'accept' | 'dismiss', value?: string) {
        return this.page.waitForEvent('dialog').then(async dialog => {

            const dialogInfo = {
                type: dialog.type(),
                message: dialog.message(),
                defaultValue: dialog.defaultValue()
               
            };

            if (action === 'accept')
                await dialog.accept(value);
            else
                await dialog.dismiss();

            return dialogInfo;


        });

    }
}
