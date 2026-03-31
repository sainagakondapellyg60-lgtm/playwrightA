"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomepagePlayground = void 0;
class HomepagePlayground {
    constructor(page, actions) {
        this.page = page;
        this.actions = actions;
        this.homePage = page.getByText('UITAP');
        this.title = page.locator('#title');
        this.dynamicID = page.locator('a[href="/dynamicid"]');
        this.classAttribute = page.getByRole('link', { name: 'Class Attribute' });
        this.hiddenLayers = page.getByRole('link', { name: ' Hidden Layers' });
        this.loadDelay = page.getByRole('link', { name: 'Load Delay' });
        this.ajaxData = page.locator('a[href="/ajax"]');
        this.clientSideDelay = page.getByRole('link', { name: 'Client Side Delay' });
        this.click = page.getByRole('heading', { name: 'Click' });
        this.TextInput = page.locator('a[href="/textinput"]');
        this.scrollbars = page.locator('a[href="/scrollbars"]');
        this.dynamicTable = page.locator('a[href="/dynamictable"]');
        this.verifyText = page.locator('a[href="/verifytext"]');
        this.progressBar = page.locator('a[href="/progressbar"]');
        this.visiblity = page.locator('a[href="/visibility"]');
        this.sampleApp = page.locator('a[href="/sampleapp"]');
        this.mouseOver = page.locator('a[href="/mouseover"]');
        this.non_Breaking = page.locator('a[href="/bssp"]');
        this.overlappedElement = page.locator('a[href="/overlapped"]');
        this.shadowDom = page.locator('a[href="/shadowdom"]');
        this.Alert = page.getByRole('link', { name: 'Alerts' });
        this.fileupload = page.locator('a[href="/upload"]');
        this.amimatedBtn = page.locator('a[href="/animated"]');
        this.disabledInput = page.locator('a[href="/disabledinput"]');
        this.frames = page.locator('a[href="/frames"]');
    }
    async clickHome() {
        await this.actions.click(this.homePage, 'homepage link');
    }
    // async navigateToDynamicID(){
    //     await this.dynamicID.click();
    //    return new DynamicID(this.page);
    // }
    async navigateToClientSideDelay() {
        await this.actions.click(this.clientSideDelay, 'Client delay button');
    }
    async navigateToAlerts() {
        await this.actions.click(this.Alert, 'Alert link');
    }
}
exports.HomepagePlayground = HomepagePlayground;
