
console.log("-- Multiplication Table of 5 --");
for (let i = 1; i <= 5; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

console.log("-- First number > 10 divisible by 6 --");
let number = 11;
while (true) {
  if (number > 10 && number % 6 === 0) {
    console.log(`Found: ${number}`);
    break;
  }
  number++;
}

console.log("-- do...while with continue --");
let n = 0;
do {
  n++;
  if (n === 3) continue; // skips printing 3
  console.log(`Number: ${n}`);
} while (n < 5);
