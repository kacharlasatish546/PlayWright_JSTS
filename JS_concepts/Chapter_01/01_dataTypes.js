var a = 10;
console.log("Value of a1: " + a);
function myFunction() {
    var a = 20;
    console.log("Value of a2: " + a);
    if (true) {
       var a = 30;
        console.log("Value of a3: " + a);
    }
    console.log("Value of a4: " + a);
}

myFunction();
console.log("Value of a5: " + a);

let b = 10;
console.log("Value of b1: " + b);
function myFunction2() {
   let b = 20;
    console.log("Value of b2: " + b);
    if (true) {
        let b = 30;
        console.log("Value of b3: " + b);
    }
    console.log("Value of b4: " + b);
}

myFunction2();
console.log("Value of b5: " + b);

const c = 10;
console.log("Value of c1: " + c);
function myFunction3() {
    const c = 20;
    console.log("Value of c2: " + c);
    if (true) {
       const c = 30;
        console.log("Value of c3: " + c);
    }
    console.log("Value of c4: " + c);
}

myFunction3();
console.log("Value of c5: " + c);