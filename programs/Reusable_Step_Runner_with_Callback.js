function runStep(stepName, actionFn) {
  console.log(`Starting step: ${stepName}`);

  try {
    // Execute the callback
    const result = actionFn();

    // If the callback succeeds
    return {
      stepName,
      passed: true,
      message: result ?? "Step completed successfully"
    };
  } catch (error) {
    // Catch any errors from the callback
    return {
      stepName,
      passed: false,
      message: error.message
    };
  }
}

// Example usage

// Step that passes
const step1 = runStep("Login", () => {
  // Some logic here
  return "User logged in successfully";
});

// Step that fails
const step2 = runStep("Fill Form", () => {
  throw new Error("Form validation failed");
});

console.log(step1);
// { stepName: 'Login', passed: true, message: 'User logged in successfully' }

console.log(step2);
// { stepName: 'Fill Form', passed: false, message: 'Form validation failed' }