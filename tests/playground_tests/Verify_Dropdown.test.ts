import { test, expect } from '../../fixtures/pageFixtures';


test('@reg @ui @DM @dropdown select dropdown values', async ({ page }) => {
    await page.goto("https://www.hyrtutorials.com/p/html-dropdown-elements-practice.html")
    await page.waitForLoadState('domcontentloaded');
    const dropdown = await page.locator('select#course')
    await dropdown.selectOption('net')
    await page.waitForTimeout(3000);
    await dropdown.selectOption({ label: 'Javascript' })

})

