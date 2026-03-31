"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pageFixtures_1 = require("../../fixtures/pageFixtures");
const utility_1 = require("utility");
(0, pageFixtures_1.test)('@reg @ui @SBP @alert verify dialogs', async ({ page, alerts }, testInfo) => {
    pageFixtures_1.test.skip(testInfo.title.includes('dialogs'), 'skipping for reports');
    await page.goto('/');
    utility_1.logger.info('Starting alerts flow');
    await alerts.navigateToAlerts();
    const [dialogInfo] = await alerts.handlePrompt();
    await alerts.handleConfirm();
    await alerts.handleAlert();
    await pageFixtures_1.expect.soft(dialogInfo.type).toBe('prompt');
    utility_1.logger.info('Completed alerts flow');
});
