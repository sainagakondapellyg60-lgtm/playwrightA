import { Page, Locator } from '@playwright/test';
import { DynamicID } from './DynamicIDPage';
import {clientSideDelayPage} from './ClientSideDelayPage';
const url = "http://www.uitestingplayground.com/";

export class HomepagePlayground {

    page: Page;
    title: Locator;
    dynamicID: Locator;
    classAttribute: Locator;
    hiddenLayers: Locator;
    loadDelay: Locator;
    ajaxData: Locator;
    clientSideDelay: Locator;
    click: Locator;
    TextInput: Locator;
    scrollbars: Locator;
    dynamicTable: Locator;
    verifyText: Locator;
    progressBar: Locator;
    visiblity: Locator;
    sampleApp: Locator;
    mouseOver: Locator;
    non_Breaking: Locator;
    overlappedElement: Locator;
    shadowDom: Locator;
    Alert: Locator;
    fileupload: Locator;
    amimatedBtn: Locator;
    disabledInput: Locator;
    frames: Locator;
    homePage:Locator;


    constructor(page: Page) {
        this.page = page;
        this.homePage=page.getByText('UITAP');
        this.title = page.locator('#title');
        this.dynamicID = page.locator('a[href="/dynamicid"]');
        this.classAttribute = page.getByRole('link',{ name : 'Class Attribute'});
        this.hiddenLayers = page.getByRole('link',{name :' Hidden Layers'});
        this.loadDelay = page.getByRole('link',{name:'Load Delay'});
        this.ajaxData = page.locator('a[href="/ajax"]');
        this.clientSideDelay = page.getByRole('link',{name:'Client Side Delay'});
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
        this.Alert = page.getByRole('link', {name:'Alerts'});
        this.fileupload = page.locator('a[href="/upload"]');
        this.amimatedBtn = page.locator('a[href="/animated"]');
        this.disabledInput = page.locator('a[href="/disabledinput"]');
        this.frames = page.locator('a[href="/frames"]');

    }

    async launchURL(){
        await this.page.goto(url);
        return this;
    }
    async clickHome(){
        await this.homePage.click();
    }

    async navigateToDynamicID(){
        await this.dynamicID.click();
       return new DynamicID(this.page);
       
    }
     async navigateToClientSideDelay(){
        await this.clientSideDelay.click();
       return new clientSideDelayPage(this.page);
       
    }
    async navigateToAlerts(){
        await this.Alert.click();
        
    }
}