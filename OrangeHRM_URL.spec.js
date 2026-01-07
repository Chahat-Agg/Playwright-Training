import  {test,expect} from '@playwright/test';

test('Orange HRM URL verification', async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page).toHaveURL(/.*orangehrmlive/)
})