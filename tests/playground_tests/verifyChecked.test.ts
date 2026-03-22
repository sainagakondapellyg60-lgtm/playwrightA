import { Page, expect, test } from '@playwright/test'
import { formfields } from '../../pageobjects/formfields';
formObj: formfields
test('verify checked', async ({ page }) => {

    const formObj = new formfields(page);
    await formObj.naviagate();
    await formObj.clickformfieldBtn()
    await formObj.namePawd()
    const result1=await formObj.selectCheckboxvlue();
    console.log(result1);
    const result=await formObj.uncheckBox()
    console.log(result);

    result1.forEach(val1=>{
        expect.soft(val1).toBeTruthy();
    })
    result.forEach(valu=>{
        expect.soft(valu).toBeFalsy();
    })
})