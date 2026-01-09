const url="https://www.makemytrip.com/";

class Flightsearch  {   
constructor(page){
    this.page=page;
    this.Flights=page.locator('span').filter({ hasText: 'Flights' }).first();
    this.fromfield=page.locator('#fromCity');
    this.searchFromCity=page.locator('input[placeholder="From"]');
    this.Search=page.locator('a:has-text("SEARCH")')
}
async searchFlights(){
    await this.Flights.click();
    await this.fromfield.click();
    await this.searchFromCity.fill('Hyderabad');
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
   
      await Promise.all([
  this.page.waitForResponse(res =>
    res.status() === 200),
  this.Search.click()
]);
     await this.page.waitForTimeout(3000);
   }
}
module.exports={Flightsearch};
