"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseTest_1 = require("../../fixtures/baseTest");
const shopcart_1 = require("../../pageobjects/shopcart");
const utility_1 = require("utility");
shopcartObj: shopcart_1.shopcart;
baseTest_1.test.describe("modal testcase", () => {
    (0, baseTest_1.test)('@smoke @reg @ui @BTU @modal verify modal', async ({ page }, testInfo) => {
        const shopcartObj = new shopcart_1.shopcart(page);
        await shopcartObj.navigate();
        await shopcartObj.clickOuterwear();
        const val = await shopcartObj.isProductGridVisible();
        utility_1.logger.info(`Product grid visible: ${val}`);
        baseTest_1.expect.soft(val, 'Product grid should NOT be visible after selecting outerwear').toBeFalsy();
        await shopcartObj.addProductTocart("Android Nylon Packable Jacket");
    });
});
