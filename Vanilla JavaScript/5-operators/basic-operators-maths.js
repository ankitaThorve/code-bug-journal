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

// Operator precedence------------------

/* Precedence	Name	Sign
…	…	…
14	unary plus	+
14	unary negation	-
13	exponentiation	**
12	multiplication	*
12	division	/
11	addition	+
11	subtraction	-
…	…	…
2	assignment	=
…	…	…
*/

// Assignment ------------------
let u = 3 * 2 + 1; // assign a variable 'u', the calculations are done first and then the '=' is evaluated, storing the reslt in 'u'
console.log(u); // 5

// Assignment = returns a value ------------------
let a1 = 1;
let b1 = 2;

let c1 = 3 - (a1 = b1 + 1);

console.log(a1); // 3
console.log(c1); // 0

// Chaining assignment ------------
let e, f, g;
// e = f = g = 2 + 2;
g = 2 + 2;
f = g;
e = g;

console.log(e); // 4
console.log(f); // 4
console.log(g); // 4

// Modify-in-place---------------
let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

console.log(n);

let q = 2;
q *= 3 + 5; // right part evaluated fisrt (same as n *= 8)
console.log(q); // 16

// Increment/decrement-----------------------

// Increment ++ increases a variable by 1
let counter = 2;
counter++; // works same as counter = counter + 1, but is shorter
console.log(counter); // 3

// Decrement -- decreases a variable by 1
let count = 2;
count--; // works same as count = count - 1, but is shorter
console.log(count); // 1

// prefix form
let prefixCounter = 1;
let pre = ++prefixCounter;
console.log(`prefix counter: ${pre}`); // 2

// postfix form
let postfixCounter = 1;
let post = postfixCounter++;
console.log(`postfix counter: ${post}`); // 1

// If the result of increment/decrement is not used, there is no difference in which form to use:
let count1 = 0;
count1++;
++count1;
console.log(count1); // 2

// If we’d like to increase a value and immediately use the result of the operator, we need the prefix form:
let count2 = 0;
console.log(++count2); // 1

// If we’d like to increment a value but use its previous value, we need the postfix form:
let count3 = 0;
console.log(count3++); // 0

