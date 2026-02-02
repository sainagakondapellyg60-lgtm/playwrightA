const {test, expect}=require('@playwright/test');

test.only("visula testing",async({page})=>{

    await page.goto("https://www.flightaware.com/");
    expect(await page.screenshot()).toMatchSnapshot('landing.png');


})