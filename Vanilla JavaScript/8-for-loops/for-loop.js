// The 'for' loop ------------------
/*
syntax : 
for(begin; condition; step){
  // loop body
}
*/
// Here, the “counter” variable i is declared right in the loop. This is called an “inline” variable declaration. Such variables are visible only inside the loop.
for (let i = 0; i < 3; i++) {
  console.log(i); // 0,1,2
}
//console.log(i); // error, no such variable

// Instead of defining a variable, we could use an existing one:
let j = 0;
for (j = 0; j < 3; j++) {
  console.log(j);
}
console.log(j);

// Skipping parts ----------------------------
// we can omit begin
let o = 0;
for (; o < 3; o++) {
  console.log(`o : ${o}`);
}

// also can remore step part
let p = 0;
for (; p < 3; ) {
  console.log(p++);
}

/* Infinity loop
for(;;){
  // repeats without limits
}
*/