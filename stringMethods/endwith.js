// endsWith()
// This function checks whether a string ends with specified string or characters.
// Syntax: str.endsWith(searchString[, length])
// Parameters:
// searchString: The characters to be searched for at the end of the string.
// "If provided, it is the substring length of str. The endsWith method examines only the last substringLength characters."

var mystr = "List of javascript functions";
var n = mystr.endsWith("s");
console.log(n)
//output: True

const str = "Hello, world";
console.log(str.endsWith("world", 11)); // Output: false
console.log(str.endsWith("world", 12)); // Output: true
console.log(str.length)   // 12

// The second line checks if the string, when considering only the first 11 characters ("Hello, worl"), ends with the substring "world". Since "Hello, worl" does not end with "world", it returns false.

// The third line checks if the string, when considering the full 12 characters ("Hello, world"), ends with the substring "world". In this case, "Hello, world" does end with "world", so it returns true