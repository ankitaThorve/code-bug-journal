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
