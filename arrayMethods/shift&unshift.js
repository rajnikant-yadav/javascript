// unshift Method: The unshift method is used to add one or more elements to the beginning of an array. It modifies the original array and returns the new length of the array. 
// Syntax: array.unshift(element1, ..., elementN);

var fruits = ["banana", "orange"];
var newLength = fruits.unshift("apple", "grape");

console.log(fruits);     // Output: [ 'apple', 'grape', 'banana', 'orange' ]
console.log(newLength);  // Output: 4

// shift Method: The shift method is used to remove the first element from an array. It modifies the original array and returns the removed element.

// Syntax: array.shift();
var colors = ["red", "blue", "green"];
var removedColor = colors.shift();

console.log(colors);       // Output: [ 'blue', 'green' ]
console.log(removedColor); // Output: 'red'
