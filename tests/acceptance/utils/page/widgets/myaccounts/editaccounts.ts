import { Page, Locator, expect } from '@playwright/test';
export default class EditAccount{
    readonly page:Page;
    readonly firstName:Locator;
    readonly lastName:Locator;
    readonly Email:Locator;
    readonly Phone:Locator;
    readonly saveBtn:Locator;
    readonly myAccountBtn:Locator;
    constructor(page:Page){
        this.page=page;
        this.firstName=page.locator("input[name='firstName']");
        this.lastName=page.locator("input[name='lastName']");
        this.Email=page.locator("input[name='email']");
        this.Phone=page.locator("input[name='phoneNumber']");
        this.saveBtn=page.locator("button[data-test='user-settings-submit']");
        this.myAccountBtn=page.locator("a[data-test='sidenav-user-settings']");
    }
    async fillFirstName(name:string){
        this.firstName.fill(name);
        await expect(this.firstName).toHaveValue(name);
    }
    async fillLastName(lastName:string){
        this.lastName.fill(lastName);   
        await expect(this.lastName).toHaveValue(lastName);
    }
    async fillEmail(email:string){
        this.Email.fill(email);
        // await expect(email).toMatch(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
        await expect(this.Email).toHaveValue(email);
    }
    async fillPhone(phone:string){
        this.Phone.fill(phone);
        await expect(this.Phone).toHaveValue(phone);
    }
    async fillEmailPhone(email:string,phone:string){
        await this.fillEmail(email);
        await this.fillPhone(phone);
    }
    async clicksave(){
        return await this.saveBtn.click();
    }
    async clickMyaccount(){
        return await this.myAccountBtn.click();
    }
    async fillFromAccount(name:string,lastName:string,email:string,phone:string){
        await this.fillFirstName(name);
        await this.fillLastName(lastName);
        await this.Email.fill(email);
        await this.fillPhone(phone);
    }
    async unfillEmaiPhone(email:string,phone:string){
        await this.Email.fill(email);
        await this.Phone.fill(phone.toString());
    }
    async VerifyPageMyaccount(){
        for(let iteam of[
            this.firstName,
            this.lastName,
            this.Email,
            this.Phone
        ]){
            await expect(iteam).toBeVisible();
        }
    }
    async VerifyCreateSuccess(email:string,phone:string){
            await expect(this.Email).toHaveValue(email);
            await expect(this.Phone).toHaveValue(phone);
 }
}