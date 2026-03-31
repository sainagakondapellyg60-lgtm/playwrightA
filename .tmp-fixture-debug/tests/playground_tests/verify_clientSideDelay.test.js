"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pageFixtures_1 = require("../../fixtures/pageFixtures");
const utility_1 = require("utility");
(0, pageFixtures_1.test)('@smoke @ui @DM @button verifying the client Side delay ', async ({ page, homepage, clientsidedelay }) => {
    await page.goto('/');
    await homepage.clickHome();
    utility_1.logger.info('Starting client side delay flow');
    await homepage.navigateToClientSideDelay();
    const response = await (await clientsidedelay.clickonClientDelaybtn()).getReponsefromClient();
    await pageFixtures_1.expect.soft(response, 'assertion Displayed the message').toBe('Data calculated on the client side.');
    utility_1.logger.info(`Client side delay response: ${response}`);
});
