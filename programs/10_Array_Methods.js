let numbersArray = [1, 24, 53, 14, 85, 84, 78, 94, 35, 48, 10, 112, 132, 122, 123, 1222];

//Default Array Sorting
console.log(numbersArray.sort())

//sorting based on numbers Descending
console.log(numbersArray.sort((a, b) => b - a));

//sorting based on numbers Ascending
console.log(numbersArray.sort((a, b) => a - b));

//Check if every number is greater than 50
console.log(numbersArray.every(a => a > 50));

//check if some numbers are greater than 50
console.log(numbersArray.some(a => a > 50));

//check if 84 is present in the array
console.log(numbersArray.find(a => a > 84));

//find index of 84
console.log(numbersArray.indexOf(84));

//modify the elements in an array using map
const modifiedNumbers = numbersArray.map((number, index) => number * 10)
console.log(modifiedNumbers);

//CRUD on array
//remove last element in an array
let poopedNumber = numbersArray.pop();
console.log(poopedNumber);
console.log(numbersArray);

//add last element to the array
let pushingNumber = numbersArray.push(1222);
console.log(pushingNumber);
console.log(numbersArray);

//remove first element in an Array
let shiftedElement = numbersArray.shift();
console.log(shiftedElement);
console.log(numbersArray);

//add element in the first
let unshiftedElelement = numbersArray.unshift(1);
console.log(unshiftedElelement);
console.log(numbersArray);

//remove element in between
console.log(numbersArray.slice(0));
console.log(numbersArray.slice(1));
let slicedArray = numbersArray.slice(1,3);
console.log(slicedArray);
console.log(numbersArray);

//add or modify or remove element in between
// console.log(numbersArray.splice(0));
// console.log(numbersArray.splice(1));
let splicedArray = numbersArray.splice(1,3);
console.log(splicedArray);
console.log(numbersArray);



