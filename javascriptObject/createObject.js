//  In JavaScript, there are multiple ways to create objects. Here are some common methods: 

// 1. Object Literal:
// The simplest way to create an object is using an object literal, which involves defining properties and their values directly within curly braces {}.
var fees = { };		// Declaring empty object Using Object Literal
fees['a'] = 10;	// initializing 
fees['b'] = 20;
fees['c'] = 30;
/*
fees.a = 100;
fees.b = 200;
fees.c = 300;
*/
console.log(fees['a']);


// Declaring object and initializing 
var obj={a:10,b:20,c:30}
console.log(obj)

const person = {
    firstName: "Rajnikant",
    lastName: "Yadav",
    age: 26,
    greet: function() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }
};

console.log(person.firstName); // Output: Rajnikant
console.log(person.lastName);  // Output: Yadav
console.log(person.age);       // Output: 30
person.greet(); // Output: Hello, my name is Rajnikant Yadav
person.age = 27;
console.log(person.age); // Output: 31





// 2. Declaring an empty object using Object Constructor
var myObject = new Object();
myObject.propertyA = 20;
myObject["propertyB"] = 40;
console.log(myObject, myObject.propertyB);   // Output     { propertyA: 20, propertyB: 40 } 40







// 3. Defining a constructor function for creating Person objects
function Person(firstName, lastName, age) {
    // Inside the constructor, 'this' refers to the instance being created
    // Assigning properties to the instance based on the provided arguments
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    
    // Defining a method 'greet' for the instance
    this.greet = function() {
        // 'this' refers to the current instance when the method is called
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    };
}

// Creating a new instance of Person using the constructor
const person = new Person("Rajnikant", "Yadav", 26);

// The 'person' instance now has properties and methods defined by the constructor
// It has 'firstName', 'lastName', 'age' properties and a 'greet' method

// Calling the 'greet' method of the 'person' instance
person.greet(); // Output: Hello, my name is Rajnikant Yadav




// 4. Creating an object prototype named 'personPrototype'
const personPrototype = {
    greet: function() {
        // 'this' refers to the instance that will inherit this method
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }
};

// Creating a new object 'person' using 'personPrototype' as its prototype
const person = Object.create(personPrototype);

// Adding properties to the 'person' instance
person.firstName = "Rajnikant";
person.lastName = "Yadav";
person.age = 26;

// Calling the 'greet' method of the 'person' instance
person.greet(); // Output: Hello, my name is Rajnikant Yadav






// 4. ES6 Classes:
// With ES6, you can create objects using classes, which provide a more structured and convenient way to define objects and their behaviors.

// Defining a class named 'Person'
class Person {
    // The constructor method is called when creating an instance
    constructor(firstName, lastName, age) {
        // Assigning properties to the instance
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    
    // Defining a method inside the class
    greet() {
        // 'this' refers to the instance when the method is called
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }
}

// Creating an instance of the 'Person' class
const person = new Person("Rajnikant", "Yadav", 26);

// The 'person' instance now has properties and methods defined by the class
// It has 'firstName', 'lastName', 'age' properties and a 'greet' method

// Calling the 'greet' method of the 'person' instance
person.greet(); // Output: Hello, my name is Rajnikant Yadav






// 5. Factory Functions:
// Factory functions are functions that create and return objects. They allow you to encapsulate the creation logic and potentially return different variations of objects.

// Defining a factory function named 'createPerson'
function createPerson(firstName, lastName, age) {
    return {
        firstName,
        lastName,
        age,
        greet() {
            console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
        }
    };
}

// Creating an object using the 'createPerson' factory function
const person = createPerson("Rajnikant", "Yadav", 26);

// The 'person' object now has properties and methods defined by the factory function
// It has 'firstName', 'lastName', 'age' properties and a 'greet' method

// Calling the 'greet' method of the 'person' object
person.greet(); // Output: Hello, my name is Rajnikant Yadav
