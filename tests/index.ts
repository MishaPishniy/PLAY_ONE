let age = 5;

console.log(age);

function calculatePrice(hours: number, price: number): number {
  return hours * price;
}

console.log(calculatePrice(3, 500));
console.log(calculatePrice(3, 500));


interface User {
  name: string;
  age: number;
  email: string;
}

const user: User = {
  name: "Alex",
  age: 20,
  email: "alex@gmail.com"
};


const cars: string[] = [
  "Audi",
  "BMW",
  "Toyota"
];

