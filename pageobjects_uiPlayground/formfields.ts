import { Page, Locator } from '@playwright/test'
import { UIActions,dialogHandler,logger,TIMEOUTS } from '../utility'


const url = 'https://practice-automation.com/';

export class formFieldsPage {
   
    private readonly formfieldBtn: Locator
    private readonly name: Locator
    private readonly pwd: Locator
    private readonly milk: Locator
    private readonly coffee: Locator;
    

    constructor(private page: Page,
        private actions: UIActions,) {
      
        //this.actions=new UIActions(this.page)// inject once
        this.formfieldBtn = page.getByRole('link', { name: 'Form Fields' });
        this.name = page.getByLabel('Name', { exact: true });
        this.pwd = page.getByLabel(/^Password\s$/)
        this.milk = page.getByLabel('Milk')
        this.coffee = page.getByLabel('Coffee')
    }
    async naviagate() {
        await this.page.goto(url);
    }
    async clickformfieldBtn() {
       // await this.formfieldBtn.click();
        await this.actions.click(this.formfieldBtn,"formButton")
    }
    async namePawd() {
        //await this.name.fill("hey-sai");
        await this.actions.fill(this.name,"hey-sai","name entered")
        await this.actions.fill(this.pwd,"112233","password");
    }
    async selectCheckboxvlue(): Promise<boolean[]> {
        let verifycheckedArray: boolean[] = [];

        await this.actions.check(this.milk,"milk");
        await this.actions.check(this.coffee,"coffe");

        const milkchecked = await this.milk.isChecked();
        const coffeechecked = await this.coffee.isChecked();
        verifycheckedArray.push(milkchecked)
        verifycheckedArray.push(coffeechecked)
        return verifycheckedArray;
    }
    async uncheckBox(): Promise<boolean[]> {
        let verifyUncheck: boolean[] = [];
        await this.milk.uncheck();
        verifyUncheck.push(await this.milk.isChecked());
        return verifyUncheck;

    }
}