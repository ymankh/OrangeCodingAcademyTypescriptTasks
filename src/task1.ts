// 1- Identify if a Number is Even or Odd
// You are given a variable num. Check whether the number is even or odd without using a function.

let num = 10;

if (num % 2 === 0) {
    console.log(num + " is even");
}

// 2- Filter Expensive Products from an Array :
// You are given an array of product prices. print out  all prices that are higher than a given 
// threshold price, without using a function.

let products = [100, 200, 300, 400, 500];
let threshold = 300;

for (let i = 0; i < products.length; i++) {
    if (products[i] > threshold) {
        console.log(products[i]);
    }
}

// 3- Find the Oldest Admin
// You have an array of user objects, where each user has the properties name, age, and isAdmin.
// Find and print the name of the oldest admin, without using a function.

let Admins = [
    { name: "John", age: 30, isAdmin: true },
    { name: "Mary", age: 25, isAdmin: false },
    { name: "Bob", age: 35, isAdmin: true },
    { name: "Alice", age: 40, isAdmin: false },
];

let oldestAdmin = Admins.reduce((acc, curr) => {
    if (acc.age < curr.age) {
        return acc;
    }
    else {
        return curr;
    }
});

console.log(oldestAdmin.name);
