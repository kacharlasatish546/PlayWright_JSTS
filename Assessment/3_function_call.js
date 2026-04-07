const person = {
    fullname : function(city, country) {
        return this.firstname + " " + this.lastname + " From " + city + " " + country;
    }
}

const person1 = {
    firstname : "John",
    lastname : "Doe"
}   
const person2 = {
    firstname : "Jane",
    lastname : "Smith"
}

console.log(person.fullname.call(person1, "New York", "USA")); // Output: John Doe New York USA
console.log(person.fullname.call(person2, "Los Angeles", "USA")); // Output: Jane Smith Los Angeles USA

function callEmployee(){
    return this.name + " is an employee";
}

const employee = {"name": "Satish"};
console.log(callEmployee.call(employee)); // Output: satish is an employee

