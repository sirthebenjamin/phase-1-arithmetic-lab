
// Write your code here
// Multiply num1 and num2 to get 62
const num1 = 31;
const num2 = 2;
const multiply = num1 * num2;

// Generate a random integer greater than 0
const random = Math.floor(Math.random() * 100) + 1;

// Calculate the remainder of dividing num3 by num4 to get 4
const num3 = 28;
const num4 = 6;
const mod = num3 % num4;

// Find the highest number in a set, which is 20
const setOfNumbers = [3, 20, 9, 7, 14];
const max = Math.max(...setOfNumbers);

console.log("multiply:", multiply);
console.log("random:", random);
console.log("mod:", mod);
console.log("max:", max);

// Output:
// multiply: 62
// random: <random integer between 1 and 100>
// mod: 4
// max: 20