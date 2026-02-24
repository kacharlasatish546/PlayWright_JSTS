// Task on Triangle
let side1 = 3;
let side2 = 3;
let side3 = 3;  

if (side1 === side2 && side2 === side3 && side1 === side3) {
    console.log("The triangle is equilateral.");
} else if (side1 === side2 || side2 === side3 || side1 === side3) {
    console.log("The triangle is isosceles.");
} else {
    console.log("The triangle is scalene.");
}

// Task on Leap Year
let year = 2026;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}   