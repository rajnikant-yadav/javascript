class Person {
    constructor(firstName, lastName, age) {
        // Private properties are defined using closures
        let _firstName = firstName;
         this._lastName = lastName;
        let _age = age;

        // Public methods to access private properties
        this.getFirstName = function() {
            return _firstName;
        };

        this.getLastName = function() {
            return _lastName;
        };

        this.getAge = function() {
            return _age;
        };
    }

    // Public method that uses private properties
    introduce() {
        console.log(`Hello, I'm ${this.getFirstName()} ${this._lastName} and I'm ${this.getAge()} years old.`);
    }
}

const person = new Person("Rajnikant", "Yadav", 26);

// Accessing private properties using public methods
person.introduce(); // Output: Hello, I'm Rajnikant Yadav and I'm 30 years old.
