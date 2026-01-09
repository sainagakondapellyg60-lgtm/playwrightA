const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pageobjects/LoginPage'); 
const { Flightsearch } = require('../../pageobjects/Flightsearch');

test("search make mytrip hotels",async({page})=> {

    const loginpage= new LoginPage(page);
    await loginpage.navigate();
    await loginpage.searchHotels();
    await loginpage.Search
});

test.only("search make mytrip flights",async({page})=> {

    const loginpage= new LoginPage(page);
    const flightsearch= new Flightsearch(page);
    await loginpage.navigate();
    await flightsearch.searchFlights();
  
});

