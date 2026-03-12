let array = [1,3,5,8,2,6,4,9,12,11];
let highestNumber = array[0];
let sortedNumbers =array.sort((a, b) => a-b);
console.log("sorted Numbers : ", sortedNumbers);
console.log(`Highest Number: ${sortedNumbers[sortedNumbers.length - 1]}`);
console.log(`Second Highest Number: ${sortedNumbers[sortedNumbers.length - 2]}`);