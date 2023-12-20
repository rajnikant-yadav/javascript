// findIndex( )
// This method returns the index of the first element in an array that pass the test in a testing function.

//  find( )
// This method returns the value of the first element in an array that pass the test in a testing function.

// Example 1
// Finding the index of the first even number in an array:

const numbers = [1, 3, 5, 2, 4, 6, 7, 9];

const indexFirstEvenNumber = numbers.findIndex((number) => number % 2 === 0);

console.log(indexFirstEvenNumber);
// Output: 3

// Example 2
// Finding the index of the first name that starts with the letter 'B':

const names = ['Alice', 'Bob', 'Charlie', 'Anna', 'Alex'];

const indexFirstBName = names.findIndex((name) => name.startsWith('B'));

console.log(indexFirstBName);
// Output: 1

// Example 3
// Finding the index of an object based on a property:

const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Smartphone', price: 500 },
  { name: 'Tablet', price: 300 },
  { name: 'Desktop', price: 1200 },
];

const indexExpensiveProduct = products.findIndex((product) => product.price > 1000);

console.log(indexExpensiveProduct);
// Output: 3
