let sentence = "hello, world!";

console.log("Length : ", sentence.length); // Output: 13
console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());
console.log(sentence.toLocaleLowerCase());

let newSentence = sentence.trim().split(" ");
console.log(newSentence);
let result = "";
for (let i = 0; i < newSentence.length; i++) {
    result = result + " " + newSentence[i].charAt(0).toUpperCase() + newSentence[i].slice(1)
}
console.log(result);

let result2 = sentence
    .trim()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
console.log(result2);


let number = "12345.67";
console.log(typeof number); // Output: string
let newNumber = Number(number);
console.log(newNumber); // Output: 12345.67
console.log(typeof newNumber); // Output: number
let roundOff = Math.round(newNumber);
console.log(roundOff); // Output: 12346
console.log(roundOff % 6)
console.log(roundOff / 6)

let str1 = "Hello, I am learning JavaScript.";
console.log(str1.substring(2, 5)); // Output: "llo"
console.log(str1.slice(2, 5)); // Output: "llo"
console.log(str1.slice(1)); // Output: "ello, I am learning JavaScript."
console.log(str1.slice(-10)); // Output: "JavaScript."
console.log(str1.slice(-10, -1)); // Output: "JavaScript");
console.log(str1.slice(0, -1)); // Output: "Hello, I am learning JavaScript."
console.log(str1.replace("JavaScript", "Java")); // Output: "Hello, I am learning Java."
console.log(str1);
let replacedString = str1.replace("JavaScript", "Java");
console.log(replacedString); // Output: "Hello, I am learning Java."



console.log(typeof NaN); // Output: "undefined"

// console.log(m);
let m;
console.log(m);

const arr = [1, 2, 3];
arr.push(4);
console.log(arr);

console.log(2 ** 3);
let ab = "5" + 3;
console.log(typeof ab);
console.log(true + true);
console.log(0 || 'Hello');
console.log(true + true);
console.log(0 ?? 'Hello');
let some = 5;
let sum2 = some++;
console.log(some, sum2);
console.log(typeof '');
if ('0') {
    console.log('yes');
} else {
    console.log('no');
}

console.log(Boolean([]));

let status = 200;
if (status === 200) {
    console.log("OK");
} else if (status === 404) {
    console.log("Not Found");
} else {
    console.log("Other");
}

let day = 3; switch (day) {
    case 1: console.log("Mon");
    case 2: console.log("Tue"); 
    case 3: console.log("Wed"); 
    case 4: console.log("Thu"); 
    default: console.log("Other");
} 

for (let is = 0; is < 5; is++) { 
    if (is === 3) 
        break; 
    } 
    console.log(is)