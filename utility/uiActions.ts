import { Locator, Page, test } from '@playwright/test';
import { createTestLogger, type TestLogger } from './loggerUtil';
import { TIMEOUTS } from './timeouts';


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
export class UIActions {
    constructor( private page: Page,
        private log: TestLogger = createTestLogger()) { }

    async click(locator: Locator, name: string) {
        await test.step(`Click: ${name}`, async () => {
            try {
                this.log.info(`Clicking: ${name}`);
                await locator.click();
            } catch (error: any) {
                await this.handleError(error, `Click failed: ${name}`);
            }
        });
    }

    async fill(locator: Locator, value: string, name: string) {
        await test.step(`Fill: ${name}`, async () => {
            try {
                await locator.clear();
                this.log.info(`Filling ${name} with: ${value}`);
                await locator.fill(value);

            } catch (error: any) {
                await this.handleError(error, `Fill failed: ${name}`);
            }
        });
    }

    async check(locator: Locator, name: string) {
        await test.step(`Check: ${name}`, async () => {
            try {
                this.log.info(`Checking: ${name}`);
                await locator.check();

            } catch (error: any) {
                await this.handleError(error, `Check failed: ${name}`);
            }
        });
    }

    async getText(locator: Locator, name: string): Promise<string | null> {
        return await test.step(`Get Text: ${name}`, async () => {
            try {
                const textContent = await locator.textContent();

                const text =
                    textContent && textContent.trim().length > 0
                        ? textContent
                        : await locator.inputValue();
                this.log.info(`Text from ${name}: ${text}`);
                return text ?? '';


            } catch (error: any) {
                await this.handleError(error, `GetText failed: ${name}`);
                return null;
            }
        });
    }
    /* */

    async waitForVisible(locator: Locator, name: string) {
        await test.step(`Waiting for ${name} to be visisble`, async () => {
            try {
                this.log.info(`Waiting for ${name} to be visisble`);
                await locator.waitFor({ state: 'visible', timeout: TIMEOUTS.ELEMENT_VISIBLE });
            } catch (error: any) {
                await this.handleError(error, `Waiting for failed: ${name}`);
            }
        })
    }
    /**
     *  Centralized Error Handler
     */
    private async handleError(error: any, message: string) {
        this.log.error(`${message} | Error: ${error.message}`);

        //  Attach screenshot to Allure
        await test.info().attach('Failure Screenshot', {
            body: await this.page.screenshot(),
            contentType: 'image/png'
        });

        // Attach error details
        await test.info().attach('Error Details', {
            body: error.stack || error.message,
            contentType: 'text/plain'
        });

        throw error; // VERY IMPORTANT
    }
}
