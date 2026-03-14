const arr = [1, 2, 3, 4, 5];

console.log("-------Arrays-------");
console.log(arr)
console.log(arr.length);
console.log(arr[0])
console.log(arr.at(0))
console.log(arr.at(-1));
console.log("-------Arrays: Adding or removing from starting-------");
console.log(arr.unshift(0));
console.log(arr);
console.log(arr.shift());
console.log(arr);
console.log("-------Arrays: Adding or removing from end-------");
console.log(arr.push(6));
console.log(arr);
console.log(arr.pop());
console.log(arr);
console.log("-------Arrays: Adding,removing or replacing between indices-------");
console.log(arr.splice(2, 0, 2.5));
console.log(arr);
console.log(arr.splice(2, 1));
console.log(arr);
console.log("-------Arrays: Map-------");
const newArr = [1, 2, 3, 4, 5];
const mappedArr = newArr.map(x => x * 2);
console.log(mappedArr);
console.log("-------Arrays: Flat Map-------");
const nestedArr = [1, 2, [3, 4], 5];
const flatMappedArr = nestedArr.flatMap(x => Array.isArray(x) ? x : [x]);
console.log(flatMappedArr);
console.log("-------Arrays: Filter-------");
const filteredArr = newArr.filter(x => x > 3);
console.log(filteredArr);
console.log("-------Arrays: Reduce-------");
const sum = newArr.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
console.log("-------Arrays: Find-------");
const foundElement = newArr.find(x => x > 3);
console.log(foundElement);
console.log("-------Arrays: Sort-------");
const unsortedArr = [5, 2, 9, 1, 5, 6];
const sortedArr = unsortedArr.sort((a, b) => a - b);
console.log(sortedArr);
console.log("-------Arrays: Join-------");
const joinedStr = newArr.join(", ");
console.log(joinedStr);
console.log("-------Arrays: For-------");
for (let i = 0; i < newArr.length; i++) {
    console.log(newArr[i]);
}
console.log("-------Arrays: For..of-------");
for (const element of newArr) {
    console.log(element);
}
console.log("-------Arrays: For..in-------");
for (const element in newArr) {
    console.log(element);
}
console.log("-------Arrays: Map-------");