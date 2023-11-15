// It is used to find position of an array value, if value not in the array then it return -1
// Syntax array.indexOf(searchElement, fromIndex)

var arr = ["Rahul", "Sonam", "Raj", "Sumit", "Raj"];
var position1 = arr.indexOf("Raj");
var position2 = arr.indexOf("Raj", 3);
var position3 = arr.indexOf("Priti");
console.log(position1);
console.log(position2);
console.log(position3);