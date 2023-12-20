// This method creates a new array with only elements that passes the condition inside the provided function.
// array.filter(function(currentValue, index, arr), thisValue)

// Example 1
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]

// Example 2
// Filtering names that start with the letter 'A':

const names = ['Alice', 'Bob', 'Charlie', 'Anna', 'Alex'];

const namesStartingWithA = names.filter((name) => name.startsWith('A'));

console.log(namesStartingWithA);
// Output: ['Alice', 'Anna', 'Alex']


// Example 3
const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Smartphone', price: 500 },
  { name: 'Tablet', price: 300 },
  { name: 'Desktop', price: 1200 },
];

const affordableProducts = products.filter((product) => product.price <= 1000);

console.log(affordableProducts);
// Output:
// [{ name: 'Laptop', price: 1000 }, { name: 'Smartphone', price: 500 },{ name: 'Tablet', price: 300 }]