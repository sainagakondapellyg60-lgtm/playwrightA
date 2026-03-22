import { test, expect, Page } from '@playwright/test';
import { shopcart } from '../pageobjects/shopcart';

shopcartObj: shopcart;

test('verify modal', async ({ page }) => {

    const shopcartObj = new shopcart(page);
    await shopcartObj.navigate();
    await shopcartObj.clickOuterwear();
    const val: boolean = await shopcartObj.isProductGridVisible();
    console.log(val)
    expect.soft(val).toBeFalsy();
    await shopcartObj.addProductTocart("Android Nylon Packable Jacket")

})