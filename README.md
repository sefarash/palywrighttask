# Playwright Task Management Automation Project

This project contains Playwright automation scripts to validate task details in a task management application. Each test verifies the presence of specific tasks under designated columns and their associated tags. Below is a detailed guide on how to set up and run the tests.

## Prerequisites

1. **Node.js**: Ensure Node.js (v14 or later) is installed on your machine.
2. **Playwright**: Install Playwright by following the instructions below.
3. **Browser Dependencies**: Playwright automatically installs the required browser binaries during setup.

## Installation

1. Clone this repository:

   ```bash
   git clone <repository_url>
   cd <repository_folder>
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Install Playwright browsers:

   ```bash
   npx playwright install
   ```

## Test Scenarios

### 1. Validate "Implement user authentication" Task
- Verify the task is under the "To Do" column.
- Confirm the task description "Add login and signup functionality."

### 2. Verify "Fix navigation bug" Task
- Verify the task is under the "To Do" column.
- Confirm the tag "Bug."

### 3. Verify "Design system updates" Task
- Verify the task is under the "In Progress" column.
- Confirm the tag "Design."

### 4. Verify "Push notification system" Task
- Verify the task is under the "To Do" column.
- Confirm the tag "Feature."

### 5. Verify "Offline mode" Task
- Verify the task is under the "In Progress" column.
- Confirm the tags "Feature" and "High Priority."

### 6. Verify "App icon design" Task
- Verify the task is under the "Done" column.
- Confirm the tag "Design."

## Running the Tests

Run the tests using the following command:

```bash
npx playwright test
```

This command will execute all the test scripts in the `tests` folder.

### Running a Specific Test
To run a specific test, use:

```bash
npx playwright test <test_file_name>
```

For example:

```bash
npx playwright test validate-authentication.spec.js
```

## Test File Structure
Each test is structured as follows:

1. **Login:** Logs into the application using provided credentials.
2. **Column Identification:** Locates the specific column (e.g., "To Do," "In Progress," or "Done").
3. **Task Verification:** Ensures the specified task exists in the column.
4. **Tag Verification:** Confirms the task has the correct tags.

## Configuration

Update the `baseURL` or test-specific URLs in the `test.beforeEach` hook as necessary:

```javascript
await page.goto('<application_url>');
```

## Debugging Tests
To run tests in debug mode, use:

```bash
npx playwright test --debug
```

This will open the Playwright Inspector, allowing you to step through your tests.

## Reporting
Generate a report after running the tests:

```bash
npx playwright show-report
```

This will display a detailed test execution report in your browser.

## Project Notes
- All tests are written in **JavaScript** using Playwright's `test` library.
- Selectors are designed to be robust and adaptable to minor UI changes.
- Console logs are included to provide real-time feedback during test execution.

## Author
Rashad Ismayil  
Feel free to contact me for further clarifications or questions!

---
