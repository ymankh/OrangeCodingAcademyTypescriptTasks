interface User {
  name: string;
  age: number;
  email: string;
  membership: "Gold"| "Silver"| "Bronze";
  address?: Address[];
  orders?: Order[];
  greet(): string;
}

interface Address {
  street: string;
  city: string;
  state: string;
  zip: number;
}

interface Order {
  total: number;
  items: string[];
}

let user: User = {
  name: "Orange",
  age: 25,
  membership: "Gold",
  email: "orange@orange.com",
  greet: ()=> "Al Salam Alukoooom Ya Al 1/4"
};

console.log(user.greet());


let allNumbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5,
    6, 7, 8, 9, 10,
  ];

  for(let number of allNumbers){
    console.log(number);
  }