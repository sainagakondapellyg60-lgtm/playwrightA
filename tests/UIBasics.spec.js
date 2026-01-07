const {test, expect}=require('@playwright/test');

test('browser context playwright test check',async ({browser})=>
{
    //chrome
const context=await browser.newContext();
const page= await context.newPage();
await page.goto("https://onthego.brillio.com/dashboard/timesheet/apply-timesheet");
console.log(await page.title)
await expect(page).toHaveTitle("Sign in to your account")
});

test('login', async({page}) =>{
   
await page.goto("https://rahulshettyacademy.com/")
    await page.locator('a:text("Sign In")').click();
    console.log("fe")

    //https://snippylab.com/
});

