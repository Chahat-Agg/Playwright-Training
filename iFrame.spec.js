import {test, expect} from '@playwright/test'

test("handling iframe", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/frames?sublist=0")
    const frameArea=await page.frameLocator("//iframe[@class='w-full h-96']")
    const username_input=frameArea.locator("#username")
    const password_input=frameArea.locator("#password")
    await username_input.fill('admin')
    await password_input.fill('admin123')

    await expect(username_input).toHaveValue("admin")
    await frameArea.locator("#submitButton").click()
    
    await page.waitForTimeout(10000)

})

test("handling nested iframe", async({page})=>{

    await page.goto("https://demoapps.qspiders.com/ui/frames/nestedWithMultiple?sublist=3")
    const mainFrame= page.frameLocator("//iframe[@class='w-full h-96']")
    const loginFrame=await mainFrame.frameLocator("//div[@class='form_container']/iframe")

    const emailFrame=await loginFrame.frameLocator("(//div[@class='form-group']/iframe)[1]")

    const email_input=await emailFrame.locator("#email")
    email_input.fill("Admin@gmail.com")

    const email_frame_content=await email_input.textContent()
    console.log(email_frame_content)

    await expect(email_input).toHaveValue('Admin@gmail.com')
    await page.waitForTimeout(10000)
})


test("handling multiple nested iframe", async ({ page }) => {
  await page.goto("https://demoapps.qspiders.com/ui/frames/nestedWithMultiple?sublist=3");

  // Step 1: Get the main frame locator
const mainFrame = page.frameLocator("iframe.w-full.h-96");

// Step 2: Get the login frame locator inside it
const loginFrame = mainFrame.frameLocator("iframe"); // inside form_container
await page.waitForTimeout(5000);
// Step 3: Get the email frame locator inside loginFrame
const emailFrame = loginFrame.frameLocator("iframe"); // first form-group iframe
await page.waitForTimeout(5000);

// Step 5: Log the body text
console.log(frame_body);

  // Locate the input field
  const email_input = await emailFrame.locator("//input[@id='email']/parent::div")

/*
  // Fill the input
  await email_input.fill("Admin@gmail.com");

  // Get the value properly
  const email_frame_value = await email_input.inputValue().textContent();
  console.log(email_frame_value);

  // Assertion
  await expect(email_input).toHaveValue("Admin@gmail.com");
*/
  await page.waitForTimeout(5000);
});

