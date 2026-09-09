// Build a simple bill calculator
const billAmount = 50;
const tipPercentage = 15;
const numberOfPeople = 2;

const tipFraction = tipPercentage / 100;

const totalTip = billAmount * tipFraction;

const totalBill = billAmount + totalTip;

const amountPerPerson = totalBill / numberOfPeople;

console.log(`Total Tip: ${totalTip}`);
console.log(`Total Bill: ${totalBill}`);
console.log(`Per Person: ${amountPerPerson}`);
