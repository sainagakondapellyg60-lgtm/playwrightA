import { Page, Locator } from '@playwright/test';


export class alertsPage{

    page:Page;
    clickAlert:Locator;

constructor(page:Page){
    this.page=page;
    this.clickAlert=page.getByRole('button',{name:'Alert'})
}



}