// There are a few ways to delete properties from JavaScript objects. Here are the main methods:

// Using the delete Keyword:
// The delete keyword is used to remove a property from an object.

const nestedObject = {
    firstName: "Rajnikant",
    lastName: "Yadav",
    age: 26,
    address: {
        street: "123 Main St",
        city: "Cityville",
        state: "State",
        postalCode: "12345",
        landmarks: ["Park", "Library"],
        coordinates: {
            latitude: 40.7128,
            longitude: -74.0060
        }
    },
    hobbies: ["Reading", "Cooking", "Gardening"],
    greet: function() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    },
    key: 'value',
    nullValue: null,
    intNumber: 42,
    charValue: 'A'
};

// Deleting properties using the delete keyword
delete nestedObject.hobbies; // Deletes the 'hobbies' array
delete nestedObject.address.landmarks; // Deletes the 'landmarks' array within 'address'
delete nestedObject.address.coordinates.longitude; // Deletes the 'longitude' property within 'coordinates'
delete nestedObject.greet; // Deletes the 'greet' method

// // Deleting properties using setting them to undefined
// nestedObject.key = undefined; // Removes the 'key' property
// nestedObject.nullValue = undefined; // Removes the 'nullValue' property

// console.log(nestedObject);


// // Deleting properties using Object.prototype.hasOwnProperty()
// You can also check if a property exists before deleting it, especially if the property is inherited from a prototype.
// if (nestedObject.hasOwnProperty("hobbies")) {
//     delete nestedObject.hobbies; // Deletes the 'hobbies' array
// }
// if (nestedObject.address.hasOwnProperty("landmarks")) {
//     delete nestedObject.address.landmarks; // Deletes the 'landmarks' array within 'address'
// }
// if (nestedObject.address.coordinates.hasOwnProperty("longitude")) {
//     delete nestedObject.address.coordinates.longitude; // Deletes the 'longitude' property within 'coordinates'
// }
// if (nestedObject.hasOwnProperty("greet")) {
//     delete nestedObject.greet; // Deletes the 'greet' method
// }



// Deleting properties using Reflect.deleteProperty()
//This method can be used to delete a property from an object. It's more versatile and returns a boolean indicating whether the property was successfully deleted.
// Reflect.deleteProperty(nestedObject, "hobbies"); // Deletes the 'hobbies' array
// Reflect.deleteProperty(nestedObject.address, "landmarks"); // Deletes the 'landmarks' array within 'address'
// Reflect.deleteProperty(nestedObject.address.coordinates, "longitude"); // Deletes the 'longitude' property within 'coordinates'
// Reflect.deleteProperty(nestedObject, "greet"); // Deletes the 'greet' method
