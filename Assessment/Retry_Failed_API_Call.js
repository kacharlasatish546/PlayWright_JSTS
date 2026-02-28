//Retry Failed API Call

//In automation testing, API calls sometimes fail due to network issues. 
// Write a JavaScript program that simulates retrying a failed API call using a do...while loop. 
// The program should retry a maximum of 5 times. Simulate random success/failure using Math.random() 
// (40% chance of success: randomValue > 0.6). Log each attempt and print the final result.

let maxRetries = 5;
let attempt = 0;
let success = false;
do {
    attempt++;
    let randomValue = Math.random();
    // console.log(`Attempt ${attempt}: Random Value = ${randomValue.toFixed(2)}`);
    if(randomValue > 0.6){
        success = true;
        console.log(`Attempt ${attempt}: Random Value = ${randomValue.toFixed(2)}: API call succeeded!`);
        console.log(`SUCCESS (Response 200 OK) API call PASSED after ${attempt} attempt(s)`)
        break;
    }else{
        console.log(`Attempt ${attempt}: Random Value = ${randomValue.toFixed(2)}: FAILED (Timeout/Error)`);
    }
} while(attempt < maxRetries && !success);

if(!success){
    console.log("API call failed after maximum retries.");
}   