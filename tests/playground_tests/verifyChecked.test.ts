import { test, expect } from '../../fixtures/pageFixtures';
import { logger } from 'utility';

test('@reg @ui @SBP @checkbox verify checked', async ({ formfield },testInfo) => {
 //test.skip(testInfo.title.includes('checked'), 'skipping for reports');
 
    logger.info('Navigating to URL');
    await formfield.naviagate();
    await formfield.clickformfieldBtn()
    await formfield.namePawd()
    const result1 = await formfield.selectCheckboxvlue();
    logger.info(`Checked values: ${JSON.stringify(result1)}`);
    const result = await formfield.uncheckBox()
    logger.info(`Unchecked values: ${JSON.stringify(result)}`);

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
