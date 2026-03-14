let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log(arr.reduce((a, b) => a + b));

function reduceArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }   
    return sum;
}

console.log(reduceArray(arr));