function runWithLogin(testFn, testName) {
    console.log(`Starting ${testName}`);
    let result = testFn();
    console.log(`Finished ${testName} - ${result}`);
    return result;
}

function loginTest() {
    return "pass";
}

runWithLogin(loginTest, "LoginTest")