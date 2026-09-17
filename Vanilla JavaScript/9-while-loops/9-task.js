// Write a while loop that prints all even numbers from 2 up to 20
let a = 2;
while (a <= 20) {
  console.log(a);
  a += 2;
}

// do-while loop to repeatedly prompt a user to type a number greater than 10. The loop must run at least once and should only stop when they provide a valid number
// let userInput;
// do {
//   userInput = parseInt(prompt("Enter a number greater than 10:"), 10);
// } while (isNaN(userInput) || userInput >= 10);
// console.log("Thank you! you entered: ", userInput);

// Calcultate the factorial of the given number eg. 5! = 5 * 4 * 3 * 2 * 1
let n = 5;
let result = 1;
let current = n;

while (current > 1) {
  result *= current;
  current--;
}
console.log(`Factorial of ${n} is :`, result);

//
for (let i = 0; i < 5; ++i) {
  console.log(i);
}
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Use the for loop to output even numbers from 2 to 10
for (let w = 2; w <= 10; w++) {
  if (w % 2 == 0) {
    console.log(w);
  }
}

// Replace 'for' with 'while'
let b = 0;
while (b < 3) {
  console.log(`number ${b}!`);
  b++;
}

// Repeat until the input is correct
/*
Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.
*/

let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

// Output prime numbers
// Write a code which outputs prime numbers in the intervals from 2 to n
let p = 10;

nextPrime: for (let i = 2; i <= p; i++) {
  // for each i ...
  for (let j = 2; j < i; j++) {
    // look for a divisor ...
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }
  console.log(i); // a prime
}
