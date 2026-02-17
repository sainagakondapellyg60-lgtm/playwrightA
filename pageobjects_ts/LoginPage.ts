import {Locator, Page} from '@playwright/test';
const url="https://www.makemytrip.com/";

export class LoginPage{

page:Page;
Hotels:Locator;
Search:Locator;
    constructor(page:Page){
         this.page=page;
                
                this.Hotels=page.locator('span').filter({ hasText: 'Hotels' }).first();
                this.Search=page.getByRole('button',{name:'Search'});
               
    }
    async navigate(){
        await this.page.goto(url)
    }

    async searchHotels(){
       
        await this.Hotels.click();
        await this.Search.click();

    }

}
module.exports={LoginPage};