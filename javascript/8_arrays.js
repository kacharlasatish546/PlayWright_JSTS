const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
console.log("length changed : "+fruits)
console.log("Fruits length: ", fruits.length);
console.log("Fruits Array to String: "+fruits.toString());
console.log("Fruits at index 2: ", fruits.at(2));
console.log("Fruits by index 0: ", fruits[0]);
console.log("Join : "+fruits.join("*"));
console.log("Fruits pop: "+fruits.pop());
console.log("Fruits after pop: "+fruits); 
console.log("Fruits push: "+fruits.push("Fig")); 
console.log("Fruits after push: "+fruits); 
console.log("Fruits shift: "+fruits.shift()); 
console.log("Fruits after shift: "+fruits); 
console.log("Fruits unshift: "+fruits.unshift("Grape")); 
console.log("Fruits after unshift: "+fruits);



const numbers = [4, 9, 16, 25, 29];

function myFunction(value, index, array){
return value > 14;
}

const number = numbers.find(myFunction);
const number2 = numbers.findIndex(myFunction);

console.log("First number greater than 14 is: "+number);
console.log("First number Index greater than 14 is: "+number2);
const sortedFruits = fruits.sort();
const toSortedFruits = fruits.toSorted();
console.log("Fruits after sort: "+sortedFruits);
console.log("Fruits after reverse: "+fruits.reverse());
console.log("Fruits after tosorted: "+toSortedFruits);

const points = [40, 100, 1, 5, 25, 10];
const sortedPoints = points.sort((a,b) => a-b);
console.log("Points sorted: "+sortedPoints);
console.log("Points sorted in reverse: "+points.sort());
console.log("Min Value in an array : "+ Math.min(...points));
console.log("Max Value in an array : "+ Math.max(...points));
console.log("Min Value in an array : "+ Math.min.apply(null, points));
console.log("Max Value in an array : "+ Math.max.apply(null, points));

function myArrayMin(arr) {
  let len = arr.length;
  let min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
}

console.log("Min Value in an array : "+ myArrayMin(points));

function myFunction(total, value, index, array){
return total + value;
}

console.log("Sum of all numbers in array: "+numbers.reduce(myFunction, 100));