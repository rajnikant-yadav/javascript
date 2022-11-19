
// The includes() method returns true if a string contains a specified string.

// Otherwise it returns false.

// The includes() method is case sensitive.

// Syntax
// string.includes(searchvalue, start)

let text = "Hello world, welcome to the universe.";
// let result = text.includes("world");


let result = text.includes("world", 12);
console.log(result)