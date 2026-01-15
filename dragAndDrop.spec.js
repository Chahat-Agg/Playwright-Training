import {test, expect} from '@playwright/test'

test("drag and drop using playwright", async({page})=>{
    await page.goto("https://drag-and-drop-tricks.webflow.io/")
    
    const sourceElement= page.locator('.draggable.correct.ui-draggable.ui-draggable-handle')
    await expect (sourceElement).toBeVisible;
    const targetElement= page.locator('.quiz-option.is-drop')
    await expect (targetElement).toBeVisible;

    await sourceElement.dragTo(targetElement);
    await page.waitForTimeout(10000)

})

test("drag and drop using mouse", async({page})=>{
    await page.goto("https://drag-and-drop-tricks.webflow.io/")

    await page.locator('.draggable.correct.ui-draggable.ui-draggable-handle').hover();
    await page.mouse.down()
    await page.locator('.quiz-option.is-drop').hover()
    await page.mouse.up();
    await page.waitForTimeout(10000)
})