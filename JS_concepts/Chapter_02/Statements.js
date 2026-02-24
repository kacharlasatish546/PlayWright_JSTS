//Grade Program
let score = 68;
if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80) {
    console.log("Grade B");
} else if (score >= 70) {
    console.log("Grade C");
} else if (score >= 60) {
    console.log("Grade D");
} else {
    console.log("Grade F");
}

// FizzBuzz Program
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


let x=10;
switch (true) {    
    case 5:
        console.log("x is 5");
        break;     
    case 10:     
        console.log("x is 10");     
        break;    
    default:     
    console.log("x is something else"); 
}       

let browser = "Chrome";
switch (browser.trim().toLowerCase()) {
    case "chrome":  
        console.log("You are using Chrome");
        break;
    default:
        console.log("You are using an unsupported browser");
} 
