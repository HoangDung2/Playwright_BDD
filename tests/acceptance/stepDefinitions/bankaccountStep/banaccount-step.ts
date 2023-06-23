import { Given, When, Then,setDefaultTimeout } from "@cucumber/cucumber";
import { Page, expect, chromium, Browser, test} from "@playwright/test";
import { Admin } from "D:/6/tests/acceptance/utils/app";
import { pageFixture } from "../../hooks/pageFixture";
setDefaultTimeout(60*1000*7);
let browser: Browser;
let page: Page;
         Given('User navigates to the application', async function () {
            await pageFixture.page.goto("http://localhost:3002/signin");
         });

         Given('Login User Name', async function () {
            let admin= new Admin(page);
            await admin.LoginPage.login("khanhkhum113","1233211");
         });
         Then('Verify Login Success', async function () {
            let admin= new Admin(page);
            await admin.LoginPage.assertionLoginPage.allElementExist();
         });

         Then('Click Icon BankAccount', async function () {
            let admin= new Admin(page);
            await admin.AssertionCreatBankAccount.createbank.clicbankAccountBtn();
         });

         Then('Verify Page BankAccount Create', async function () {
            let admin= new Admin(page);
            await admin.AssertionCreatBankAccount.allElementExits();
         });
         Then('Click Create BankAccount', async function () {
            let admin= new Admin(page);
            await admin.AssertionCreatBankAccount.createbank.clickCreat();
         }); 

         Then('User enter the BankName as {string}', async function (string) {
            let admin= new Admin(page);
            await admin.AssertionCreatBankAccount.createbank.fillbankName(string);
         });


         Then('User enter the RoutNumer as {string}', async function (string) {
            let admin= new Admin(page);
            await admin.AssertionCreatBankAccount.createbank.fillroutnumber(string);
         });


         Then('User enter the AccountNum as {string}', async function (string) {
            let admin= new Admin(page);
            await admin.AssertionCreatBankAccount.createbank.fillaccountNum(string);
         });


         When('User click Save Button', async function () {
            let admin= new Admin(page);
            await admin.AssertionCreatBankAccount.createbank.clicksaveBtn();
         });
         Then('Verify notification requid is display', async function () {
            let admin = new Admin(page);
            await admin.AssertionCreatBankAccount.allElementRequi();
          });

         Then('Verify Create Account Success', async function () {
            let admin= new Admin(page);
            await admin.AssertionCreatBankAccount.allElementExits();
         });
         Then('Verify notification requid Router & Account is max', async function () {
            let admin= new Admin(page);
            await admin.AssertionCreatBankAccount.requidaccountMax();
          });
          Then('User click RoutNumer then check notification', async function () {
            let admin= new Admin(page);
            await admin.AssertionCreatBankAccount.createbank.clickCheckRou();
          });
          Then('Verify notification requid Router & Account is least', async function () {
            let admin= new Admin(page);
            await admin.AssertionCreatBankAccount.requidaccountLeast();
          });