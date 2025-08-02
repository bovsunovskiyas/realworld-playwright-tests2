# RealWorld Playwright Tests

Playwright tests for the authentication module from the [Cypress RealWorld App](https://github.com/cypress-io/cypress-realworld-app), modul of `Playwright` extracted into a separate `/playwright` project for better dependency isolation.

---


### Installation of main cypress-realworld-app

To clone the repo to your local system and install dependencies, execute the following commands:

```shell
git clone https://github.com/bovsunovskiyas/realworld-playwright-tests
cd realworld-playwright-tests
yarn
```

#### Mac users with M-series chips will need to prepend `PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true`.

```shell
PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true yarn install
```

### Run the app

```shell
yarn dev
```

---


## 📁 Test Project Structure
```
/ ← Main application (npm run dev)
/playwright/ ← Playwright test suite
├── package.json
├── playwright.config.ts
├── tests/
└── pages/
```

---

## 🚀 Running Locally

1. Install root project dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

2. Navigate to the Playwright project: 
    ```bash
    cd playwright
    ```

3. Install Playwright dependencies and required browsers:
   ```bash
   npm install
   npm run install-browsers
   ```

4. Run the tests:
   ```bash
   npm test
   ```


> Playwright automatically starts n`npm run dev` from the root and tests the UI at `http://localhost:3000`.



## ✅ CI: GitHub Actions

Tests run automatically on `push` or `pull_request` to the `main` branch.

### 🔨 CI Steps:

- Launch npm `run dev`
- Execute Playwright tests
- Generate a static **HTML report**
- Publish:
    - ✅ the zipped report as a GitHub Artifact
    - 🌐 the HTML report on GitHub Pages

---

## 📥 Downloading the Report

1. Go to the Actions tab
2. Open the latest run
3. Report download the artifact:
📦 `playwright-report.zip`

## 🌍 Online Report (GitHub Pages)

The report is published after every `push` to `main`:

👉 [View the report](https://bovsunovskiyas.github.io/realworld-playwright-tests2/)

> **URL will change if the repository name or username changes.**

## ℹ️ Useful Commands

```bash
# Install Playwright dependencies
cd playwright
npm install

# Install Playwright browsers
npm run install-browsers

# Run tests
npm test
```

## 📌 Tips

- Use `data-test` attributes for selectors
- Avoid hard (`waitForTimeouts`)
- Use the `Page Object` pattern to isolate UI logic



