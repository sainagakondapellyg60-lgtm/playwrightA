"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dialogHandler = void 0;
class dialogHandler {
    constructor(page) {
        this.page = page;
    }
    handleDialog(action, value) {
        return this.page.waitForEvent('dialog').then(async (dialog) => {
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
exports.dialogHandler = dialogHandler;
