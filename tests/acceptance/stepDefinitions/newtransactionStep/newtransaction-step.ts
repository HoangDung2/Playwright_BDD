import { Given, When, Then, setDefaultTimeout} from "@cucumber/cucumber";
import { Page, expect, chromium, Browser, test } from "@playwright/test";
import { Admin } from "D:/6/tests/acceptance/utils/app";
import { pageFixture } from "../../hooks/pageFixture";
setDefaultTimeout(60 * 1000 * 5);
let browser: Browser;
let page: Page;
Given('User navigates to the application', async function () {
    browser = await chromium.launch({headless:false});
    page = await browser.newPage();
    await page.goto("http://localhost:3002/signin");
});

Given('Login User Name', async function () {
    let admin = new Admin(page);
    await admin.LoginPage.login("khanhkhum113", "1233211");
});


Then('Verify Login Success', async function () {
    let admin = new Admin(page);
    await admin.LoginPage.assertionLoginPage.allElementExist();
});


Then('Click New Transaction', async function () {
    let admin = new Admin(page);
    await admin.AssertionNewTransaction.CreatedTransaction.clickNewBtn();
});


Then('Verify Page Transaction', async function () {
    let admin = new Admin(page);
    await admin.AssertionNewTransaction.verifyCreateTransac();
});


Then('User enter the Search Name as {string}', async function (searhname) {
    let admin = new Admin(page);
    await admin.AssertionNewTransaction.CreatedTransaction.fillsearchName(searhname);
});


When('User click choose username', async function () {
    let admin = new Admin(page);
    await admin.AssertionNewTransaction.CreatedTransaction.chooseUser();
});

When('User enter the Amount as {string}', async function (amount) {
    let admin = new Admin(page);
    await admin.AssertionNewTransaction.CreatedTransaction.fillAmount(amount);
});

When('User enter the Add a note as {string}', async function (note) {
    let admin = new Admin(page);
    await admin.AssertionNewTransaction.CreatedTransaction.fillAddNote(note)
});


When('Click choose Request', async function () {
    let admin = new Admin(page);
    await admin.AssertionNewTransaction.CreatedTransaction.ChooseRequest();
});


Then('Verify Transaction Success', async function () {
    let admin = new Admin(page);
    await admin.AssertionNewTransaction.verifyTranSuccess();
});


Then('Return to Transaction', async function () {
    let admin = new Admin(page);
    await admin.AssertionNewTransaction.CreatedTransaction.returnTransaction();
});

Then('Verify Return Transaction Success', async function () {
    let admin = new Admin(page);
    await admin.AssertionNewTransaction.verifyReturnTransaction();
});
Then('Verify Create Transaction Success', async function () {
    let admin = new Admin(page);
    await admin.AssertionNewTransaction.verifyCreateTransac();
});
Then('Verify notification requid is display', async function () {
    let admin = new Admin(page);
    await admin.AssertionNewTransaction.requidFromPayment();
});
When('Click Check Amount then notification is display', async function () {
    let admin = new Admin(page);
    await admin.AssertionNewTransaction.CreatedTransaction.clickCheckAmount();
});
Then('Create to Transaction', async function () {
    let admin = new Admin(page);
    await admin.AssertionNewTransaction.CreatedTransaction.createTransaction();
});
When('Click choose Pay', async function () {
    let admin = new Admin(page);
    await admin.AssertionNewTransaction.CreatedTransaction.ChoosePay();
});