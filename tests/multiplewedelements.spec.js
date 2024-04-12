const { test, expect } = require('@playwright/test');

test('Locatemultipleelements',async({page})=>{
     await page.goto('https://demoblaze.com/index.html');

     const links = await page.$$('a');
     for(const link of links )
{
    const linktext= await link.textContent();
    console.log(linktext);
}
     

})