// Syntax
// array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)
// Parameter	Description
// callback: A function that is called for each element in the array. It takes four arguments:
// accumulator: The accumulator accumulates the callback's return values. It is the accumulated result of the previous callback invocation, or initialValue if it's the first callback invocation.
// currentValue: The current element being processed in the array.
// currentIndex (optional): The index of the current element being processed.
// array (optional): The array reduce was called upon.
// initialValue (optional): An initial value to use as the first argument to the first call of the callback. If no initial value is supplied, the first element in the array will be used as the initial accumulator value, and callback will be called starting from the second element.

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  console.log(accumulator)
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15
