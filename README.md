# Introduction

Hello,

In this project, I worked with the Unlayer Studio platform to design and customize an email template. Here’s the process I followed:

1. I went to the Unlayer Studio website (https://studio.unlayer.com/create/team-member-introduction-email).
2. Added my name, Mukhtar Ahmad, to personalize the template.
3. Adjusted the font size and style to fit my preferences.
4. Clicked the Export button in the top right corner to export the design.
5. After export, the design is sent to email. To handle email scenarios, I used mailosaur library.
6. Then went to email and downloaded the exported file as a zip archive and stored it in my project folder, download_HTML.
7. Extracted the contents of the zip file into a folder named Extracted_html.
8. Opened the HTML file in a browser to view and compare the changes I made to the original template.

# Playwright Test Setup

This repository contains Playwright tests that you can run using the command line.

## Prerequisites

Ensure that you have the following installed:

- Node.js (>= 16)
- npm (Node Package Manager)

## Install below dependencies before running the project
```
npm install playwright
npm install adm-zip
npm install mailosaur
```

## Running the Tests

To run the Playwright tests, execute the following command:

```
npx playwright test tests/unlayer.spec.js --headed --project='chromium'
```

### Parameters

- `tests/unlayer.spec.js`: Path to the specific test file you want to run.
- `--headed`: This option opens the browser in headed mode, allowing you to see the browser as the test runs.
- `--project='chromium'`: Specifies that the test should run using the Chromium browser.

### Additional Commands

You can also run tests in different browsers or configurations:

- For Firefox:
  ```
  npx playwright test tests/unlayer.spec.js --headed --project='firefox'
  ```

- For Webkit:
  ```
  npx playwright test tests/unlayer.spec.js --headed --project='webkit'
  ```

## Running All Tests

To run all tests in the project:

```
npx playwright test
```

This will run all test files found in the `tests` folder.

## Troubleshooting

- If you encounter issues with missing dependencies, try running `npm install` to ensure all dependencies are installed.
- For more details on Playwright, visit the [official documentation](https://playwright.dev/).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
