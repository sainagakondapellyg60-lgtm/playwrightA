const {test, expect}=require('@playwright/test');

test.only('login', async({page}) =>{
   
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
      const username=await page.locator('input#username').fill("sai123@gmail.com");
      const password=await page.locator('input#password').fill("sai@123");
      const dropdown=page.locator('select.form-control');
      await dropdown.selectOption('teach');
      await page.locator('.radiotextsty').last().click();
      await page.locator('#okayBtn').click();

     await  page.pause();
     



        //https://snippylab.com/
    });

    test('@Child windows hadl', async ({browser})=>
      {
         const context = await browser.newContext();
         const page =  await context.newPage();
         const userName = page.locator('#username');
         await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
         const documentLink = page.locator("[href*='documents-request']");
      
         const [newPage]=await Promise.all(
        [
           context.waitForEvent('page'),//listen for any new page pending,rejected,fulfilled
           documentLink.click(),
        
        ])//new page is opened
        
      
        const  text = await newPage.locator(".red").textContent();
         const arrayText = text.split("@")
         const domain =  arrayText[1].split(" ")[0]
         //console.log(domain);
         await page.locator("#username").fill(domain);
         console.log(await page.locator("#username").inputValue());
      
      })
      
      test('Playwright Special locators', async ({ page }) => {
  
    
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByPlaceholder("Password").fill("abc123");
    await page.getByRole("button", {name: 'Submit'}).click();
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    await page.getByRole("link",{name : "Shop"}).click();
    await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();
 
    //locator(css)
 
});
 