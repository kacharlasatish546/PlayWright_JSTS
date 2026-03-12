// console.log(name1); //TDZ
let name1 = "satish";
console.log(name1);
function name1MyFunction() {
    // console.log(name1); //TDZ
    let name1 = "kumar";
    // let name1 = "abchadb"; //redecleration not allowed for let
    console.log(name1);
    if (true) {
        // console.log(name1); //TDZ
        let name1 = "kacharla"
        console.log(name1);
    }
}
name1MyFunction();
