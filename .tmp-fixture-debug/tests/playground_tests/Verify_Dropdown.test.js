"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseTest_1 = require("../../fixtures/baseTest");
(0, baseTest_1.test)('@reg @ui @DM @dropdown select dropdown values', async ({ page }) => {
    await page.goto("https://www.hyrtutorials.com/p/html-dropdown-elements-practice.html");
    await page.waitForLoadState('domcontentloaded');
    const dropdown = await page.locator('select#course');
    await dropdown.selectOption('net');
    await page.waitForTimeout(3000);
    await dropdown.selectOption({ label: 'Javascript' });
});
