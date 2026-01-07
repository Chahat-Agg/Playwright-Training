import { test, expect } from '@playwright/test'


test('Orange HRM title verification', async ({page})=>{

    //await context.tracing.start({snapshots:true, screenshots:true})

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page).toHaveTitle('OrangeHRM')
})