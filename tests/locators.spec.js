const { test, expect } = require('@playwright/test');
test('Locators',async({page})=>{
     await page.goto('https://demoblaze.com/index.html');
//click logind button-property
await page.locator('id=login2').click();

//provide user name css
await page.locator ('#loginusername').fill("pavanol");
// provide password
await page.locator ('id=loginpassword').fill("test@123");

//click button
await page.click ("button[onclick='logIn()']");


const logoutlink= await page.locator ("(//a[normalize-space()='Log out'])[1]");
await expect(logoutlink).toBeVisible();
await page.close();
})
