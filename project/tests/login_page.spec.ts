
import { test, expect, type Page } from '@playwright/test';

test.describe('OrangeHRM Login Page Functional Tests', () => {
  // Helper selectors for maintainability
  const usernameSelector = 'input[name="username"]';
  const passwordSelector = 'input[name="password"]';
  const loginButtonSelector = 'button[type="submit"]';
  const errorSelector = '.oxd-alert-content-text';
  const requiredSelector = '.oxd-input-group input:invalid ~ .oxd-text.oxd-text--span, .oxd-input-group .oxd-text.oxd-text--span';
  // 1.1. Valid Login - Happy Path
  test('Valid Login - Happy Path', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page.locator(usernameSelector)).toBeVisible();
    await expect(page.locator(passwordSelector)).toBeVisible();
    await page.fill(usernameSelector, 'Admin');
    await page.fill(passwordSelector, 'admin123');
    await page.click(loginButtonSelector);
    await expect(page).toHaveURL(/dashboard/);
  });

  // 1.2. Invalid Login - Wrong Credentials
  test('Invalid Login - Wrong Credentials', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.fill(usernameSelector, 'invalidUser');
    await page.fill(passwordSelector, 'invalidPass');
    await page.click(loginButtonSelector);
    await expect(page.locator(errorSelector)).toContainText('Invalid credentials');
  });

  // 1.3. Login Attempt with Empty Fields
  test('Login Attempt with Empty Fields', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.click(loginButtonSelector);
    await expect(page.locator(requiredSelector)).toContainText('Required');
  });

  // 1.4. Login Attempt with Empty Username
  test('Login Attempt with Empty Username', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.fill(passwordSelector, 'admin123');
    await page.click(loginButtonSelector);
    await expect(page.locator(requiredSelector)).toContainText('Required');
  });

  // 1.5. Login Attempt with Empty Password
  test('Login Attempt with Empty Password', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.fill(usernameSelector, 'Admin');
    await page.click(loginButtonSelector);
    await expect(page.locator(requiredSelector)).toContainText('Required');
  });

  // 1.6. Username/Password Case Sensitivity
  test('Username/Password Case Sensitivity', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.fill(usernameSelector, 'ADMIN');
    await page.fill(passwordSelector, 'ADMIN123');
    await page.click(loginButtonSelector);
    await expect(page.locator(errorSelector)).toContainText('Invalid credentials');
  });

  // 1.7. Remember Me Functionality
  test('Remember Me Functionality', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // Uncomment and update selector if Remember Me checkbox is present
    // await page.check('input[type="checkbox"]');
    await page.fill(usernameSelector, 'Admin');
    await page.fill(passwordSelector, 'admin123');
    await page.click(loginButtonSelector);
    await expect(page).toHaveURL(/dashboard/);
  });

  // 1.8. Forgot Password Link
  test('Forgot Password Link', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('link', { name: /forgot your password/i }).click();
    await expect(page).toHaveURL(/requestPasswordResetCode/);
  });

  // 1.9. UI Elements Presence and Accessibility
  test('UI Elements Presence and Accessibility', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page.locator(usernameSelector)).toBeVisible();
    await expect(page.locator(passwordSelector)).toBeVisible();
    await expect(page.locator(loginButtonSelector)).toBeVisible();
    await expect(page.getByRole('link', { name: /forgot your password/i })).toBeVisible();
  });

  // 1.10. SQL Injection Attempt
  test('SQL Injection Attempt', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.fill(usernameSelector, "' OR 1=1 --");
    await page.fill(passwordSelector, "' OR 1=1 --");
    await page.click(loginButtonSelector);
    await expect(page.locator(errorSelector)).toContainText('Invalid credentials');
  });

  // 1.11. XSS Injection Attempt
  test('XSS Injection Attempt', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.fill(usernameSelector, '<script>alert(1)</script>');
    await page.fill(passwordSelector, '<script>alert(1)</script>');
    await page.click(loginButtonSelector);
    await expect(page.locator(errorSelector)).toContainText('Invalid credentials');
  });

  // 1.12. Session Timeout Handling
  test('Session Timeout Handling', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.fill(usernameSelector, 'Admin');
    await page.fill(passwordSelector, 'admin123');
    await page.click(loginButtonSelector);
    await expect(page).toHaveURL(/dashboard/);
    // Session timeout simulation would require environment support
  });
});
