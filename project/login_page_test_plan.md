# OrangeHRM Login Page Test Plan

## Application Overview

This test plan covers comprehensive scenarios for the login page of https://opensource-demo.orangehrmlive.com/web/index.php/auth/login. It includes positive, negative, edge, and validation cases to ensure robust authentication and user experience.

## Test Scenarios

### 1. Login Page Functional Tests

**Seed:** ``

#### 1.1. Valid Login - Happy Path

**File:** `project/login/happy_path.spec.ts`

**Steps:**
  1. Navigate to the login page.
    - expect: Login page loads successfully with username and password fields visible.
  2. Enter valid username and password.
    - expect: Fields accept input.
  3. Click the Login button.
    - expect: User is redirected to the dashboard/home page.

#### 1.2. Invalid Login - Wrong Credentials

**File:** `project/login/invalid_credentials.spec.ts`

**Steps:**
  1. Navigate to the login page.
    - expect: Login page loads successfully.
  2. Enter invalid username and/or password.
    - expect: Fields accept input.
  3. Click the Login button.
    - expect: Error message 'Invalid credentials' is displayed.

#### 1.3. Login Attempt with Empty Fields

**File:** `project/login/empty_fields.spec.ts`

**Steps:**
  1. Navigate to the login page.
    - expect: Login page loads successfully.
  2. Leave both username and password fields empty.
    - expect: Fields remain empty.
  3. Click the Login button.
    - expect: Validation messages for required fields are displayed.

#### 1.4. Login Attempt with Empty Username

**File:** `project/login/empty_username.spec.ts`

**Steps:**
  1. Navigate to the login page.
    - expect: Login page loads successfully.
  2. Leave username empty and enter a valid password.
    - expect: Password field accepts input.
  3. Click the Login button.
    - expect: Validation message for required username is displayed.

#### 1.5. Login Attempt with Empty Password

**File:** `project/login/empty_password.spec.ts`

**Steps:**
  1. Navigate to the login page.
    - expect: Login page loads successfully.
  2. Enter a valid username and leave password empty.
    - expect: Username field accepts input.
  3. Click the Login button.
    - expect: Validation message for required password is displayed.

#### 1.6. Username/Password Case Sensitivity

**File:** `project/login/case_sensitivity.spec.ts`

**Steps:**
  1. Navigate to the login page.
    - expect: Login page loads successfully.
  2. Enter valid username and password with different case (e.g., uppercase/lowercase).
    - expect: Fields accept input.
  3. Click the Login button.
    - expect: Login fails and error message is displayed if credentials are case-sensitive.

#### 1.7. Remember Me Functionality

**File:** `project/login/remember_me.spec.ts`

**Steps:**
  1. Navigate to the login page.
    - expect: Login page loads successfully.
  2. Check the 'Remember Me' option (if available).
    - expect: Checkbox can be selected.
  3. Enter valid credentials and log in.
    - expect: User is logged in and session persists after browser restart (if feature is implemented).

#### 1.8. Forgot Password Link

**File:** `project/login/forgot_password.spec.ts`

**Steps:**
  1. Navigate to the login page.
    - expect: Login page loads successfully.
  2. Click the 'Forgot your password?' link.
    - expect: User is redirected to the password recovery page.

#### 1.9. UI Elements Presence and Accessibility

**File:** `project/login/ui_elements.spec.ts`

**Steps:**
  1. Navigate to the login page.
    - expect: Username and password fields, login button, and 'Forgot your password?' link are visible and accessible.
  2. Check for accessibility attributes (labels, tab order, etc.).
    - expect: All elements are accessible via keyboard and screen readers.

#### 1.10. SQL Injection Attempt

**File:** `project/login/sql_injection.spec.ts`

**Steps:**
  1. Navigate to the login page.
    - expect: Login page loads successfully.
  2. Enter SQL injection strings in username and/or password fields (e.g., ' OR 1=1 --).
    - expect: Login fails and error message is displayed. No sensitive information is leaked.

#### 1.11. XSS Injection Attempt

**File:** `project/login/xss_injection.spec.ts`

**Steps:**
  1. Navigate to the login page.
    - expect: Login page loads successfully.
  2. Enter XSS payloads in username and/or password fields (e.g., <script>alert(1)</script>).
    - expect: Login fails and no script is executed.

#### 1.12. Session Timeout Handling

**File:** `project/login/session_timeout.spec.ts`

**Steps:**
  1. Log in with valid credentials.
    - expect: User is logged in.
  2. Wait for session timeout period or simulate session expiration.
    - expect: User is logged out and redirected to login page.
