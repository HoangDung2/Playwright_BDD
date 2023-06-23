import { Page, Locator, expect } from '@playwright/test';
import DeleteNotification from './page/widgets/notifications/deleteNotification';
import { exec } from 'node:child_process';
export default class AssertionNotification{
    readonly page:Page;
    readonly DeleteNotification:DeleteNotification;
    readonly notificationBtn:Locator;
    readonly verifyPageNotification:Locator;
    constructor(page:Page){
        this.page=page;
        this.verifyPageNotification= page.locator("div.MuiPaper-rounded>h2.MuiTypography-gutterBottom");
        this.DeleteNotification= new DeleteNotification(page);
        this.notificationBtn=page.locator("a[data-test='sidenav-notifications']");
    }
    async clickNotification(){
        return await this.notificationBtn.click();
    }
    async verifyDeleteSuccess(){
        for(let iteam of [
            this.page.locator("div[data-test='empty-list-header']>h2"),
            this.page.locator("svg[data-name='Layer 1']")
        ]){ 
            await expect(iteam).toBeVisible();
        }
    }
    async VerifyPageNotification(){
        await expect(this.verifyPageNotification).toBeVisible();
    }
}