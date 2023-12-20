# isArrayChecker

## Syntax
Array.isArray(value)
value: The value to be checked for being an array.
The `isArrayChecker` is a simple JavaScript utility that checks whether a given value is an array or not using the `Array.isArray()` method.

## Usage
```javascript

// It is used to check whether the passed value is an array or not
var arr = ["Rahul", "Sonam", "Sumit", "Raj"];
var result1 = Array.isArray(["Rose", "Khoj"]);
var result2 = Array.isArray("IAmString");
var result3 = Array.isArray(arr);
console.log(result1);
console.log(result2);
console.log(result3);

// Output:
// true
// false
// true
```

# Concatenating Arrays with concat
## Syntax
arr.concat(value1, value2, ..., valueN)

The `concat` method is used to combine two or more arrays, creating a new array without modifying the existing ones. It does not change the original arrays; instead, it returns a new array that contains the elements of the concatenated arrays.

## Examples

### Example 1

```javascript
// concat example1
var arr1 = [1, 2, 3];
var arr2 = arr1.concat(4, 5, 6);
console.log(arr2);


// example 2
var arr1=["a","b","c"]
var arr2=["d","e","f"]
var arr3=[]
var arr=arr3.concat(arr1,arr2)
console.log(arr)
// output ["a", "b", "c", "d", "e", "f"]


// example3 
var arr1=["a","b","c"]
var arr2=["d","e","f"]
var arr3=[1,3,4,4]
var arr4=arr3.concat(arr1,arr2)
console.log(arr4) 
// output [1, 3, 4, 4, "a", "b", "c", "d", "e", "f"]
```

# Every Method in JavaScript
The `every` method in JavaScript is used to check if all elements in an array pass a certain condition specified by a provided function. It iterates through each element in the array and returns true only if the given function returns true for every element. If any element fails the condition, it returns false. It's a concise way to determine whether all elements in an array satisfy a specified condition.

## Syntax
every((element) => { /* … */ })
every((element, index) => { /* … */ })
every((element, index, array) => { /* … */ })

```javascript
const ages = [32, 33, 16, 40];

// Using the every method with a function declaration
const result1 = ages.every(function checkAge(age) {
    return age > 18;
});

// Using the every method with an arrow function
const result2 = ages.every((age) => age > 18);

// Using a concise arrow function
const result3 = ages.every((age) => age > 10);

console.log(result1); // Output: false
console.log(result2); // Output: false
console.log(result3); // Output: true

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 19 },
];

// Using every to check if all people are adults
const allAdults = people.every(person => person.age >= 18);

console.log(allAdults); // Output: true

const words = ['apple', 'banana', 'kiwi', 'orange'];

// Check if all strings contain the substring 'a'
const allWordsContainA = words.every(word => word.includes('a'));

console.log(allWordsContainA); // Output: false

// Example
const numbers = [2, 4, 6, 8, 10];

// Check if all elements are even and their indices are also even
const allEvenIndices = numbers.every((element, index) => {
    return element % 2 === 0 && index % 2 === 0;
});

console.log(allEvenIndices); // Output: true

// Example 
const temperatures = [72, 75, 80, 78, 82];

// Check if all temperatures are higher than the previous one
const temperaturesIncreasing = temperatures.every((element, index, array) => {
    if (index === 0) {
        return true; // Skip the first element as there is no previous one
    }
    return element > array[index - 1];
});

console.log(temperaturesIncreasing); // Output: true


```


# Filling Elements in an Array with fill()
The `fill()` method in JavaScript is used to fill all the elements in an array with a static value. It allows you to specify the value to fill, as well as optional start and end indices to determine the range of elements to fill.

## Syntax
array_name.fill(value, start, end)

```javascript
// Example
var arr = ["Rahul", "Sonam", "Raj", "Sumit"];

// All elements filled with "hello"
// arr.fill("hello");
// console.log(arr);
// Output: [ 'hello', 'hello', 'hello', 'hello' ]

// Filling elements with "hello" from index 1 to 3
arr.fill("hello", 1, 3);
console.log(arr);
// Output: [ 'Rahul', 'hello', 'hello', 'Sumit' ]
```

# Filtering Elements in an Array with filter()

The `filter()` method in JavaScript is used to create a new array containing only the elements that pass a provided condition. It does not modify the original array but instead returns a new array containing the elements that meet the specified criteria.

## Syntax
array.filter((element) => {
  // return true if the element should be included in the filtered array
  // return false if the element should be excluded
});
```javascript
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

const affordableProducts = products.filter((product) => product.price < =1000);

console.log(affordableProducts);
// Output:
// [{ name: 'Laptop', price: 1000 }, { name: 'Smartphone', price: 500 },{ name: 'Tablet', price: 300 }]
```

# Finding Elements in an Array with find()

The `find()` method in JavaScript is used to retrieve the first element in an array that satisfies a provided condition. It returns `undefined` if no such element is found. Unlike the `filter()` method, which creates a new array with all elements that meet the condition, `find()` returns only the first matching element.

## Syntax
array.find((element) => {
  // return true if the element satisfies the condition
  // return false if the element does not satisfy the condition
});

```javascript
// Example 1
// Finding the first even number in an array:

const numbers = [1, 3, 5, 2, 4, 6, 7, 9];

const firstEvenNumber = numbers.find((number) => number % 2 === 0);

console.log(firstEvenNumber);
// Output: 2


// Example 2
// Finding the first name that starts with the letter 'B':
const names = ['Alice', 'Bob', 'Charlie', 'Anna', 'Alex'];

const firstBName = names.find((name) => name.startsWith('B'));

console.log(firstBName);
// Output: 'Bob'

// Example 3
// Finding an object based on a property:

const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Smartphone', price: 500 },
  { name: 'Tablet', price: 300 },
  { name: 'Desktop', price: 1200 },
];

const expensiveProduct = products.find((product) => product.price > 1000);

console.log(expensiveProduct);
// Output: { name: 'Desktop', price: 1200 }
```

# Finding the Index of Elements in an Array with findIndex()

The `findIndex()` method in JavaScript is used to find the index of the first element in an array that satisfies a provided condition. It returns -1 if no such element is found. Similar to `find()`, which returns the element itself, `findIndex()` returns the index of the first matching element.

## Syntax
array.findIndex((element) => {
  // return true if the element satisfies the condition
  // return false if the element does not satisfy the condition
});

```javascript
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
```