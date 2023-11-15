// The join method in JavaScript is used to concatenate the elements of an array into a single string. It takes an optional parameter, the separator, which is inserted between the elements in the resulting string. If no separator is provided, a comma is used by default.

// Syntax array.join(separator)

// Join ex1
var joinarr=[1,2,3,4,5,6]
var temp=joinarr.join()
console.log(temp)
// output 1,2,3,4,5,6

//exp2
// var joinarr=[1,2,3,4,5,6]
// var temp=joinarr.join("")
// console.log(temp)
// output 123456

// example3
// var joinarr=[1,2,3,4,5,6]
// var temp=joinarr.join(" ")
// console.log(temp)
//output 1 2 3 4 5 6

//ex4
// var joinarr=[1,2,3,4,5,6]
// var temp=joinarr.join("/")
// console.log(temp)
// output 1/2/3/4/5/6


// ex5
// var joinarr=[1,2,3,4,5,6]
// var temp=joinarr.join("or")
// console.log(temp)
// otput 1or2or3or4or5or6

// ex6
// var joinarr=[1,2,3,4,5,6]
// var temp=joinarr.join(" and ")
// console.log(temp)
// output  1 and 2 and 3 and 4 and 5 and 6


// ex6
// var joinarr=[1,2,3,4,5,6]
// var temp=joinarr.join("\n")
// console.log(temp)
/* output 
1
2
3
4
5
6 */

// ex7
// var joinarr=[1,2,3,4,5,6]
// var temp=joinarr.join(",")
// console.log(temp)

// // 1,2,3,4,5,6

const fruits = ['apple', 'banana', 'orange'];
const vegetables = ['carrot', 'potato', 'broccoli'];
const allItems = fruits.join(',') + ',' + vegetables.join(',');
console.log(allItems);
// Output:   apple,banana,orange,carrot,potato,broccoli
