import { Given, When, Then,setDefaultTimeout } from "@cucumber/cucumber";
import { Page, expect, chromium, Browser, test} from "@playwright/test";
import { Admin } from "D:/6/tests/acceptance/utils/app";
import { pageFixture } from "../../hooks/pageFixture";
setDefaultTimeout(60*1000*5)
let browser: Browser;
let page: Page;
Given('User navigates to the application', async function () {
  await pageFixture.page.goto("http://localhost:3002/signin");
});
Given('User enter the username as {string}', async function (username) {
  let admin = new Admin(page);
  await admin.LoginPage.fillUsername(username);
});

Given('User enter the password as {string}', async function (password) {
  let admin = new Admin(page);
  await admin.LoginPage.fillPassword(password);
});

When('User click on the login button', async function () {
  let admin = new Admin(page);
  await admin.LoginPage.clickSigup();
});
Then('Verify username as {string} & passworld all Fill as {string}', async function (username,password) {
  let admin = new Admin(page);
  return await admin.LoginPage.verifyUserPasswordFill(username,password);
});
Then('Login should be success', async function () {
  let admin = new Admin(page);
  await admin.LoginPage.assertionLoginPage.allElementExist();
  await admin.SideMenu.assertionsAccountExist();
});
Then('Login should be failed notification username & password is invalid', async function () {
  let admin = new Admin(page);
  await admin.LoginPage.assertionLoginPage.requiredInvalid();
});
Then('Verify username unfill and password fill and Login should be failed', async function () {
  let admin = new Admin(page);
  await admin.LoginPage.assertionLoginPage.requiredUser();
});
When('Click Check Remenber', async function () {
  let admin = new Admin(page);
  await admin.LoginPage.clickCheck();
});
Then('Login should be failed notification Password must be more four characters', async function () {
  let admin = new Admin(page);
  await admin.LoginPage.assertionLoginPage.requidPass();
});