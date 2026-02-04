const { test, expect, request } = require('@playwright/test');
const { log } = require('console');
const login_payload = { userEmail: "sainagakondapellyg60@gmail.com", userPassword: "Sai@1234" }
const order_payload = { orders: [{ country: "Cuba", productOrderedId: "6960eac0c941646b7a8b3e68" }] }

let tokenValue;
let ordernumber;

test.beforeAll(async () => {
    const apicontext = await request.newContext();
    const loginresponse = await apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data: login_payload,

        })
    expect(loginresponse.ok()).toBeTruthy();
    const loginresponseJson = await loginresponse.json();
    tokenValue = loginresponseJson.token;
    console.log(tokenValue);

    //create order    
    const orderResponse = await apicontext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
        {
            data: order_payload,
            headers: {
                'Authorization': tokenValue,
                'Content-Type': 'application/json'
            },
        })
    const orderResponseJSON = await orderResponse.json();
    ordernumber =  orderResponseJSON.orders[0];
    console.log("order number:- "+ordernumber)

})


test("check login bypassed via API test", async ({ page }) => {

    //Inject token: add a javscript to set token value in broswer
    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, tokenValue)
    console.log("launch order history page directly")
    await page.goto("https://rahulshettyacademy.com/client/#/dashboard/myorders");
    await page.pause();

}

)

/*implemt storage state
login in real and captures entire browser auth state to .json file and pass as argunment wherver needed.
Cookies (even HttpOnly)
localStorage
sessionStorage 
*/
