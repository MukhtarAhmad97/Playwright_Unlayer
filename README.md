
# Playwright Test Setup

This repository contains Playwright tests that you can run using the command line.

## Prerequisites

Ensure that you have the following installed:

- Node.js (>= 16)
- npm (Node Package Manager)
- Playwright

If you don't have Playwright installed, you can install it by running:

```
npm install playwright
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
