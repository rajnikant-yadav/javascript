// findIndex( )
// This method returns the index of the first element in an array that pass the test in a testing function.

//  find( )
// This method returns the value of the first element in an array that pass the test in a testing function.

const array1 = [5, 12, 8, 130, 44];

const found = array1.findIndex(element => element > 30);

console.log(found);
// expected output: 12
