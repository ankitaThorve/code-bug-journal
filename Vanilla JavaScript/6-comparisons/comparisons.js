// Comparison operators------------------
/*
Greater/less than : a > b , a < b 
Greater/less than or equals : a >= b, a <= b
Equals : a == b | equality test | a = b means assignment
Not equals : a != b
*/

// Boolean is the result ---------------------
/*
true - 'yes', "correct", "the truth" 
false - "no", "incorrect", "not the truth"
*/
console.log(2 > 1); // true (correct)
console.log(2 == 1); // false (wrong)
console.log(2 != 1); // true (correct)

let result = 5 > 4;
console.log(result); // true

// String comparison -------------------
// Too see whether a string is greater than another, JavaScript uses the so-called 'dictionary' or 'lexicographtcal' order

console.log("Z" > "A"); // true
console.log("Glow" > "Glee"); // true
console.log("Bee" > "Be"); // true

// Note: 'A' is not equal to 'a' | here 'a' is greater (lowercase)

// Comparison of different types --------------------------
// JS converts value to number
console.log("2" > 1); // true, string '2' becomes a number 2
console.log("01" == 1); // true, string '01' becomes a number 1

// for boolean values, true becomes 1 and false becomes 0
console.log(true == 1);
console.log(false == 0);

/* A funny consequence
>Two values are equal
>One of them is true as boolean and other one is false as boolean
From JavaScript’s standpoint, this result is quite normal. An equality check converts values using the numeric conversion (hence "0" becomes 0), while the explicit Boolean conversion uses another set of rules.
*/
let a = 0;
console.log(Boolean(a)); // false

let b = "0";
console.log(Boolean(b)); // true

console.log(a == b); // true
