// It is used to check wheather passed value is array or not

var arr = ["Rahul", "Sonam", "Sumit", "Raj"];
var result1 = Array.isArray(["Rose", "Khoj"]);
var result2 = Array.isArray("IAmString");
var result3 = Array.isArray(arr);
console.log(result1);
console.log(result2);
console.log(result3);
// output 
// true
// false
// true