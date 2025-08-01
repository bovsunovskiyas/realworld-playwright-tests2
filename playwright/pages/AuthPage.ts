import { Page, Locator } from '@playwright/test';

export class AuthPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly signinSubmit: Locator;
  readonly usernameHelper: Locator;
  readonly passwordHelper: Locator;
  readonly signinError: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByTestId('signin-username').locator('input');
    this.passwordInput = page.getByTestId('signin-password').locator('input');
    this.signinSubmit = page.getByTestId('signin-submit');
    this.usernameHelper = page.locator('#username-helper-text');
    this.passwordHelper = page.locator('#password-helper-text');
    this.signinError = page.getByTestId('signin-error');
  }

  async gotoSignin() {
    await this.page.goto('/signin');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.signinSubmit.click();
  }
}
