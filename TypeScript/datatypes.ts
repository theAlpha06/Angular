//*String
let lname = 'Shubham'; //Type Inference - Determine the data type from the value assigned
// lname = 10; 
// Error: Type '10' is not assignable to type 'string'.
let newName = lname.toUpperCase();
console.log(newName);

//*Number
let age: number;
age = 23;
age = 23.3;
let result = parseInt(newName);

//*Boolean
let isValid: boolean = false;
console.log(isValid);

//*Array
let emplist: string[];
let depList: Array<string>;
emplist = ["Shubham", "Singh"];
depList = ["Shubham", "Singh"];
let numList: Array<number>;
numList = [1, 2, 3, 4, 5];
let results = numList.filter((num) => num > 3);
console.log(results);

//*Tuple
let person: [string, number, boolean];
person = ["Shubham", 23, true];
console.log(person[0].substring(1));

let swapNumber: [firstNumber: number, firstNumber: number];

function swapNumbers(num1: number, num2: number): [number, number] {
    return [num2, num1];
}

swapNumber = swapNumbers(2, 3);
//! result = swapNumber[2]; Error
console.log(swapNumber)

//*Enum
const enum Color { Red, Green, Blue };
let c: Color = Color.Green;
console.log(c);

//*Any
let randomValue: any = 10;
randomValue = true;

// Try to avoid any

//*Unknown
let myVariable: unknown = 10;
// console.log(myVariable.name);
//! Error: Property 'name' does not exist on type 'unknown'.
// myVariable();
//! Error: Cannot invoke an object which is possibly 'unknown'.
// myVariable.toUpperCase();
//! Error: Object is of type 'unknown'.
// (myVariable as string).toUpperCase();

//*Void
function printName(name: string): void {
    console.log(name);
}
printName("Shubham");

//*Null and Undefined
let u: undefined = undefined;
let n: null = null;

//*Never
