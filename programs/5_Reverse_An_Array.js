// Input: [1,2,3,4]
// Output: [4,3,2,1]

let arr = [1, 2, 3, 4];


console.log(reverseArray(arr));

function reverseArray(arr) {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}

(function reverseArray(arr) {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
     console.log(reversedArr);
})([5, 6, 7, 8]);

const rArr = function (arr) {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}
console.log(rArr([9, 10, 11, 12]));

const rArray =  (arr) => {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}
console.log(rArray([13, 14, 15, 16]));