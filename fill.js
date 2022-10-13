// The fill() method fills all the elements in an array with a static
// value.
// Syntax:- array_name.fill(value, start, end)


var arr = ["Rahul", "Sonam", "Raj", "Sumit"];
			
// All elements Don
// arr.fill("hello");	
// console.log(arr);
// output  [ 'hello', 'hello', 'hello', 'hello' ]



arr.fill("hello",1,3);	
console.log(arr);
// output [ 'Rahul', 'hello', 'hello', 'Sumit' ]