// // FOR LOOP
// console.log("--- FOR LOOP ---");
// for (let i = 0; i < 5; i++) {
//   console.log(`Iteration ${i}`);
// }

// // WHILE LOOP
// console.log("\n--- WHILE LOOP ---");
// let count = 0;
// while (count < 5) {
//   console.log(`Count: ${count}`);
//   count++;
// }

// // DO-WHILE LOOP
// console.log("\n--- DO-WHILE LOOP ---");
// let num = 0;
// do {
//   console.log(`Number: ${num}`);
//   num++;
// } while (num < 5);

// // FOR-OF LOOP
// console.log("\n--- FOR-OF LOOP ---");
// const arr = ['a', 'b', 'c', 'd'];
// for (const element of arr) {
//   console.log(element);
// }

// // FOR-IN LOOP
// console.log("\n--- FOR-IN LOOP ---");
// const obj = { name: 'John', age: 30, city: 'New York' };
// for (const key in obj) {
//   console.log(`${key}: ${obj[key]}`);
// }

// // FOREACH METHOD
// console.log("\n--- FOREACH METHOD ---");
// ['x', 'y', 'z'].forEach((item, index) => {
//   console.log(`${index}: ${item}`);
// });


for(let a=0; a<5; a++){
  console.log(a);
}

let x=0;
while(x<5){
  console.log(x);
  x++;
}
let array = [1, 2, 3, 4, 5];
for(let element of array){
  console.log(element);
}
array.forEach((element, index) => {
  console.log(`${index}: ${element}`);
})
for(let a=0; a<array.length; a++){
  console.log("For" +array[a] +" : "+a);
}

const obj = { name: 'Alice', age: 25, city: 'Los Angeles' };
for (const key in obj) {console.log(`${key}: ${obj[key]}`); }
console.log(obj);       
        