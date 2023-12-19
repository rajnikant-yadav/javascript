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
