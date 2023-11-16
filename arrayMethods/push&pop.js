// push Method: The push method is used to add one or more elements to the end of an array. It modifies the original array and returns the new length of the array.
// Syntax: array.push(element1, ..., elementN);

var fruits = ["apple", "banana", "orange"];
var newLength = fruits.push("grape", "kiwi");

console.log(fruits);     // Output: [ 'apple', 'banana', 'orange', 'grape', 'kiwi' ]
console.log(newLength);  // Output: 5

// pop Method: The pop method is used to remove the last element from an array. It modifies the original array and returns the removed element.

// Syntax: array.pop();

var colors = ["red", "blue", "green"];
var removedColor = colors.pop();

console.log(colors);       // Output: [ 'red', 'blue' ]
console.log(removedColor); // Output: 'green'


