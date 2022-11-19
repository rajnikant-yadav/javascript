// Converting a String to an Array
// A string can be converted to an array with the split() method:
// text.split(",")    // Split on commas
// text.split(" ")    // Split on spaces
// text.split("|")    // Split on pipe

// If the separator is omitted, the returned array will contain the whole string in index [0].

// If the separator is "", the returned array will be an array of single characters:

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