const { type } = require("express/lib/response");

// defining variables in JS
let name;
console.log(name); // undefined

//constants
const interestRate = 0.3;
console.log(interestRate);

//primitive types/values
let personName = 'Mosh'; //String Literal
let age = 30; //Number Literal
let isApproved = true; //Boolean Literal
let firstName = undefined;
let selectedColor = null;

//check the type of variable
console.log(typeof personName);
console.log(typeof age);
console.log(typeof isApproved);
console.log(typeof firstName);
console.log(typeof selectedColor);

//Dynamic Typing
//JS is a dynamically typed language: variables can change as you want
let myName = 'John';
typeof myName; // string
// with the above code, myName is a string
myName = 30;
typeof myName; // number
// now myName is a number