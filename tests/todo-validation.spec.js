const { test, expect } = require('@playwright/test');

test.beforeEach(async ({page}, testInfo) => {
    console.log('Running ${testInfo.title}');

    //Step 1: Navigate to the application login page
    await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');

    // Step 2: Login to the application
    await page.fill('input[id="username"]', 'admin'); // Fill the email input
    await page.fill('input[id="password"]', 'password123'); // Fill the password input
    await page.click('button:has-text("Sign In")'); // Click the Sign In button

    // Step 3: Verify successful login (optional)
  await expect(page).toHaveURL('https://animated-gingersnap-8cf7f2.netlify.app/'); // Adjust the regex based on your app's post-login URL
})

test('Validate "Implement user authentication" task is under "To Do" column', async ({ page }) => {

  

  // Step 4: Locate the "To Do" column

  const toDoColumn = page.locator('div.flex.flex-col.w-80').filter({
    has: page.locator('h2:has-text("To Do")') });

  // Step 5: Verify the task "Implement user authentication" is under "To Do" column
  const task = toDoColumn.locator('h3:has-text("Implement user authentication")');

  await expect(task).toHaveCount(1);
  await expect(task).toBeVisible();

  // Step 6: Additional assertions (optional)
  const taskDescription = task.locator('.. >> p:has-text("Add login and signup functionality")');
  await expect(taskDescription).toBeVisible();

  console.log('Test Passed: "Implement user authentication" is under the "To Do" column.');
});



test('Verify "Fix navigation bug" task is in the "To Do" column with tag "Bug"', async ({ page }) => {

 
  // Step 4: Locate the "To Do" column

  const toDoColumn = page.locator('div.flex.flex-col.w-80').filter({
    has: page.locator('h2:has-text("To Do")') });

  // Step 5: Locate the task "Fix navigation bug" under "To Do"
  const fixBugTask = toDoColumn.locator('h3:has-text("Fix navigation bug")');
  await expect(fixBugTask).toBeVisible();

  // Step 6: Confirm the tag "Bug" exists for the task
  const bugTag = fixBugTask.locator('.. >> span:has-text("Bug")');
  await expect(bugTag).toBeVisible();

  // Step 7: Optional log for success
  console.log('Test Passed: "Fix navigation bug" task is in "To Do" column with the "Bug" tag.');
});



test('Verify "Design system updates" task is in the "In Progress" column with tag "Design"', async ({ page }) => {
  
  // Step 4: Locate the "In Progress" column

  const inProgressColumn = page.locator('div.flex.flex-col.w-80').filter({
    has: page.locator('h2:has-text("In Progress")') });

  // Step 5: Locate the task "Design system updates"
  const designTask = inProgressColumn.locator('h3:has-text("Design system updates")');
  await expect(designTask).toBeVisible();

  // Step 6: Confirm the tag "Design" exists for the task
  const designTag = designTask.locator('.. >> span:has-text("Design")');
  await expect(designTag).toBeVisible();

  // Step 7: Optional logging for success
  console.log('Test Passed: "Design system updates" task is in the "In Progress" column with the "Design" tag.');
});



test('Verify "Push notification system" is in the "To Do" column with "Feature" tag', async ({ page }) => {

  // Step 3: Locate the button using its text content and click on it
  await page.click('button:has(h2:has-text("Mobile Application"))');

  // Step 4: Verify the "To Do" column contains "Push notification system"
  const todoColumnSelector = 'div:has(h2:has-text("To Do"))'; // Locate the "To Do" column
  const taskSelector = `${todoColumnSelector} h3:has-text("Push notification system")`; // Locate the specific task
  
  const taskExists = await page.isVisible(taskSelector);
  expect(taskExists).toBeTruthy(); // Ensure the task is visible in the "To Do" column

  // Step 5: Verify the task contains the tag "Feature"
  const featureTagSelector = `${taskSelector} ~ div span:has-text("Feature")`; // Locate the "Feature" tag
  const featureTagExists = await page.isVisible(featureTagSelector);
  expect(featureTagExists).toBeTruthy(); // Ensure the "Feature" tag is present

  console.log('"Push notification system" is in the "To Do" column with the "Feature" tag.');
});



test('Verify "Offline mode" is in the "In Progress" column with tags "Feature" and "High Priority"', async ({ page }) => {

  // Step 3: Locate the button using its text content and click on it
  await page.click('button:has(h2:has-text("Mobile Application"))');

  // Step 4: Verify the "In Progress" column contains "Offline mode"
  const inProgressColumnSelector = 'div:has(h2:has-text("In Progress"))'; // Locate the "In Progress" column
  const taskSelector = `${inProgressColumnSelector} h3:has-text("Offline mode")`; // Locate the specific task

  const taskExists = await page.isVisible(taskSelector);
  expect(taskExists).toBeTruthy(); // Ensure the task is visible in the "In Progress" column

  // Step 5: Verify the task contains the tags "Feature" and "High Priority"
  const featureTagSelector = `${taskSelector} ~ div span:has-text("Feature")`; // Locate the "Feature" tag
  const highPriorityTagSelector = `${taskSelector} ~ div span:has-text("High Priority")`; // Locate the "High Priority" tag

  const featureTagExists = await page.isVisible(featureTagSelector);
  const highPriorityTagExists = await page.isVisible(highPriorityTagSelector);

  expect(featureTagExists).toBeTruthy(); // Ensure the "Feature" tag is present
  expect(highPriorityTagExists).toBeTruthy(); // Ensure the "High Priority" tag is present

  console.log('"Offline mode" is in the "In Progress" column with the tags "Feature" and "High Priority".');
});


test('Verify "App icon design" is in the "Done" column with tag "Design"', async ({ page }) => {

  // Step 3: Locate the button using its text content and click on it
  await page.click('button:has(h2:has-text("Mobile Application"))');

  // Step 4: Verify the "Done" column contains "App icon design"
  const doneColumnSelector = 'div:has(h2:has-text("Done"))'; // Locate the "Done" column
  const taskSelector = `${doneColumnSelector} h3:has-text("App icon design")`; // Locate the specific task

  const taskExists = await page.isVisible(taskSelector);
  expect(taskExists).toBeTruthy(); // Ensure the task is visible in the "Done" column

  // Step 5: Verify the task contains the tag "Design"
  const designTagSelector = `${taskSelector} ~ div span:has-text("Design")`; // Locate the "Design" tag

  const designTagExists = await page.isVisible(designTagSelector);
  expect(designTagExists).toBeTruthy(); // Ensure the "Design" tag is present

  console.log('"App icon design" is in the "Done" column with the tag "Design".');
});






