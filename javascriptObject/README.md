<!-- **Short note of JAVASCRIPT Object** -->
## Short note on JAVASCRIPT Object
```diff
- Main topic in JS Objects
```
1. How to create JS Objects
2. How to access js Objects
3. How to delete properties of js Objects
5. Factory Function
6. Constructor
7. Looping on JS object
8. How to check objects properties exits or not
9. Class
10. Private properties in class
11. Accessing private properties using public method
12. What is Prototype
13. What is Prototype objects
14. Inheritance 
15. Multilevel Inheritence
16. Method overriding
17. Composition or Mixins of objects
18. ES6 Class
19. Default constructor



## Creating Objects in JavaScript

In JavaScript, there are multiple ways to create objects. Here are some common methods:

### 1. Object Literal:

```javascript
var fees = {};
fees['a'] = 10;
fees['b'] = 20;
fees['c'] = 30;

var obj = { a: 10, b: 20, c: 30 };

const person = {
    firstName: "Rajnikant",
    lastName: "Yadav",
    age: 26,
    greet: function() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }
};

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
person.greet();
person.age = 27;
console.log(person.age);
