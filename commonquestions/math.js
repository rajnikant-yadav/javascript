// Create a JavaScript module for performing basic arithmetic operations. Implement a module named math that exports three functions: add, multiply, and subtract. The functions should take two parameters each and return the result of the corresponding operation.

// math.js

// Function to add two numbers
function add(a, b) {
    return a + b;
  }
  
  // Function to multiply two numbers
  function multiply(a, b) {
    return a * b;
  }
  
  // Function to subtract two numbers
  function subtract(a, b) {
    return a - b;
  }
  
  // Export the functions
  module.exports = {
    add,
    multiply,
    subtract
  };

  
//   // main.js

// // Import the math module
// const math = require('./math');

// // Example usage
// const resultAdd = math.add(5, 3);
// const resultMultiply = math.multiply(4, 2);
// const resultSubtract = math.subtract(10, 6);

// console.log('Result of addition:', resultAdd);
// console.log('Result of multiplication:', resultMultiply);
// console.log('Result of subtraction:', resultSubtract);


//  ECMAScript 6 (ES6)
// math.js

// // Function to add two numbers
// function add(a, b) {
//     return a + b;
//   }
  
//   // Function to multiply two numbers
//   function multiply(a, b) {
//     return a * b;
//   }
  
//   // Function to subtract two numbers
//   function subtract(a, b) {
//     return a - b;
//   }
  
//   // Export all functions in one statement
//   export { add, multiply, subtract };
  

// main.js

// // Import all functions from the math module
// import * as math from './math';

// // Example usage
// const resultAdd = math.add(5, 3);
// const resultMultiply = math.multiply(4, 2);
// const resultSubtract = math.subtract(10, 6);

// console.log('Result of addition:', resultAdd);
// console.log('Result of multiplication:', resultMultiply);
// console.log('Result of subtraction:', resultSubtract);
