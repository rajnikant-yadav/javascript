// Replacing String Content
// The replace() method replaces a specified value with another value in a string:

// let text = "Please visit Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools");
// console.log(newText)


// Note
// The replace() method does not change the string it is called on.

// The replace() method returns a new string.

// The replace() method replaces only the first match

// If you want to replace all matches, use a regular expression with the /g flag set. See examples below.

// By default, the replace() method replaces only the first match:


// By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:

// Example
// let text = "Please visit Microsoft!";
// let newText = text.replace("MICROSOFT", "W3Schools");
// console.log(newText)

// To replace case insensitive, use a regular expression with an /i flag (insensitive):


// let text = "Please visit Microsoft!";
// let newText = text.replace(/MICROSOFT/i, "W3Schools");

// console.log(newText)



// To replace all matches, use a regular expression with a /g flag (global match):

// Example
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace(/Microsoft/g, "W3Schools");

console.log(newText)

