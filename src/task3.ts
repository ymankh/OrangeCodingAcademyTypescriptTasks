// Task 1: Verify Interface Properties

// You are given an object that follows an interface Person with properties name and age.
// Check if the age is above 18 and print "Adult" if true, otherwise print "Minor."

interface Person {
  name: string;
  age: number;
}

let person: Person = {
  name: "Orange",
  age: 25,
};

if (person.age > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// Task 2: Iterate Through an Array in an Interface

// You are given an object that follows an interface Teacher with properties name and subjects
//  (an array of subjects). Print all the subjects the teacher teaches.

interface Subject {
  name: string;
}

interface Teacher {
  name: string;
  subjects: Subject[];
  
}

let teacher: Teacher = {
  name: "Orange",
  subjects: [
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "Python" },
    { name: "C++" },
  ],
};

for (let subject of teacher.subjects) {
  console.log(subject.name);
}

// Task 3: Modify Object in an Array of Interfaces

// You are given an array of Product interfaces, where each product has a name, price,
// and quantity. Write a script to increase the price of each product by 10% if the quantity
// is greater than 5.

interface Product {
  name: string;
  price: number;
  quantity: number;
}

let productsArray: Product[] = [
  { name: "Laptop", price: 1000, quantity: 10 },
  { name: "Keyboard", price: 500, quantity: 5 },
  { name: "Mouse", price: 250, quantity: 3 },
];

for (let index = 0; index < productsArray.length; index++) {
  if (productsArray[index].quantity > 5) {
    productsArray[index].price = productsArray[index].price * 1.1;
  }
}

// Task 4 : Validate Optional Function in Interface with Default Behavior

// You have an interface Device with an optional method start(). If the device has a start
// method, it should be called, otherwise, log "Device starting with default settings."

interface Device {
  start?(): void;
}

class Device implements Device {
  start?(): void {
    console.log("Device starting with custom settings.");
  }
}

const device = new Device();

if (device.start) {
  device.start();
} else {
  console.log("Device starting with default settings.");
}


interface HashMap {
    [key: number]: number;
}

let counter : HashMap = {};

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2 ,3 , 6 , 7 , 2];

for(let number of numbersArray){
    if(counter[number]){
        counter[number]++;
    }else{
        counter[number] = 1;
    }
}
console.log(counter);