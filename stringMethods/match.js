// Definition and Usage
// The match() method matches a string against a regular expression **

// The match() method returns an array with the matches.

// The match() method returns null if no match is found.

// Syntax
// string.match(match)

// let text = "The rain in SPAIN stays mainly in the plain";
// const matched=text.match("ain");
// let text = "The rain in SPAIN stays mainly in the plain";
// const matched=text.match(/ain/);

// let text = "The rain in SPAIN stays mainly in the plain";
// text.match(/ain/g);

let text = "The rain in SPAIN stays mainly in the plain";
const matched=text.match(/ain/gi);

console.log(matched)