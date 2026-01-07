import { test, expect } from '@playwright/test'


test('My first test', async ({page})=>{

    //await context.tracing.start({snapshots:true, screenshots:true})

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page).toHaveTitle('OrangeHRM')
    await expect(page).toHaveURL(/.*orangehrmlive/)

    //await context.tracing.stop({path:trace})
})

const{hello1, hello2}=require('./demo/hello')
console.log (hello1());
console.log (hello2());

