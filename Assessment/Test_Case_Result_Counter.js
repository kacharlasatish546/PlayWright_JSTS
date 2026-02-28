//Test Case Result Counter

//After a test suite runs, you receive an array of test results (strings: "pass", "fail", "skip"). 
// Write a JavaScript program using a for loop that counts how many tests passed, failed, and were skipped. 
// Print a test report with total tests, counts, pass rate percentage, and a verdict 
// (all passed → ready for release, ≤2 failures → review, >2 failures → block release).

const testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"]
let passCount = 0;
let failCount = 0;
let skipCount = 0;

for(let i = 0; i < testResults.length; i++){
    if(testResults[i] === "pass"){
        passCount = passCount + 1;
    } else if(testResults[i] === "fail"){
        failCount = failCount + 1;
    } else if(testResults[i] === "skip"){
        skipCount = skipCount + 1;
    }
}
console.log("Total Tests:", testResults.length);
console.log("Passed Tests:", passCount);
console.log("Failed Tests:", failCount);
console.log("Skipped Tests:", skipCount);

let passRate = (passCount / testResults.length * 100).toFixed(2);
console.log("Pass Rate:", passRate + "%");

if(failCount === 0){
    console.log("Verdict: Ready for release");
} else if(failCount <= 2){
    console.log("Verdict: Minor failures. Review before release.");
} else {
    console.log("Verdict: Block release");
}