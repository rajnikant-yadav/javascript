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
        email: "test@example.com",
        phone: "23679999"
    },
    createdBy: "Rajnikant Yadav"
};

// 1. Using for...in loop (for objects)
for (const key in nestedObject) {
    console.log(`${key}: ${nestedObject[key]}`);
}
/* Expected Output:
firstName: Rajnikant
lastName: Yadav
age: 30
address: [object Object]
hobbies: Reading,Cooking,Gardening
contact: [object Object]
createdBy: Rajnikant Yadav
*/

// 2. Using Object.keys() (for objects)
const keys = Object.keys(nestedObject);
for (const key of keys) {
    console.log(`${key}: ${nestedObject[key]}`);
}
/* Expected Output:
firstName: Rajnikant
lastName: Yadav
age: 30
address: [object Object]
hobbies: Reading,Cooking,Gardening
contact: [object Object]
createdBy: Rajnikant Yadav
*/

// 3. Using Object.values() (for objects)
const values = Object.values(nestedObject);
for (const value of values) {
    console.log(value);
}
/* Expected Output:
Rajnikant
Yadav
30
[object Object]
Reading,Cooking,Gardening
[object Object]
Rajnikant Yadav
*/

// 4. Using Object.entries() (for objects)
const entries = Object.entries(nestedObject);
for (const [key, value] of entries) {
    console.log(`${key}: ${value}`);
}
/* Expected Output:
firstName: Rajnikant
lastName: Yadav
age: 30
address: [object Object]
hobbies: Reading,Cooking,Gardening
contact: [object Object]
createdBy: Rajnikant Yadav
*/

// 5. Using forEach() for array properties
nestedObject.hobbies.forEach(hobby => {
    console.log(`Hobby: ${hobby}`);
});
/* Expected Output:
Hobby: Reading
Hobby: Cooking
Hobby: Gardening
*/

// 6. Using nested loops for deeply nested properties
for (const key in nestedObject) {
    if (typeof nestedObject[key] === "object") {
        for (const nestedKey in nestedObject[key]) {
            console.log(`${nestedKey}: ${nestedObject[key][nestedKey]}`);
        }
    } else {
        console.log(`${key}: ${nestedObject[key]}`);
    }
}
/* Expected Output:
firstName: Rajnikant
lastName: Yadav
age: 30
street: 1234
city: City
state: State
postalCode: 782345
Hobby: Reading
Hobby: Cooking
Hobby: Gardening
email: test@example.com
phone: 23679999
createdBy: Rajnikant Yadav
*/
