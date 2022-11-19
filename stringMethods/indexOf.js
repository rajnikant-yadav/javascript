// indexOf() Method
// The indexOf( ) method takes a string argument and returns the index of the first occurance of the argument in the string. If the argument is not found returns -1 . This method also accepts an optional second argument that specifies the index at which to start the search. 
// The indexOf() method cannot take powerful search values (regular expressions).
var str = "Hi guys Lets Learn JavaScript";
// console.log(str.indexOf("e"));	// 9
// console.log(str.indexOf("e", 10));	//14
// console.log(str.indexOf("Lets"));	// 8

// search() Method
// The search() method searches a string for a specified value and returns the position of the match 
// The search() method cannot take a second start position argument.
			
// console.log(str.search("e"));
// console.log(str.search("Lets"));

// slice()
// The slice() extracts a part of a string and returns the extracted part in a new string. The method takes 2 parameters: the starting index (position), and the ending index (position). The method returns a string containing the string beginning at the given index up to but not including the character at the index speficied by the second argument. If a parameter is negative, the position is counted from the end of the string.  
			
var str = "Hi guys Lets Learn JavaScript";
console.log(str.slice(8, 14));	// 14 not included
