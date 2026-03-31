"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formfields_1 = require("../../pageobjects/formfields");
const baseTest_1 = require("../../fixtures/baseTest");
const utility_1 = require("utility");
formObj: formfields_1.formfields;
(0, baseTest_1.test)('@reg @ui @SBP @checkbox verify checked', async ({ page }, testInfo) => {
    //test.skip(testInfo.title.includes('checked'), 'skipping for reports');
    const formObj = new formfields_1.formfields(page);
    utility_1.logger.info('Navigating to URL');
    await formObj.naviagate();
    await formObj.clickformfieldBtn();
    await formObj.namePawd();
    const result1 = await formObj.selectCheckboxvlue();
    utility_1.logger.info(`Checked values: ${JSON.stringify(result1)}`);
    const result = await formObj.uncheckBox();
    utility_1.logger.info(`Unchecked values: ${JSON.stringify(result)}`);
    utility_1.logger.warn('Page loaded warn');
    utility_1.logger.debug('Page loaded successfully');
    result1.forEach(val1 => {
        baseTest_1.expect.soft(val1).toBeTruthy();
    });
    result.forEach(val2 => {
        baseTest_1.expect.soft(val2).toBeFalsy();
    });
    baseTest_1.expect.soft(result1).toEqual([true, true]);
});
