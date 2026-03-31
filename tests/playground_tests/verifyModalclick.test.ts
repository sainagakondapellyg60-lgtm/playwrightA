import { test, expect } from '../../fixtures/pageFixtures';
import { shopcart } from '../../pageobjects/shopcart';
import { logger } from 'utility';

shopcartObj: shopcart;

test.describe("modal testcase",()=>{
test('@smoke @reg @ui @BTU @modal verify modal', async ({ page }, testInfo) => {
    const shopcartObj = new shopcart(page);
    await shopcartObj.navigate();
    await shopcartObj.clickOuterwear();
    const val: boolean = await shopcartObj.isProductGridVisible();
    logger.info(`Product grid visible: ${val}`);
    expect.soft(val,'Product grid should NOT be visible after selecting outerwear').toBeFalsy();
    await shopcartObj.addProductTocart("Android Nylon Packable Jacket")

})})
