"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
//runs in parallel
test_1.test.describe.configure({ mode: 'parallel' });
//run serials when one test is depend on other to proceed validation
//test.describe.configure({mode: 'serial'});
(0, test_1.test)('@brillio browser context playwright test check', async ({ browser }) => {
    //chrome
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://onthego.brillio.com/");
    console.log(await page.title);
    await (0, test_1.expect)(page).toHaveTitle("Sign in to your account");
});
(0, test_1.test)('@outside login', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/");
    console.log("fe");
    await page.locator('a:text("Sign In")').click();
    console.log("fe");
    //https://snippylab.com/
});
