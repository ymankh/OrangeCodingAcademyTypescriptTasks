// Q1
// Sum All Elements in an Array
// You are given an array of numbers. Iterate through the array and print the sum of all elements

let randomArray = [2, 5, 7, 8, 9, 4, 6, 3, 1, 2];

let sum = 0;

for (let i = 0; i < randomArray.length; i++) {
  sum += randomArray[i];
}

console.log("the sum of the array is " + sum);

// Q2
// Check if All Elements in Array are Positive
// You are given an array of numbers. Check whether all elements are positive, and print
// "All Positive" if true, otherwise print "Not All Positive".

let allPositive = true;
let array = [2, 5, 7, 8, 9, 4, 6, 3, 1, 2];

for (let i = 0; i < array.length; i++) {
  if (array[i] < 0) {
    allPositive = false;
  }
}

if (allPositive) {
  console.log("All Positive");
} else {
  console.log("Not All Positive");
}

// Q3
// Find the Longest Name in an Array
// You are given an array of names. Iterate through the array and print the longest name .

let names = ["John", "Mary", "Peter", "Paul", "George", "Ringo"];

let longestName = "";

for (let i = 0; i < names.length; i++) {
  if (names[i].length > longestName.length) {
    longestName = names[i];
  }
}

console.log("The longest name is " + longestName);

// Q4
// Count Occurrences of a Character in a String
// You are given a string and a character. Print the number of times the character appears in the string .

let string = "Hello World";
let character = "o";

let count = 0;

for (let i = 0; i < string.length; i++) {
  if (string[i] === character) {
    count++;
  }
}

console.log(
  "The character " + character + " appears " + count + " times in the string."
);

// Q5
// Identify Prime Numbers in an Array
// You are given an array of numbers. Identify and print all prime numbers from the array.

let primeNumbers = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97,
];

let primes = [];

for (let i = 0; i < primeNumbers.length; i++) {
  let isPrime = true;

  for (let j = 2; j < primeNumbers[i]; j++) {
    if (primeNumbers[i] % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    primes.push(primeNumbers[i]);
  }
}

console.log("Prime numbers in the array are: " + primes.join(", "));