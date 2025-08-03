# RealWorld Playwright Tests

Playwright tests for the authentication module from the [Cypress RealWorld App](https://github.com/cypress-io/cypress-realworld-app), modul of `Playwright` extracted into a separate `/playwright` project for better dependency isolation.

---
## 📁 Test Project Structure
```
/ ← Main application (yarn dev)
/playwright/ ← Playwright test suite
├── package.json
├── playwright.config.ts
├── tests/
└── pages/
```
---

## 🚀 Running Locally

1. ### Installation of main cypress-realworld-app

To clone the repo to your local system and install dependencies, execute the following commands:

```shell
git clone https://github.com/bovsunovskiyas/realworld-playwright-tests
cd cypress-realworld-app
yarn
```

#### Mac users with M-series chips will need to prepend `PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true`.

```shell
PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true yarn install
```

### Run the app (if you have some problems with running main app on http://localhost:3000, please see README.md.bak)

```shell
yarn dev 
```

2. Install root project dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

3. Navigate to the Playwright project: 
    ```bash
    cd playwright
    ```

4. Install Playwright dependencies and required browsers:
   ```bash
   npm install --legacy-peer-deps
   npm run install-browsers
   ```

5. Run the tests:
   ```bash
   npm test
   ```

> Playwright automatically starts n`npm run dev` from the root and tests the UI at `http://localhost:3000` if you don't start main app from root folder.



## ✅ CI: GitHub Actions

Tests run automatically on `push` or `pull_request` to the `main` branch.

## 📥 Downloading the Report

1. Go to the Actions tab
2. Open the latest run
3. Report download the artifact:
📦 `playwright-report.zip`

---
## ℹ️ Useful Commands

   ```bash
   # Install Playwright dependencies
   cd playwright
   npm install
   or
   npm init playwright@latest

   # Install Playwright browsers
   npm run install-browsers

   # Run tests
   npx playwright test
   ```
---
## 📌 Tips

- Use `data-test` attributes for selectors
- Avoid hard (`waitForTimeouts`)
- Use the `Page Object` pattern to isolate UI logic
