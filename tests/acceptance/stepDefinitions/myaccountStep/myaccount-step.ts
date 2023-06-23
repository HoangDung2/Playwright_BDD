import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { Page, expect, chromium, Browser, test } from "@playwright/test";
import { Admin } from "D:/6/tests/acceptance/utils/app";
import { pageFixture } from "../../hooks/pageFixture";
setDefaultTimeout(60 * 1000 * 7);
let browser: Browser;
let page: Page;
Given('User navigates to the application', async function () {
    await pageFixture.page.goto("http://localhost:3002/signin");
});


Given('Login User Name', async function () {
    let admin = new Admin(page);
    await admin.LoginPage.login("khanhkhum113", "1233211");
});


Then('Verify Login Success', async function () {
    let admin = new Admin(page);
    await admin.LoginPage.assertionLoginPage.allElementExist();
});


Then('Click Icon MyAccount', async function () {
    let admin = new Admin(page);
    await admin.AssertionMyAccount.EditAccount.clickMyaccount();
});

Then('Verify Page Account', async function () {
    let admin = new Admin(page);
    await admin.AssertionMyAccount.EditAccount.VerifyPageMyaccount();

});


Then('User enter the Email as {string}', async function (email) {
    let admin = new Admin(page);
    await admin.AssertionMyAccount.EditAccount.fillEmail(email);
});


Then('User enter the Phone as {string}', async function (phone) {
    let admin = new Admin(page);
    await admin.AssertionMyAccount.EditAccount.fillPhone(phone);
});


When('User click Save Button', async function () {
    let admin = new Admin(page);
    await admin.AssertionMyAccount.EditAccount.clicksave();
});

Then('Verify notification requid Email & Phone is display', async function () {
    let admin = new Admin(page);
    await admin.AssertionMyAccount.requidemail();
    await admin.AssertionMyAccount.requidphone();
});
Then('User enter the FirstName as {string}', async function (string) {
    let admin = new Admin(page);
    await admin.AssertionMyAccount.EditAccount.fillFirstName(string);
});
Then('User enter the Lastname as {string}', async function (string) {
    let admin = new Admin(page);
    await admin.AssertionMyAccount.EditAccount.fillLastName(string);
})
Then('Verify notification requid is display', async function () {
    let admin = new Admin(page);
    await admin.AssertionMyAccount.allElementExist();
});
Then('Verify Create Account Success {string} {string}', async function (string, string2) {
    let admin = new Admin(page);
    await admin.AssertionMyAccount.EditAccount.VerifyCreateSuccess(string,string2);
  });