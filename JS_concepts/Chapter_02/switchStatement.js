let x=10;
switch(true){
    case 5: 
        console.log("The value is 5");
        break;
    case 10: 
        console.log("The value is 10");
        break;
    default:
        console.log("The value is neither 5 nor 10");
}

switch(x){
    case 5: 
        console.log("The value is 5");
        break;
    case 10: 
        console.log("The value is 10");
        // break;
    default:
        console.log("The value is neither 5 nor 10");
}

switch(""){
    case 5: 
        console.log("The value is 5");
        break;
    case 10: 
        console.log("The value is 10");
        break;
    default:
        console.log("The value is neither 5 nor 10");
}

switch([]){
    case 5: 
        console.log("The value is 5");
        break;
    case 10: 
        console.log("The value is 10");
        break;
    default:
        console.log("The value is neither 5 nor 10");
}

switch("5"){
    case 5: 
        console.log("The value is 5");
        break;
    case 10: 
        console.log("The value is 10");
        break;
    case "5": 
        console.log("The value is 5 String");
        break;
    default:
        console.log("The value is neither 5 nor 10");
}

let browser = "Chrome";
switch (browser.trim().toLowerCase()) {
    case "chrome":  
        console.log("You are using Chrome");
        break;
    default:
        console.log("You are using an unsupported browser");
} 

switch(browser.trim().toLowerCase()){
    case "chrome":
    case "opera":
        console.log("You are using Chrome or Opera");
        break;
    case "firefox":
        console.log("You are using Firefox");
        break; 
    default:
        console.log("You are using an unsupported browser");
}


switch(0){
    case 5: 
        console.log("The value is 5");
        break;
    case 10: 
        console.log("The value is 10");
        break;
    case "5": 
        console.log("The value is 5 String");
        break;
    default:
        console.log("The value is neither 5 nor 10");
}

switch(undefined){
    case 5: 
        console.log("The value is 5");
        break;
    case 10: 
        console.log("The value is 10");
        break;
    case "5": 
        console.log("The value is 5 String");
        break;
    default:
        console.log("The value is neither 5 nor 10");
}

switch(null){
    case 5: 
        console.log("The value is 5");
        break;
    case 10: 
        console.log("The value is 10");
        break;
    case "5": 
        console.log("The value is 5 String");
        break;
    default:
        console.log("The value is neither 5 nor 10");
}

switch(NaN){
    case 5: 
        console.log("The value is 5");
        break;
    case 10: 
        console.log("The value is 10");
        break;
    case "5": 
        console.log("The value is 5 String");
        break;
    default:
        console.log("The value is neither 5 nor 10");
}

switch(false){
    case 5: 
        console.log("The value is 5");
        break;
    case 10: 
        console.log("The value is 10");
        break;
    case "5": 
        console.log("The value is 5 String");
        break;
    default:
        console.log("The value is neither 5 nor 10 false");
}

switch(0/100){
    case 5: 
        console.log("The value is 5");
        break;
    case 10: 
        console.log("The value is 10");
        break;
    case "5": 
        console.log("The value is 5 String");
        break;
    default:
        console.log("The value is neither 5 nor 10");
}