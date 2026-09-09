// What are the final values of all variables a, b, c and d after the code below?
let a = 1,
  b = 1;

let c = ++a;
let d = b++;

console.log(`value of a : ${a}`); // 1
console.log(`value of b : ${b}`); // 1
console.log(`value of c : ${c}`); // 2
console.log(`value of d : ${d}`); // 1

// What are the values of a and x after the code below?

let q = 2;
let x = 1 + (q *= 2);

// q = q * 2 - multiplied by 2
// 1 + q alculated as 1 + 4
console.log(`value of q : ${q}`);
console.log(`value of x : ${x}`);

// What are results of these expressions?
console.log(`"" + 1 + 0 = ${"" + 1 + 0}`); // 10
console.log(`"" - 1 + 0 = ${"" - 1 + 0}`); // -1
console.log(`true + false = ${true + false}`); // 1
console.log(`6 / "3" = ${6 / "3"}`); // 2
console.log(`"2" * "3" = ${"2" * "3"}`); // 6
console.log(`4 + 5 + "px" = ${4 + 5 + "px"}`); // 9px
console.log(`"$" + 4 + 5 = ${"$" + 4 + 5}`); // $45
console.log(`"4" - 2 = ${"4" - 2}`); // 2
console.log(`"4px" - 2 = ${"4px" - 2}`); // NaN
console.log(`"  -9  " + 5 = ${"  -9  " + 5}`); //   -9  5
console.log(`"  -9  " - 5 = ${"  -9  " - 5}`); // -14
console.log(`null + 1 = ${null + 1}`); // 1
console.log(`undefined + 1 = ${undefined + 1}`); // NaN
console.log(`" \\t \\n" - 2 = ${" \t \n" - 2}`); // -2

// The reason is that prompt returns user input as a string.

// So variables have values "1" and "2" respectively.

/*
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b); // 12
*/

let o = +prompt("First number?", 1);
let p = +prompt("Second number?", 2);

alert(o + p); // 3

/*

let o = prompt("First number?", 1);
let p = prompt("Second number?", 2);

alert(+o + +p); // 3
*/
