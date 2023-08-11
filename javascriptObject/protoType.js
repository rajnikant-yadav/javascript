// Defining a constructor function named 'Mobile'
var Mobile = function(model_no) {
    // Instance Members: These properties are unique for each object
    this.model = model_no;
    this.price = 3000;
};

// Creating objects using the constructor
var samsung = new Mobile('Galaxy');
var nokia = new Mobile('3310');

// Adding a new property 'newentry' to the 'samsung' object
samsung["newentry"] = 20;

// Prototype Members: These properties are shared among all instances created from the prototype
// By adding properties to the prototype, they are accessible to all instances
Mobile.prototype.color = 'white';

// Accessing the 'color' property through the 'samsung' object
console.log(samsung.color); // Output: white

// Accessing the 'newentry' property through the 'samsung' object
console.log(samsung.newentry); // Output: 20

// The 'color' property added to the prototype is accessible to all instances,
// while the 'newentry' property added directly to the 'samsung' object is unique to that instance.
// This demonstrates the concept of prototype-based inheritance.

// Looping over prototype object
for (var key in samsung){
    console.log(samsung[key]);
}