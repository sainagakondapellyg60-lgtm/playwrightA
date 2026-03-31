"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIActions = void 0;
const test_1 = require("@playwright/test");
const loggerUtil_1 = require("./loggerUtil");
const timeouts_1 = require("./timeouts");
/* Point to remeber while use waits
Playwright already waits for:
element attached
visible
stable
enabled

Dont use before or for all actions like click, fill,select.

1.use for assertions like expect(locator).toBeVisible()it might not always wait so use waitfor
methods to handle assertions alone.
2.use for pageload page.waitForLoadState('domcontentloaded');
3.for flaky UI like button programmed to display text after some 20seconds

*/
class UIActions {
    constructor(page, log = (0, loggerUtil_1.createTestLogger)()) {
        this.page = page;
        this.log = log;
    }
    async click(locator, name) {
        await test_1.test.step(`Click: ${name}`, async () => {
            try {
                this.log.info(`Clicking: ${name}`);
                await locator.click();
            }
            catch (error) {
                await this.handleError(error, `Click failed: ${name}`);
            }
        });
    }
    async fill(locator, value, name) {
        await test_1.test.step(`Fill: ${name}`, async () => {
            try {
                await locator.clear();
                this.log.info(`Filling ${name} with: ${value}`);
                await locator.fill(value);
            }
            catch (error) {
                await this.handleError(error, `Fill failed: ${name}`);
            }
        });
    }
    async check(locator, name) {
        await test_1.test.step(`Check: ${name}`, async () => {
            try {
                this.log.info(`Checking: ${name}`);
                await locator.check();
            }
            catch (error) {
                await this.handleError(error, `Check failed: ${name}`);
            }
        });
    }
    async getText(locator, name) {
        return await test_1.test.step(`Get Text: ${name}`, async () => {
            try {
                const textContent = await locator.textContent();
                const text = textContent && textContent.trim().length > 0
                    ? textContent
                    : await locator.inputValue();
                this.log.info(`Text from ${name}: ${text}`);
                return text ?? '';
            }
            catch (error) {
                await this.handleError(error, `GetText failed: ${name}`);
                return null;
            }
        });
    }
    /* */
    async waitForVisible(locator, name) {
        await test_1.test.step(`Waiting for ${name} to be visisble`, async () => {
            try {
                this.log.info(`Waiting for ${name} to be visisble`);
                await locator.waitFor({ state: 'visible', timeout: timeouts_1.TIMEOUTS.ELEMENT_VISIBLE });
            }
            catch (error) {
                await this.handleError(error, `Waiting for failed: ${name}`);
            }
        });
    }
    /**
     *  Centralized Error Handler
     */
    async handleError(error, message) {
        this.log.error(`${message} | Error: ${error.message}`);
        //  Attach screenshot to Allure
        await test_1.test.info().attach('Failure Screenshot', {
            body: await this.page.screenshot(),
            contentType: 'image/png'
        });
        // Attach error details
        await test_1.test.info().attach('Error Details', {
            body: error.stack || error.message,
            contentType: 'text/plain'
        });
        throw error; // VERY IMPORTANT
    }
}
exports.UIActions = UIActions;
