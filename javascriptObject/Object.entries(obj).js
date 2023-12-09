// Object.entries(obj): This method returns an array of a given object's own enumerable property [key, value] pairs. It essentially converts an object into an array of arrays.

// Example:

// const obj = { a: 1, b: 2, c: 3 };
// const entries = Object.entries(obj);
// console.log(entries);
// Output: [['a', 1], ['b', 2], ['c', 3]]

// The Object.fromEntries(entries) method in JavaScript performs the opposite operation of Object.entries. It takes an iterable of key-value pairs and returns a new object whose properties are defined by those pairs.

// Parameters:

// entries: An iterable object (e.g., array, map, set) of key-value pairs. Each pair should be an array of two elements: the first element being the key and the second element being the value.
//Return value:

//A new object where each key-value pair from the iterable defines a property in the returned object.

const entries = [['name', 'John Doe'], ['age', 30], ['city', 'New York']];
const person = Object.fromEntries(entries);
console.log(person);
