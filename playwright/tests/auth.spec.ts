import { expect } from '@playwright/test';
import { AuthPage } from '../pages/AuthPage';
import { SignupPage } from '../pages/SignupPage';
import { test } from '../tests/fixtures';

//  const baseURL = 'http://localhost:3000';

test.describe('User Sign-up and Login', () => {
  test('should redirect unauthenticated user to signin page', async ({ page }) => {
    await page.goto('/personal');
    await expect(page).toHaveURL('/signin');
  });

  test('should display login errors', async ({ authPage }) => {
    // const authPage = new AuthPage(page);
    await authPage.gotoSignin();

    await authPage.usernameInput.type('User');
    await authPage.usernameInput.fill('');
    await authPage.usernameInput.blur();
    await expect(authPage.usernameHelper).toBeVisible();
    await expect(authPage.usernameHelper).toContainText('Username is required');

    await authPage.passwordInput.type('abc');
    await authPage.passwordInput.blur();
    await expect(authPage.passwordHelper).toContainText('Password must contain at least 4 characters');

    await expect(authPage.signinSubmit).toBeDisabled();
  });

  test('should display signup errors', async ({ signupPage }) => {
    // const signupPage = new SignupPage(page);
    await signupPage.gotoSignup();

    await signupPage.firstNameInput.type('First');
    await signupPage.firstNameInput.fill('');
    await signupPage.firstNameInput.blur();
    await expect(signupPage.firstNameHelper).toContainText('First Name is required');

    await signupPage.lastNameInput.type('Last');
    await signupPage.lastNameInput.fill('');
    await signupPage.lastNameInput.blur();
    await expect(signupPage.lastNameHelper).toContainText('Last Name is required');

    await signupPage.usernameInput.type('User');
    await signupPage.usernameInput.fill('');
    await signupPage.usernameInput.blur();
    await expect(signupPage.usernameHelper).toContainText('Username is required');

    await signupPage.passwordInput.type('password');
    await signupPage.passwordInput.fill('');
    await signupPage.passwordInput.blur();
    await expect(signupPage.passwordHelper).toContainText('Enter your password');

    await signupPage.confirmPasswordInput.type('DIFFERENT PASSWORD');
    await signupPage.confirmPasswordInput.blur();
    await expect(signupPage.confirmPasswordHelper).toContainText('Password does not match');

    await expect(signupPage.signupSubmit).toBeDisabled();
  });

  test('should error for invalid user', async ({ authPage }) => {
    // const authPage = new AuthPage(page);
    await authPage.gotoSignin();
    await authPage.usernameInput.fill('invalidUserName');
    await authPage.passwordInput.fill('invalidPa$$word');
    await authPage.signinSubmit.click();
    await expect(authPage.signinError).toHaveText('Username or password is invalid');
  });

// Should fail, because it test whith invalid errorHelper text
test('should fail this test', async ({ authPage }) => {
    //  const authPage = new AuthPage(page);
    await authPage.gotoSignin();

    await authPage.usernameInput.type('User');
    await authPage.usernameInput.fill('');
    await authPage.usernameInput.blur();
    await expect(authPage.usernameHelper).toBeVisible();
    await expect(authPage.usernameHelper).toContainText('Username are required');

    await authPage.passwordInput.type('abc');
    await authPage.passwordInput.blur();
    await expect(authPage.passwordHelper).toContainText('Password must contain at least 4 characters');

    await expect(authPage.signinSubmit).toBeDisabled();
  });

});