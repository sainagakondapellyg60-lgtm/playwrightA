import { HomepageSA, DestinationSA } from '../pageobjects_ts/Homepagesig';
import { Homepage } from '../pageobjects_ts/Exercise';
import {Page} from '@playwright/test';


export class POManager {

    homeObj: HomepageSA;
    exerObj: Homepage;
    page: Page;


    constructor(page:Page) {
        this.page = page;
        this.homeObj = new HomepageSA(this.page);
        this.exerObj = new Homepage(this.page);
    }
    getHomePage() {
        return this.homeObj;
    }
    getHomeofExecrise() {
        return this.exerObj;
    }
    getDestinationpage(newpage:Page) {
        return new DestinationSA(newpage);
    }


} module.exports = { POManager }