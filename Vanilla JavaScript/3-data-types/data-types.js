// no error
let message = "hello";
message = "123456";

// Numbers----------------
let n = 123; // integers
n = 12.345; // floating point numbers

console.log(1 / 0); //Infinity

console.log("not a number" / 2); // NaN, such division is erroneous

console.log(NaN + 1); // NaN
console.log(3 * NaN); // NaN
console.log("not a number" / 2 - 1); // NaN

console.log(NaN ** 0); // 1

// BigInt--------------------
// In JavaScript, the “number” type cannot safely represent integer values larger than (253-1) (that’s 9007199254740991), or less than -(253-1) for negatives.
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

// the 'n' at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

// String------------------
let str = "hello";
let str2 = "Single quotes are oke too";
let phrase = `can embed another ${str}`; // backticks

// Backticks are 'extended funtionality' quotes. They allow us to embed variables and expressions into a string by wrapping them in ${...}.
let name = "Blair";

// embed a variable
console.log(`Hello, ${name}!`);

// embed an expression
console.log(`the result is ${1 + 2}`);

// double quotes do nothing
console.log("the result is ${1 + 2}");

// Boolean (Logical type)-------------------------
// true -> yes/correct
// false -> no/incorrect

let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

// comparison
let isGreater = 4 > 1;
console.log(isGreater); // true (the comparison result is 'yes')

// The 'null' value-----------------
// nothing, empty, value unknown
let age = null; // age is unknown

// The 'undefined' value ----------------
// value is not assigned
let user;
console.log(user); // undefined

let days = 25;
// change the value to undefined
days = undefined;
console.log(days); // 'undefined'

// Objects & Symbols--------------
// Object - collection of datand more complex entities

const man = { name: "Dan", age: 34 };

// Symbols - are always unique identifiers for objects.
const id = Symbol("id");

// The typeof operator----------------------
// returns the type of operand

console.log(typeof undefined);
console.log(typeof 0);
console.log(typeof 10n);
console.log(typeof true);
console.log(typeof "foo");
console.log(typeof Symbol("id"));
console.log(typeof Math);
console.log(typeof null);
console.log(typeof console);


// Summary-----------------
// 8 basic data types in JS
// 7 primitive data types:============
// number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
// bigint for integer numbers of arbitrary length.
// string for strings. A string may have zero or more characters, there’s no separate single-character type.
// boolean for true/false.
// null for unknown values – a standalone type that has a single value null.
// undefined for unassigned values – a standalone type that has a single value undefined.
// symbol for unique identifiers.
// 1 non-primitive data type:===============
// object for more complex data structures.

// The typeof operator allows us to see which type is stored in a variable.

// Usually used as typeof x, but typeof(x) is also possible.
// Returns a string with the name of the type, like "string".
// For null returns "object" – this is an error in the language, it’s not actually an object.