const students = [
  { name: "Ravi", age: 20, phoneNumbers: ["123-456-7890", "987-654-3210"] },
  { name: "Anil", age: 22, phoneNumbers: ["555-555-5555"] },
  { name: "Sita", age: 19, phoneNumbers: ["111-111-1111"] }
];

// let ageArr = [];
// for (let i = 0; i < students.length; i++) {
//     ageArr.push(students[i].age);
// }
// console.log(ageArr);
// console.log(ageArr.filter(age => age >= 20));

// const result = students.map(student => student.age).filter(age => age >= 20);
// console.log(result);

const result1 = students.map(student => student.phoneNumbers)[0].filter(phone => phone.startsWith("9"));
console.log(result1);