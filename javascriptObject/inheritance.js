// Base constructor function for creating a Person
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// Adding a method to the Person prototype
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
};

// Child constructor function for creating a Student
function Student(firstName, lastName, studentId) {
    // Inherit properties from the Person constructor using call()
    Person.call(this, firstName, lastName);

    // Additional property specific to Student
    this.studentId = studentId;
}

// Inherit methods from the Person prototype using Object.create()
Student.prototype = Object.create(Person.prototype);

// Add a method specific to Student
Student.prototype.getStudentInfo = function() {
    return `${this.getFullName()} (ID: ${this.studentId})`;
};

// Creating instances
const person = new Person("rajnikant", "yadav");
const student = new Student("Jane", "Smith", "12345");

// Using inherited methods
console.log(person.getFullName()); // Output: John Doe
console.log(student.getStudentInfo()); // Output: Jane Smith (ID: 12345)

// Checking inheritance using instanceof
console.log(student instanceof Person); // Output: true
console.log(student instanceof Student); // Output: true
