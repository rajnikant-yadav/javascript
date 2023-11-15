// The every method in JavaScript is used to check if all elements in an array pass a certain condition specified by a provided function. It iterates through each element in the array and returns true only if the given function returns true for every element. If any element fails the condition, it returns false. It's a concise way to determine whether all elements in an array satisfy a specified condition.

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

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 19 },
];

// Using every to check if all people are adults
const allAdults = people.every(person=> person.age >= 18
);

console.log(allAdults); // Output: true


const words = ['apple', 'banana', 'kiwi', 'orange'];

// Check if all strings contain the substring 'a'
const allWordsContainA = words.every(function(word) {
    return word.includes('a');
});

console.log(allWordsContainA); // Output: false






