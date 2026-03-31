import { test, expect } from '../../fixtures/pageFixtures';
import { logger } from 'utility';


test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(baseURL!);

})

test('@smoke @reg @ui @DM @ID verify dynamic ID', async ({ homepage, dynamicId }) => {
    await homepage.clickHome();
    logger.info('Starting dynamic ID flow');
    await dynamicId.navigateToDynamicID();
    const clickOne = await dynamicId.clickIDbtn();

    const clickTwo = await dynamicId.clickIDbtn();

    await expect.soft(clickOne,'id is not matched as expected').not.toBe(clickTwo);
    logger.info(`Dynamic IDs captured: ${clickOne} and ${clickTwo}`);


}

)
