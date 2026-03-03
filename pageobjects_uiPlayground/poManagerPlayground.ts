import { HomepagePlayground } from './HomepagePlayground.ts';
import { clientSideDelay } from './ClientSideDelayPage.ts';
import { DynamicID } from './DynamicIDPage.ts';
import { Page } from '@playwright/test';


export class POMangerPG {
    page: Page;
    homepagePGObj: HomepagePlayground;
    DynamicIdObj: DynamicID
    clientSideDelayObj: clientSideDelay;

    constructor(page: Page) {
        this.page = page
        this.homepagePGObj = new HomepagePlayground(this.page);
        this.DynamicIdObj = new DynamicID(this.page);
        this.clientSideDelayObj = new clientSideDelay(this.page);

    }
    getHomepagePGObj() {
        return this.homepagePGObj;
    }
    getDynamicIDpageObj() {
        return this.DynamicIdObj;
    }
    getClientSideDelayObj() {
        return this.clientSideDelayObj;
    }
}
