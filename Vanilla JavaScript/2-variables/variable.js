// A variable is "named storage" for data.-------------

let message;

message = "Hello"; // store the string 'Hello' in the variable named message

//window.alert(message); // show the variable content
console.log(message);

// Variable declaration and assignment into single line---------------
let message1 = "Good Morning!"; // define the variable and assign the value
console.log(message1); // Good Morning!

// declare multiple variables in one line
let user = "John",
  age = 25,
  msg = "Hie";

// var instead of let--------------
var message2 = "Evening!";

// A real-life anology-----------
let m1;
m1 = "Hello!";
m1 = "World!"; // value changed
console.log(m1);

// declare two variables and copy data from one into another
let hello = "Hello Mike!";

let m2;

// copy 'Hello Mike!' from hello into m2
m2 = hello;

// Now two variables holds same data
console.log(hello);
console.log(m2);

// Declaring twice triggers an error
let thing = "This";

// repeated 'let' leads to an error
// let thing = "That"; // SyntaxError: 'thing' has already been declared

// Variable naming -------------
// only letters, digits, and symbols $ and _
let userName; // camelCase
let myVeryLongName;
let test123;

// declaring variable names with symbols
let $ = 2;
let _ = 1;
console.log($ + _);
// console.log(`$ + _ = ${$ + _}`);

// JS is case sensitive. Variables named apple and APPLE are two different variables---------------

// Reserved names---------
// let, class, return and function are reserved words
// let let = 1;
// let return = 5;

// Constant (Unchanging variable)---------------
const myBirthday = "21.11.1993";
// myBirthday = "01.01.2001"; //TypeError: Assignment to constant variable.

// UPPER CASE constants
const COLOR_RED = "F00";
const COLOR_GREEN = "0F0";
const COLOR_BLUE = "00F";
const COLOR_ORANGE = "FF7F00";

// when we need to pick a color
let color = COLOR_ORANGE;
console.log(color);
