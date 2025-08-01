import { Page, Locator } from '@playwright/test';

export class SignupPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly signupSubmit: Locator;
  readonly firstNameHelper: Locator;
  readonly lastNameHelper: Locator;
  readonly usernameHelper: Locator;
  readonly passwordHelper: Locator;
  readonly confirmPasswordHelper: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.getByTestId('signup-first-name').locator('input');
    this.lastNameInput = page.getByTestId('signup-last-name').locator('input');
    this.usernameInput = page.getByTestId('signup-username').locator('input');
    this.passwordInput = page.getByTestId('signup-password').locator('input');
    this.confirmPasswordInput = page.getByTestId('signup-confirmPassword').locator('input');
    this.signupSubmit = page.getByTestId('signup-submit');
    this.firstNameHelper = page.locator('#firstName-helper-text');
    this.lastNameHelper = page.locator('#lastName-helper-text');
    this.usernameHelper = page.locator('#username-helper-text');
    this.passwordHelper = page.locator('#password-helper-text');
    this.confirmPasswordHelper = page.locator('#confirmPassword-helper-text');
  }

  async gotoSignup() {
    await this.page.goto('/signup');
  }
}