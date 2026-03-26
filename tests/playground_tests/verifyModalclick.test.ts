import { test, expect } from '../../fixtures/baseTest';
import { shopcart } from '../../pageobjects/shopcart';
import * as allure from 'allure-js-commons';

shopcartObj: shopcart;

test('@smoke @reg @ui @BTU @modal verify modal', async ({ page }, testInfo) => {
    allure.description(testInfo.title);
    const shopcartObj = new shopcart(page);
    await shopcartObj.navigate();
    await shopcartObj.clickOuterwear();
    const val: boolean = await shopcartObj.isProductGridVisible();
    console.log(val)
    expect.soft(val, 'Product grid should NOT be visible after selecting outerwear').toBeFalsy();
    await shopcartObj.addProductTocart("Android Nylon Packable Jacket")

})