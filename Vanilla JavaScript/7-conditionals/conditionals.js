// Conditional branching : if, '?'

// ? - conditional operator

// The "if" statement -----------------------
// The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.
let year = 2015;
// wrap multiple code lines in curly braces
if (year == 2015) {
  console.log("That's correct");
  console.log("You're so smart!");
}

// Boolean conversion -----------------------------
// The if (…) statement evaluates the expression in its parentheses and converts the result to a boolean.

if (0) {
  // falsy
  // some code here
}

if (1) {
  // truthy
  // some code here
}

// We can also pass a pre-evaluated boolean value to if, like this:
let cond = year == 2015;
if (cond) {
  // ...
}

// The "else" clause ---------------------
// The if statement may contain an optional else block. It executes when the condition is falsy.

if (year == 2015) {
  console.log("You guessed it right!");
} else {
  console.log("How can you be so wrong"); // any value except 2015
}

// Several conditions: 'else if' -----------------------
if (year < 2015) {
  console.log("Too early.....");
} else if (year > 2015) {
  console.log("Too late......");
} else {
  console.log("Exactly!");
}

// Conditional operator '?' -----------------------------
// ternary operator '?'
// syntax: let result = condition ? value1 : value2;

let age = 104;
let accessAllowed = age > 18 ? true : false;

// Note : let accessAllowed = age > 18;

// Multiple '?' ------------------------------------
let message =
  age < 3
    ? "Hi baby!"
    : age < 18
      ? "Hello!"
      : age < 100
        ? "Greetings!"
        : "What an unusual age!";
console.log(message);

if (age < 3) {
  message = "Hi, baby";
} else if (age < 18) {
  message = "Hello";
} else if (age < 100) {
  message = "Greetings";
} else {
  message = "What an unusual age!";
}

// Non-traditional use of '?' --------------------------------
// ? instead of if
company == "Netscape" ? alert("Right") : alert("Wrong");
