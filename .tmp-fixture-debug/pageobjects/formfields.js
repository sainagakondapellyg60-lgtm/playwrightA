"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formfields = void 0;
const url = 'https://practice-automation.com/';
class formfields {
    constructor(page) {
        this.page = page;
        //this.actions=new UIActions(this.page)// inject once
        this.formfieldBtn = page.getByRole('link', { name: 'Form Fields' });
        this.name = page.getByLabel('Name', { exact: true });
        this.pwd = page.getByLabel(/^Password\s$/);
        this.milk = page.getByLabel('Milk');
        this.coffee = page.getByLabel('Coffee');
    }
    async naviagate() {
        await this.page.goto(url);
    }
    async clickformfieldBtn() {
        // await this.formfieldBtn.click();
        await this.actions.click(this.formfieldBtn, "formButton");
    }
    async namePawd() {
        //await this.name.fill("hey-sai");
        await this.actions.fill(this.name, "hey-sai", "name entered");
        await this.pwd.fill("112233");
    }
    async selectCheckboxvlue() {
        let verifycheckedArray = [];
        await this.milk.check();
        await this.coffee.check();
        const milkchecked = await this.milk.isChecked();
        const coffeechecked = await this.coffee.isChecked();
        verifycheckedArray.push(milkchecked);
        verifycheckedArray.push(coffeechecked);
        return verifycheckedArray;
    }
    async uncheckBox() {
        let verifyUncheck = [];
        await this.milk.uncheck();
        verifyUncheck.push(await this.milk.isChecked());
        return verifyUncheck;
    }
}
exports.formfields = formfields;
