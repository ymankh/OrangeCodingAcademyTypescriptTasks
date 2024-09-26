// Take an array of numbers and return an object that shows the frequency of each number

let numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5,
  6, 7, 8, 9, 10,
];

let hashmap = new Map<number, number>();

for (let i = 0; i < numbers.length; i++) {
  if (hashmap.has(numbers[i])) {
    hashmap.set(numbers[i], hashmap.get(numbers[i])! + 1);
  } else {
    hashmap.set(numbers[i], 1);
  }
}

console.log(hashmap);

// With no Map

interface NumberMap {
  [key: string]: number;
}

let numberMap: NumberMap = {};

for (let i = 0; i < numbers.length; i++) {
  if (numberMap[numbers[i]]) {
    numberMap[numbers[i]] += 1;
  } else {
    numberMap[numbers[i]] = 1;
  }
}

console.log(numberMap);
