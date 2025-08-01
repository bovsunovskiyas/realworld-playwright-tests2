import { test as base } from '@playwright/test';
import { AuthPage } from '../pages/AuthPage';
import { SignupPage } from '../pages/SignupPage';

type Fixtures = {
  authPage: AuthPage;
  signupPage: SignupPage;
};

export const test = base.extend<Fixtures>({
  authPage: async ({ page }, use) => {
    await use(new AuthPage(page));
  },
  signupPage: async ({ page }, use) => {
    await use(new SignupPage(page));
  },
});
