// Superclass definition
class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        return "Animal sound";
    }
}

// Subclass that inherits from Animal
class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    makeSound() {
        return "Woof woof!";
    }
}

// Subclass that inherits from Animal
class Cat extends Animal {
    constructor(name) {
        super(name);
    }

    makeSound() {
        return "Meow meow!";
    }
}

// Create instances of subclasses
const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");

// Using overridden methods
console.log(`${dog.name} says: ${dog.makeSound()}`); // Output: Buddy says: Woof woof!
console.log(`${cat.name} says: ${cat.makeSound()}`); // Output: Whiskers says: Meow meow!
