import { test, expect } from '../../fixtures/pageFixtures';
import { logger } from 'utility';

test('@reg @ui @SBP @alert verify dialogs', async ({ page, alerts },testInfo) => {
    test.skip(testInfo.title.includes('dialogs'), 'skipping for reports');
    await page.goto('/');
    logger.info('Starting alerts flow');
    await alerts.navigateToAlerts();

    const [dialogInfo] = await alerts.handlePrompt();
    await alerts.handleConfirm();
    await alerts.handleAlert();
    await expect.soft(dialogInfo.type).toBe('prompt');
    logger.info('Completed alerts flow');

})
