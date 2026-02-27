const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana
console.log(fruits[2]); // Output: Cherry

console.log(fruits.length);
console.log(fruits.length-1);
console.log(fruits[fruits.length-1]);
console.log(fruits);
fruits.push("Avacado");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift("Mango");
console.log(fruits);
fruits.shift(1);
console.log(fruits);
fruits.unshift("Mango")
fruits.unshift("Apple");
console.log(fruits);
fruits.shift(2);
console.log(fruits);
fruits.unshift("Apple");
console.log(fruits);
console.log(fruits.indexOf("Banana"));
console.log(fruits.lastIndexOf("Apple"));
console.log(fruits.includes("Banana"));
console.log(fruits.includes("Grapes"));
const moreFruits = ["Date", "Elderberry"];
fruits.push(...moreFruits);
console.log(fruits);
fruits.splice(2,2,"DragonFuit");
console.log(fruits);
const slicedFruits = fruits.slice(2,4);
console.log(slicedFruits);
console.log(fruits.slice(1,2));
const moreFruit = ["Date", "Elderberry"];
fruits.push(...moreFruit);
console.log(fruits);
console.log(fruits.slice(1,2));
console.log(fruits);
console.log(fruits.splice(1,1));
console.log(fruits);
