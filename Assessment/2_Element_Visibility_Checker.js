//Element Visibility Checker

//In UI automation (Cypress/Playwright), you often need to validate element states before interacting with them. 
// Write a JavaScript program that checks an element's properties (isPresent, isDisplayed, isEnabled) and 
// prints the appropriate action a QA engineer should take. Use strict equality (===), 
// logical operators (&&, ||), and the ternary operator for severity level.
//States: READY (all true), DISABLED (present+displayed but not enabled), HIDDEN (present but not displayed), 
// NOT FOUND (not present).
//Severity: CRITICAL (not present), WARNING (not displayed or not enabled), OK (all good).

let isPresent = true;
let isDisplayed = true;
let isEnabled = false;

if(isPresent && isDisplayed && isEnabled){
    console.log("Element State: READY - All conditions met. Proceed with interaction.");
}
else if(isPresent && isDisplayed && !isEnabled){
    console.log("Status: DISABLED Severity: WARNING Action: Element is visible but disabled. Wait for enable state or check preconditions.");
}
else if(isPresent && !isDisplayed && isEnabled){
    console.log("Element State: HIDDEN - Element is present but not visible. Check visibility settings.");
}

