let suite1 = [{ name: "login", status: "pass" }];
let suite2 = [...suite1];
//Shallow Copy 
//using spread operator will create a reference to the original array
//So any changes made to suite2 will also affect suite1
suite2[0].status = "fail";
console.log(suite1[0].status);



//Solution to make it DEEP copy
let suite3 = [{ name: "login", status: "pass" }]; 
let suite4 = structuredClone(suite3);
suite4[0].status = "fail";
console.log(suite4[0].status); 
console.log(suite3[0].status); 

//Solution to make it DEPP copy
let suite5 = [{ name: "login", status: "pass" }]; 
let suite6 = JSON.parse(JSON.stringify(suite5));
suite6[0].status = "fail";
console.log(suite6[0].status); 
console.log(suite5[0].status); 

//Solution to make it DEEP copy
let suite7 = [{ name: "login", status: "pass" }]; 
let suite8 = suite7.map(data => ({ ...data }));
suite8[0].status = "fail";
console.log(suite8[0].status); 
console.log(suite7 [0].status); 
