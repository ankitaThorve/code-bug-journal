// Type conversion -------------
// String Conversion---------
let value = true;
console.log(typeof value); // boolean

value = String(value); // now value is a string "true"
console.log(typeof value); // string

// Numeric Conversion-----------
console.log("6" / "2"); // 3, strings are converted to numbers

let str = "123";
console.log(typeof str); // string

// use the Number(value) function to explicitly convert a value to a number
let num = Number(str); // becomes a number 123
console.log(typeof num); // number

// string is not a valid number
let age = Number("an arbitrary string instead of a number");
console.log(age);

// Numeric conversion rules >>>>
console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// into strings >>>>>
console.log(Number("  123   ")); // 123
console.log(Number("123z")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
