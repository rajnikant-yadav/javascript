// This method creates a new array with the results of calling a provided function on every element in this array.
// The map() method creates a new array with the results of calling a provided function on
// every element in the calling array.
// The map() method calls the provided function once for each element in an array, in
// order.
// map() does not execute the function for array elements without values.
// map() does not change the original array.
// Syntax:- array_name.map(function(currentValue, index, array)
// {
// }, thisValue)

const arr=[1,2,3,4,5,6,7]
const mapped=arr.map(element=>element+10)
console.log(mapped)


var agesArr = [25, 36, 49, 64, 81];

function root() {
    var roots = agesArr.map(Math.sqrt);
    return roots;
};
console.log(root());
//This will return: [ 5, 6, 7, 8, 9 ];