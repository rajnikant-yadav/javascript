// Syntax
// // Arrow function
// every((element) => { /* … */ })
// every((element, index) => { /* … */ })
// every((element, index, array) => { /* … */ })

// This method checks if at least one element in the array that passes the condition, returning true or false as appropriate.


const ages = [32, 33, 16, 40];

// const result=ages.every(function checkAge(age) {
//     return age > 18;
//   })

// console.log(result)

// const result=ages.every((age)=> {
//     return age > 18;
//   })

// console.log(result)

const result=ages.some(age=> age > 34)

console.log(result)




