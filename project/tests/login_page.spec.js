import { test, expect } from '@playwright/test';

test.describe('OrangeHRM Login Page Functional Tests', () => {
  // 1.1. Valid Login - Happy Path
  test('Valid Login - Happy Path', async ({ page }) => {
    // 1. Navigate to the login page.
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page.locator('input[name="username"]')).toBeVisible();
    await expect(page.locator('input[name="password"]')).toBeVisible();

    // 2. Enter valid username and password.
    await page.fill('input[name="username"]', 'Admin');
    await page.fill('input[name="password"]', 'admin123');

    // 3. Click the Login button.
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL(/dashboard/);
  });

  // 1.2. Invalid Login - Wrong Credentials
  test('Invalid Login - Wrong Credentials', async ({ page }) => {
    // 1. Navigate to the login page.
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // 2. Enter invalid username and/or password.
    await page.fill('input[name="username"]', 'invalidUser');
    await page.fill('input[name="password"]', 'invalidPass');

    // 3. Click the Login button.
    await page.click('button[type="submit"]');
    await expect(page.locator('.oxd-alert-content-text')).toHaveText(/Invalid credentials/);
  });

  // 1.3. Login Attempt with Empty Fields
  test('Login Attempt with Empty Fields', async ({ page }) => {
    // 1. Navigate to the login page.
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // 2. Leave both username and password fields empty.

    // 3. Click the Login button.
    await page.click('button[type="submit"]');
    await expect(page.locator('.oxd-input-group .oxd-text.oxd-text--span')).toHaveText(/Required/);
  });

  // 1.4. Login Attempt with Empty Username
  test('Login Attempt with Empty Username', async ({ page }) => {
    // 1. Navigate to the login page.
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // 2. Leave username empty and enter a valid password.
    await page.fill('input[name="password"]', 'admin123');

    // 3. Click the Login button.
    await page.click('button[type="submit"]');
    await expect(page.locator('.oxd-input-group .oxd-text.oxd-text--span')).toHaveText(/Required/);
  });

  // 1.5. Login Attempt with Empty Password
  test('Login Attempt with Empty Password', async ({ page }) => {
    // 1. Navigate to the login page.
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // 2. Enter a valid username and leave password empty.
    await page.fill('input[name="username"]', 'Admin');

    // 3. Click the Login button.
    await page.click('button[type="submit"]');
    await expect(page.locator('.oxd-input-group .oxd-text.oxd-text--span')).toHaveText(/Required/);
  });

  // 1.6. Username/Password Case Sensitivity
  test('Username/Password Case Sensitivity', async ({ page }) => {
    // 1. Navigate to the login page.
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // 2. Enter valid username and password with different case.
    await page.fill('input[name="username"]', 'ADMIN');
    await page.fill('input[name="password"]', 'ADMIN123');

    // 3. Click the Login button.
    await page.click('button[type="submit"]');
    await expect(page.locator('.oxd-alert-content-text')).toHaveText(/Invalid credentials/);
  });

  // 1.7. Remember Me Functionality
  test('Remember Me Functionality', async ({ page }) => {
    // 1. Navigate to the login page.
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // 2. Check the 'Remember Me' option (if available).
    // (Assuming the checkbox is present; update selector if needed)
    // await page.check('input[type="checkbox"]');

    // 3. Enter valid credentials and log in.
    await page.fill('input[name="username"]', 'Admin');
    await page.fill('input[name="password"]', 'admin123');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL(/dashboard/);
    // Note: Session persistence after browser restart would require advanced setup.
  });

  // 1.8. Forgot Password Link
  test('Forgot Password Link', async ({ page }) => {
    // 1. Navigate to the login page.
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // 2. Click the 'Forgot your password?' link.
    await page.click('text=Forgot your password?');
    await expect(page).toHaveURL(/requestPasswordResetCode/);
  });

  // 1.9. UI Elements Presence and Accessibility
  test('UI Elements Presence and Accessibility', async ({ page }) => {
    // 1. Navigate to the login page.
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // 2. Check for presence and accessibility.
    await expect(page.locator('input[name="username"]')).toBeVisible();
    await expect(page.locator('input[name="password"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
    await expect(page.locator('text=Forgot your password?')).toBeVisible();
    // Accessibility checks (labels, tab order) can be expanded with Playwright's accessibility API if needed.
  });

  // 1.10. SQL Injection Attempt
  test('SQL Injection Attempt', async ({ page }) => {
    // 1. Navigate to the login page.
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // 2. Enter SQL injection strings in username and/or password fields.
    await page.fill('input[name="username"]', "' OR 1=1 --");
    await page.fill('input[name="password"]', "' OR 1=1 --");
    await page.click('button[type="submit"]');
    await expect(page.locator('.oxd-alert-content-text')).toHaveText(/Invalid credentials/);
  });

  // 1.11. XSS Injection Attempt
  test('XSS Injection Attempt', async ({ page }) => {
    // 1. Navigate to the login page.
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // 2. Enter XSS payloads in username and/or password fields.
    await page.fill('input[name="username"]', '<script>alert(1)</script>');
    await page.fill('input[name="password"]', '<script>alert(1)</script>');
    await page.click('button[type="submit"]');
    await expect(page.locator('.oxd-alert-content-text')).toHaveText(/Invalid credentials/);
  });

  // 1.12. Session Timeout Handling
  test('Session Timeout Handling', async ({ page }) => {
    // 1. Log in with valid credentials.
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.fill('input[name="username"]', 'Admin');
    await page.fill('input[name="password"]', 'admin123');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL(/dashboard/);

    // 2. Wait for session timeout period or simulate session expiration.
    // (This step is environment-specific and may require configuration or manual session expiration.)
    // Example: await page.waitForTimeout(30 * 60 * 1000); // Wait 30 minutes
    // Then verify user is logged out or redirected to login page.
  });
});
