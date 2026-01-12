import {test, expect} from '@playwright/test'
test ("multiple select values from dropdown", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1");
    //await page.locator("//select[@id='select-multiple-native']").selectOption(['Fjallraven - Foldsac...','Mens Casual Slim Fit...']);
    await page.locator ("//select[@id='select-multiple-native']").selectOption([{index:2}, {index:5}, {index:9}]);
    await page.locator("//button[text()='Add']").click();
    await page.waitForTimeout(5000);
})