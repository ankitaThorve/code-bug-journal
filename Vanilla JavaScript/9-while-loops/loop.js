// Breaking the loop -----------------------
let sum = 0;
while (true) {
  let value = +prompt("Enetr a number:", "");
  if (!value) break;
  sum += value;
}
alert("Sum : " + sum);
