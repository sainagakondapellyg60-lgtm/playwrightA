const {test, expect}=require('@playwright/test');
//runs in parallel
//test.describe.configure({mode: 'parallel'});

//run serials when one test is depend on other to proceed validation
test.describe.configure({mode: 'serial'});

test('@brillio browser context playwright test check',async ({browser})=>
{
    //chrome
const context=await browser.newContext();
const page= await context.newPage();
await page.goto("https://onthego.brillio.com/");
console.log(await page.title)
await expect(page).toHaveTitle("Sign in to your account")
});

test('@outside login', async({page}) =>{
   
await page.goto("https://rahulshettyacademy.com/")
    await page.locator('a:text("Sign In")').click();
    console.log("fe")

    //https://snippylab.com/
});

