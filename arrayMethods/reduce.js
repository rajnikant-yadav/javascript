// Syntax
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// Parameters
// Parameter	Description
// function()	Required.
// A function to be run for each element in the array.
// Reducer function parameters:
// total	Required.
// The initialValue, or the previously returned value of the function.
// currentValue	Required.
// The value of the current element.
// currentIndex	Optional.
// The index of the current element.
// arr	Optional.
// The array the current element belongs to.

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10
