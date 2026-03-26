import { formfields } from '../../pageobjects/formfields';
import { test, expect } from '../../fixtures/baseTest';
import * as allure from 'allure-js-commons';
import { logger } from '../../utility/loggerUtil'

formObj: formfields
test('@reg  @ui @SBP @checkbox verify checked', async ({ page },testInfo) => {
 //test.skip(testInfo.title.includes('checked'), 'skipping for reports');
    const formObj = new formfields(page);
    logger.info('Navigating to URL');
    await formObj.naviagate();
    await formObj.clickformfieldBtn()
    await formObj.namePawd()
    const result1 = await formObj.selectCheckboxvlue();
    console.log(result1);
    const result = await formObj.uncheckBox()
    console.log(result);

  logger.warn('Page loaded warn');
  logger.debug('Page loaded successfully');
    
    result1.forEach(val1 => {
        expect.soft(val1).toBeTruthy();

    })
    result.forEach(val2 => {
        expect.soft(val2).toBeFalsy();
    })
    expect.soft(result1).toEqual([true, true]);
})