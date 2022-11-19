// The trim() method removes whitespace from both sides of a string:

let text1 = "      Hello World!      ";
let text2 = text1.trim();
console.log(text2)


// ECMAScript 2019 added the String method trimStart() to JavaScript.

// The trimStart() method works like trim(), but removes whitespace only from the start of a string.

// let text3 = text1.trimStart();

// console.log(text3)


let text3 = text1.trimEnd();

console.log(text3)