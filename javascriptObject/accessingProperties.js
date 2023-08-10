// Here is the example how you can access the object properties
const complexObject = {
    name: "Complex Object",
    description: "An example of a complex JavaScript object",
    numbers: [1, 2, 3, 4, 5],
    details: {
        createdBy: "Rajnikant Yadav",
        createdAt: "2022-03-09",
    },
    displayNumbers: function() {
        console.log("Numbers:", this.numbers);
    }
};

// Accessing properties using dot notation
console.log("Name:", complexObject.name);
console.log("Description:", complexObject.description);

// Accessing array elements
console.log("Third number:", complexObject.numbers[2]);

// Accessing nested object properties
console.log("Created by:", complexObject.details.createdBy);

// Calling a method
complexObject.displayNumbers();

// Accessing properties using bracket notation
console.log("Name (using bracket notation):", complexObject["name"]);

// Adding a new property
complexObject.version = 1.0;
console.log("Version:", complexObject.version);

// Changing a property value
complexObject.name = "Updated Complex Object";
console.log("Updated name:", complexObject.name);




// Here's an example of a nested JavaScript object:
const nestedObject = {
    firstName: "Rajnikant",
    lastName: "Yadav",
    age: 30,
    address: {
        street: "1234",
        city: "City",
        state: "State",
        postalCode: "782345"
    },
    hobbies: ["Reading", "Cooking", "Gardening"],
    contact: {
        email: "test.@example.com",
        phone: "23679999"
    },
    createdBy: "Rajnikant Yadav"
};

// Accessing nested object properties using dot notation
console.log("First Name:", nestedObject.firstName);
console.log("Street:", nestedObject.address.street);
console.log("Hobbies:", nestedObject.hobbies[0]);

// Accessing nested object properties using bracket notation
console.log("Last Name:", nestedObject["lastName"]);
console.log("City:", nestedObject["address"]["city"]);
console.log("Email:", nestedObject["contact"]["email"]);

console.log("Created By:", nestedObject.createdBy);
