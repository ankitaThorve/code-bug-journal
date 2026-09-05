// Number()
console.log(Number("123"));
// 123 — A numeric string converts directly to its number equivalent
console.log(Number("hello"));
// NaN (Not-a-Number) — Non-numeric text cannot convert into a valid number
console.log(Number(""));
// 0 — An empty string converts to zero
console.log(Number(true));
// 1 — The boolean true converts to the number 1
console.log(Number(false));
// 0 — The boolean false converts to the number 0

// string()
console.log(String(456));
// "456" — The number turns into a text string
console.log(String(true));
// "true" — The boolean turns into the text string "true"
console.log(String(null));
// "null" — The null value turns into the text string "null"

// Boolean()
console.log(Boolean(1));
// true — Any non-zero number is truthy in JavaScript
console.log(Boolean(0));
// false — Zero is a falsy value
console.log(Boolean(" "));
// false — An empty string is falsy
console.log(Boolean("false"));
// true — A non-empty string (even one containing the word "false") is always truthy