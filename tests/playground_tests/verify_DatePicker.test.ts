import { test, expect } from '../../fixtures/pageFixtures';
import { logger } from 'utility';

const testdate = [27]
for (const date of testdate) {
    test(`@reg @smoke @ui @DM @date testing datepicker for ${date}`, async ({ page }) => {
    
        logger.info(`Selecting date: ${date}`);
        await page.goto("https://playground.bondaracademy.com/pages/forms/datepicker");
        await page.getByPlaceholder('Form Picker').click();
        let attempt = 20;
        while (attempt--) {
            const currentDate =
                await page.locator("button[class='appearance-ghost size-medium shape-rectangle icon-end status-basic nb-transition']").textContent();
            logger.debug(`Calendar heading: ${currentDate}`);
            if (currentDate?.trim() == 'February 2025') { //? means if null return undefined else call .trim()
                break;
            }
            await page.locator('.prev-month').click();
        }
        await page.locator('nb-calendar-day-cell:not(.bounding-month)')
            .filter({ hasText: new RegExp(`^\\s*${date}\\s*$`) }).first()   // avoids duplicate issue
            .click();
        const selectedDate = await page.getByPlaceholder('Form Picker').inputValue();
        //“Modern date pickers update the input’s value property dynamically using JavaScript, not the inner DOM text,
        //  so we must use inputValue() to fetch it.”
        logger.info(`Selected date value: ${selectedDate}`);
    })
}

