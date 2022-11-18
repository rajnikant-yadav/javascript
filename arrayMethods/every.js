// Syntax
// // Arrow function
// every((element) => { /* … */ })
// every((element, index) => { /* … */ })
// every((element, index, array) => { /* … */ })

const ages = [32, 33, 16, 40];

// const result=ages.every(function checkAge(age) {
//     return age > 18;
//   })

// console.log(result)

// const result=ages.every((age)=> {
//     return age > 18;
//   })

// console.log(result)

const result=ages.every(age=> age > 10)

console.log(result)




