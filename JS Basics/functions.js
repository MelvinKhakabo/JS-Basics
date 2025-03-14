//Writing funcions in JS
function greet(){
    console.log("Hello World!");
} //doesn't need a semi-colon
//call the function
greet();

//function with parameters
function greet(name){
    console.log("Hello " + name);
}
greet("John");
greet("Mary");

//function with multiple parameters
function greet(name, lastName){
    console.log("Hello " + name + " " + lastName);
}
greet("John", "Smith");
greet("Mary", "Jane");


//Other functions
//function that calculates a value
function square(number){
    return number * number;
}
//call the function
let number = square(2);
console.log(number);    
