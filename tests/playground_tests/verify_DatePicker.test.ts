import { Page, test, expect } from '@playwright/test'

const testdate = [27]
for (const date of testdate) {
    test(`testing datepicker for ${date}`, async ({ page }) => {
        console.log(date);
        await page.goto("https://playground.bondaracademy.com/pages/forms/datepicker");
        await page.getByPlaceholder('Form Picker').click();
        let attempt = 20;
        while (attempt--) {
            const currentDate =
                await page.locator("button[class='appearance-ghost size-medium shape-rectangle icon-end status-basic nb-transition']").textContent();
            console.log(currentDate)
            if (currentDate?.trim() == 'February 2025') {
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
        console.log(selectedDate)
    })
}

