//  Here are different ways you can write a JavaScript class:

// 1. Using ES6 Class Syntax:
// The most common way to define a class in modern JavaScript.

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person = new Person("Rajnikant", "Yadav");
console.log(person.getFullName());

// 2. Using Function Constructor:
// This is the traditional way of defining classes in JavaScript.

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;

//     this.getFullName = function() {
//         return `${this.firstName} ${this.lastName}`;
//     };
// }

// const person = new Person("Rajnikant", "Yadav");
// console.log(person.getFullName());

// Using Class Expression:
// Defining a class using an expression.

// const Person = class {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// };

// const person = new Person("John", "Doe");
// console.log(person.getFullName());
