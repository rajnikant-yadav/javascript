// The padEnd() method is a built-in method in JavaScript that is used to pad a string with a specified string or a repeating pattern to a certain length. This method is typically used to ensure that a string reaches a certain length by appending characters to the end of it.

// To pad a number, convert the number to a string first.

 // Syntax: string.padEnd(targetLength [, padString])
 // string: The string to pad.
 // targetLength: The length of the resulting padded string. If the current string length is equal to or greater than targetLength, the string is not padded.
 // padString (optional): The string to pad with. If not specified, the space character (" ") is used as the default padding.


// See the example below.

// let numb = 5;
// let text = numb.toString();
// let padded = text.padEnd(4,"0");

// console.log(padded)
// output: 5000

let text = "5";
let padded = text.padEnd(4,"x");
console.log(padded)
// Output : 5xxx

let str = "Hello";
let paddedStr = str.padEnd(10, "!");
console.log(paddedStr);
// Output: "Hello!!!!"

// let str = "Hello";
// let paddedStr = str.padEnd(10);

// console.log(paddedStr);
// // Output: "Hello     "
