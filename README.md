Playwright Project
This project uses Playwright for end-to-end testing. The following steps guide you through the setup and running of the project.

Prerequisites
Node.js: Ensure that Node.js (version 14 or later) is installed on your system.
Playwright: Install Playwright using npm.
bash
Copy code
npm install playwright
Setup
Clone this repository to your local machine:
bash
Copy code
git clone https://github.com/your-username/your-repo-name.git
Navigate to the project directory:
bash
Copy code
cd your-repo-name
Install the required dependencies:
bash
Copy code
npm install
Running Tests
To execute the Playwright test unlayer.spec.js in a Chromium browser, run the following command:

bash
Copy code
npx playwright test tests/unlayer.spec.js --headed --project='chromium'
Command Explanation
npx playwright test: Runs the Playwright test runner.
tests/unlayer.spec.js: Specifies the test file to run.
--headed: Runs the tests in a visible browser (headed mode).
--project='chromium': Specifies the browser to use for testing (chromium in this case).
Customizing Test Execution
Run all tests: To run all tests in the project, use:
bash
Copy code
npx playwright test
Run tests in a specific browser: Replace chromium with firefox or webkit in the command above.
View test results: After execution, detailed results will appear in the terminal. For a visual report, use:
bash
Copy code
npx playwright show-report
