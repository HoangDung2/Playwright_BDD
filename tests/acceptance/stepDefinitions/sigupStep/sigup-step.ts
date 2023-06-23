import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { Page, expect, chromium, Browser, test } from "@playwright/test";
import { Admin } from "D:/6/tests/acceptance/utils/app";
import { pageFixture } from "../../hooks/pageFixture";
let browser:Browser;
let page:Page;
setDefaultTimeout(60*1000*5)
Given('User navigates to the application', async function () {
  await pageFixture.page.goto("http://localhost:3002/signup");
});

Given('User enter the firstname as {string}', async function (firstname) {
    let admin= new Admin(page);
    await admin.Sigup.fillFirstname(firstname);
});


Given('User enter the lastname as {string}', async function (lastname) {
    let admin= new Admin(page);
    await admin.Sigup.fillLastname(lastname);
});


Given('User enter the username as {string}', async function (username) {
    let admin= new Admin(page);
    await admin.Sigup.fillUsername(username);
});


Given('User enter the password as {string}', async function (password) {
    let admin= new Admin(page);
    await admin.Sigup.fillPassword(password);
});

Given('User enter the confirmPassword as {string}', async function (confirmPassword) {
    let admin= new Admin(page);
    await admin.Sigup.fillConfirmPass(confirmPassword);
});
Given('Click PassWord then check string empty', async function () {
    let admin= new Admin(page);
    await admin.Sigup.clickPasswordIP();
});

Then('Verify from sigup all Fill {string} {string} {string} {string} {string}', async function (firstname,lastname,username,password,confirmPassword) {
    let admin= new Admin(page);
    await admin.Sigup.assertionSigupPage.allElementExits(firstname,lastname,username,password,confirmPassword);
});
When('User click on the Sigup button', async function () {
    let admin= new Admin(page);
    await admin.Sigup.clickSigup();
});

Then('Verify sigup should be succes', async function () {
    let admin= new Admin(page);
    await admin.Sigup.assertionSigupPage.allElementHidden();
});
Then('Sigup should be faild notification Password must contain at least four characters', async function () {
    let admin= new Admin(page);
    await admin.Sigup.assertionSigupPage.requidPassWordLength();
});
Then('Fill all from sigup & ConfirmPassWord not match', async function () {
    let admin= new Admin(page);
    await admin.Sigup.assertionSigupPage.requidConfirmNotMatch();
});
Then('Sigup should be faild notifacation all fiel requid', async function () {
    let admin= new Admin(page);
    await admin.Sigup.assertionSigupPage.allElementExistRequid();
})