// console.log(name1)  //TDZ Uncaught ReferenceError: Cannot access 'name1' before initialization
const name1 = "satish";
// name1 = "kumar"; //Uncaught TypeError: Assignment to constant variable.
console.log(name1);
function name1MyFunction() {
    // console.log(name1); //TDZ Uncaught ReferenceError: Cannot access 'name1' before initialization
    const name1 = "kumar";
    // const name1 = "abchadb"; //redecleration not allowed for const
    console.log(name1);
    if (true) {
        // console.log(name1); //TDZ Uncaught ReferenceError: Cannot access 'name1' before initialization
        const name1 = "kacharla"
        console.log(name1);
    }
}   

name1MyFunction();