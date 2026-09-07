// Basic Operators, maths ---------
// addition +, subtraction -, multiplication *, division / , remainder %, exponentiation **

// Tearms: 'unary', 'binary', 'operand'
let multiplication = 5 * 2; // 5 & 2 are operands
console.log(multiplication);

// unary-
// An operator is unary, if it has single operand.
let x = 1;
x = -x;
console.log(x); // -1, unary negation was applied

// An operator is binary, if it has two operands.
let a = 1,
  b = 3;
console.log(b - a); // 2, binary minus subtracts values

// Remainder % -------------
console.log(5 % 2); // 1
console.log(8 % 3); // 2
console.log(8 % 4); // 0

// Exponentiation ** ----------
console.log(2 ** 2); // 2² = 4
console.log(2 ** 3); //2³ = 8
console.log(2 ** 4); //2⁴ = 16

// Exponentiation ** for non-integer numbers----------
console.log(4 ** (1 / 2)); // 2 (power of 1/2 is the same as a square root)
console.log(8 ** (1 / 3)); // 2 (power of 1/3 is the same as a cubic root)

// String concatenation with binary + -----------
let s = "my" + "string";
console.log(s); // mystring

// if any of the operand is string, then the other one is converted to the string too
console.log("1" + 2); // "12"
console.log(2 + "1"); // "21"

console.log(2 + 2 + "1"); // "41", and not "221"
console.log("1" + 2 + 2); // "122", and not "14"

// The binary + is the only operator that supports strings in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers
console.log(6 - "2"); // 4, converts '2' to a number
console.log("6" / "2"); // 3, converts both operands to numbers

// Numeric conversion, unary + ------------------
// No effect on numbers
let o = 1;
console.log(+o); // 1

let p = -2;
console.log(+p); // -2

// Converts non-numbers
console.log(+true); // 1
console.log(+""); // 0

let apples = "2";
let oranges = "3";
console.log(apples + oranges); // "23", the binary plus concatenates string

// both values converted to numbers before the binary plus
console.log(+apples + +oranges); // 5

console.log(Number(apples) + Number(oranges)); // 5
