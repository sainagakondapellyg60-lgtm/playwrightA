"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pageFixtures_1 = require("../../fixtures/pageFixtures");
const utility_1 = require("utility");
pageFixtures_1.test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(baseURL);
});
(0, pageFixtures_1.test)('@smoke @reg @ui @DM @ID verify dynamic ID', async ({ homepage, dynamicId }) => {
    await homepage.clickHome();
    utility_1.logger.info('Starting dynamic ID flow');
    await dynamicId.navigateToDynamicID();
    const clickOne = await dynamicId.clickIDbtn();
    const clickTwo = await dynamicId.clickIDbtn();
    await pageFixtures_1.expect.soft(clickOne, 'id is not matched as expected').not.toBe(clickTwo);
    utility_1.logger.info(`Dynamic IDs captured: ${clickOne} and ${clickTwo}`);
});
