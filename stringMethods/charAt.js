// Syntax
// charAt(index)

// Parameters
// index
// An integer between 0 and str.length - 1. If the index cannot be converted to the integer or no index is provided, the default is 0, so the first character of str is returned.

// Return value
// A string representing the character (exactly one UTF-16 code unit) at the specified index. If index is out of range, charAt() returns an empty string.

const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character at index ${index} is ${sentence.charAt(index)}`);