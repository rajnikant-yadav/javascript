//  find( )
// This method returns the value of the first element in an array that pass the test in a testing function. If element not passed test then it return undefine

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12
