// Conditional branching : if, '?'

// ? - conditional operator

// The "if" statement -----------------------
// The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.

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
