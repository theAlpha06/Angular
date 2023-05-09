"use strict";

//!String
let lname = 'Shubham'; //Type Inference - Determine the data type from the value assigned
// lname = 10; 
// Error: Type '10' is not assignable to type 'string'.
let newName = lname.toUpperCase();
console.log(newName);

//!Number
let age;
age = 23;
age = 23.3;
let result = parseInt(newName);
Boolean
let isValid = false;
console.log(isValid);

//!Array
let emplist;
let depList;
emplist = ["Shubham", "Singh"];
depList = ["Shubham", "Singh"];
let numList;
numList = [1, 2, 3, 4, 5];
let results = numList.filter((num) => num > 3);
console.log(results);

//!Tuple
let person;
person = ["Shubham", 23, true];
console.log(person[0].substring(1));
let swapNumber;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumber = swapNumbers(2, 3);
console.log(swapNumber);
;
let c = 1 /* Color.Green */;
console.log(c);

//!Any
let randomValue = 10;
randomValue = true;

//!Unknown
let myVariable = 10;
// console.log(myVariable.name);
// Error: Property 'name' does not exist on type 'unknown'.
// myVariable();
// Error: Cannot invoke an object which is possibly 'unknown'.
// myVariable.toUpperCase();
// Error: Object is of type 'unknown'.
// (myVariable as string).toUpperCase();

//!Void
function printName(name) {
    console.log(name);
}
printName("Shubham");

//!Null and Undefined
let u = undefined;
let n = null;

//!Never
