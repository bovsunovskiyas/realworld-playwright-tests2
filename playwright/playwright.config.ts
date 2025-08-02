import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000, // 30s timeout for each test
  retries: process.env.CI ? 1 : 0, // retry once in CI
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  
  use: {
    baseURL: 'http://localhost:3000',
    testIdAttribute: 'data-test',
    // trace: 'on-first-retry',
    // screenshot: 'only-on-failure',
    // video: 'retain-on-failure',

    // on for debugging purposes
    trace: 'on',         
    screenshot: 'on',    
    video: 'on',         

  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

webServer: {
    command: 'npm run dev',
    port: 3000,
    timeout: 120 * 1000, // wait up to 2 minutes
    reuseExistingServer: !process.env.CI, // do not restart locally
    cwd: '../', // важливо: запускаємо з кореня, бо там npm run dev
  },
});
