let responseTimes = [320, 85, 1200, 450, 99];
let sorted = responseTimes.sort(); //Sorting is done with string 
console.log("Fastest:", sorted[0]);

let sortedNumbers = responseTimes.sort((a, b) => a - b); //Sorting is done with numeric comparison
console.log("Fastest:", sortedNumbers[0]);