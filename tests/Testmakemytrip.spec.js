const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pageobjects/LoginPage'); 

test("search make mytrip hotels",async({page})=> {

    const loginpage= new LoginPage(page);
    await loginpage.navigate();
    await loginpage.searchHotels();
    await loginpage.Search
});