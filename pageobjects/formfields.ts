import { Page, Locator } from '@playwright/test'
import { verify } from 'crypto';

const url = 'https://practice-automation.com/';

export class formfields {
    private readonly page: Page
    private readonly formfieldBtn: Locator
    private readonly name: Locator
    private readonly pwd: Locator
    private readonly milk: Locator
    private readonly coffee: Locator;


    constructor(page: Page) {
        this.page = page;
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
        await this.formfieldBtn.click();
    }
    async namePawd() {
        await this.name.fill("hey-sai");
        await this.pwd.fill("112233");
    }
    async selectCheckboxvlue(): Promise<boolean[]> {
        let verifycheckedArray: boolean[] = [];

        await this.milk.check();
        await this.coffee.check();

        const milkchecked = await this.milk.isChecked();
        const coffeechecked = await this.coffee.isChecked();
        verifycheckedArray.push(milkchecked)
        verifycheckedArray.push(coffeechecked)
        return verifycheckedArray;
    }
    async uncheckBox():Promise<boolean[]> {
        let verifyUncheck: boolean[] = [];
        await this.milk.uncheck();
        verifyUncheck.push(await this.milk.isChecked());
        return verifyUncheck;

    }
}