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
