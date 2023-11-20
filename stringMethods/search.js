// The search() method matches a string against a regular expression **

// The search() method returns the index (position) of the first match.

// The search() method returns -1 if no match is found.

// The search() method is case sensitive.

// Syntax : string.search(searchValue)


// let text = "Mr. Blue has a blue house";
// let position = text.search("blue");
// console.log(position)
// Output : 15

// let text = "Mr. Blue has a blue house";
// let position = text.search(/Blue/);
// console.log(position)
// Output : 4

let text = "Mr. Blue has a blue house";
let position = text.search(/blue/i);
console.log(position)