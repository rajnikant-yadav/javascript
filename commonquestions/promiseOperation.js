// Implement a set of asynchronous arithmetic operations using JavaScript promises. Create three functions, sum, mult, and subtract, each returning a promise that resolves to the result of the corresponding arithmetic operation. Additionally, use these functions to perform asynchronous operations and calculate the total.

function sum(a, b) {
    return new Promise((resolve, reject) => {
 
        resolve(a + b);
      }
    );
  }
  
  function mult(a, b) {
    return new Promise((resolve, reject) => {
        resolve(a * b);
    });
  }
  
  function subtract(a, b) {
    return new Promise((resolve, reject) => {
        resolve(a - b);
      
    });
  }
  
  (async () => {
    try {
      const sumResult = await sum(5, 3);
      const multResult = await mult(4, 2);
      const subtractResult = await subtract(10, 6);
  
      const total = sumResult + multResult + subtractResult;
      console.log('Total:', total);
    } catch (error) {
      console.error('Error:', error.message);
    }
  })();
