import { test, expect } from '../../fixtures/pageFixtures';
import { logger } from 'utility';

test('@smoke @ui @DM @button verifying the client Side delay ', async ({ page, homepage, clientsidedelay }) => {
    await page.goto('/');
    await homepage.clickHome();
    logger.info('Starting client side delay flow');
    await homepage.navigateToClientSideDelay();
    const response = await (await clientsidedelay.clickonClientDelaybtn()).getReponsefromClient();
    await expect.soft(response, 'assertion Displayed the message').toBe('Data calculated on the client side.');
    logger.info(`Client side delay response: ${response}`);
}
)
