// Definition and Usage
// The match() method matches a string against a regular expression **

// The match() method returns an array with the matches.

// The match() method returns null if no match is found.

// Syntax
// string.match(regexp)

// let text = "The rain in SPAIN stays mainly in the plain";
// const matched=text.match("ain");
// console.log(matched)
// Output:  [ 'ain', index: 5, input: 'The rain in SPAIN stays mainly in the plain', groups: undefined ]


// let text = "The rain in SPAIN stays mainly in the plain";
// const matched=text.match(/ain/);
// Output : [ 'ain', 'ain', 'ain' ]


// let text = "The rain in SPAIN stays mainly in the plain";
// text.match(/ain/g);

let text = "The rain in SPAIN stays mainly in the plain";
const matched=text.match(/ain/gi);

console.log(matched)

let str = "Hello, World!";
let matches = str.match(/o/g);

console.log(matches);
// Output: [ 'o', 'o' ]

// In this example, the regular expression /o/g is used to find all occurrences of the letter "o" in the string. The match() method returns an array ['o', 'o'] containing the matches.

// If there are no matches, the method returns null:
// let str = "Hello, World!";
// let matches = str.match(/JavaScript/g);

// console.log(matches);
// // Output: null
