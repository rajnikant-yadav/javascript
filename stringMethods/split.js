// Converting a String to an Array
// A string can be converted to an array with the split() method:
// text.split(",")    // Split on commas
// text.split(" ")    // Split on spaces
// text.split("|")    // Split on pipe

// If the separator is omitted, the returned array will contain the whole string in index [0].

// If the separator is "", the returned array will be an array of single characters:

// Syntax : string.split(separator, limit)

// split(delimiter, [limit])

//split(delimiter)
// var message="Welcome to jQuery4u"
// //word[0] contains "We"
// //word[1] contains "lcome to jQuery4u"
// var word=message.split(" ")
// console.log(word)


var message="Welcome to jQuery4u"
var word=message.split(" ")
console.log(word)

// ['Welcome', 'to', 'jQuery4u' ]

// let str = "apple,banana,orange";
// let fruits = str.split(',');

// console.log(fruits);
// // Output: ["apple", "banana", "orange"]

// You can also use a regular expression as the separator. Here's an example:
let sentence = "The quick brown fox jumps over the lazy dog";
let words = sentence.split(/\s+/);

console.log(words);
// Output: ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]
// In this example, the regular expression /\s+/ is used to split the string sentence into an array of words, where \s+ matches one or more whitespace characters.

// If you want to limit the number of splits, you can provide the limit parameter:
let str = "apple,banana,orange,grape";
let fruits = str.split(',', 2);

console.log(fruits);
// Output: ["apple", "banana"]


