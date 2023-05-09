function add(a: number, b: number) : number {
    return a + b;
}

const subtract = (a: number, b: number) : number => {
    return a - b;
}

const multiply = function(a : number, b : number) : number {
    return a * b;
}

//Optional Parameters

function addThreeNums(a: number, b: number, c?:number) : number {
    return c ? a + b + c : a + b;
}
//c is an optional parameter

//default value can be passed to make required parameter

//Rest Parameters
function add2(a:number, b: number, ...c: number[]): number {
    return a + b + c.reduce((num1, num2) => num1 + num2, 0);
}
let numbers = [1,2,3]
console.log(add2(2, 3, ...numbers));
console.log(add2(2,3,3,4,4));

//Generic functions are those which can have return type based on the parameters you pass.

function getItems<Type>(items: Type[]): Type[] {
    return new Array<Type>().concat(items);
}

let concatResult = getItems<number>([1,2,3,4,5]);
let concatString = getItems(['a','b','c']);
console.log(concatResult, concatString);