// Super Class
class Mobile {
    constructor() {
        this.a = 10;
    }
}

// Prototype Property of Mobile
Mobile.prototype.z = 30;

// Sub Class
class Samsung extends Mobile {
    constructor() {
        super(); // Call the Super class constructor
        this.b = 20;
    }
}

class Galaxy extends Samsung {
    constructor() {
        super(); // Call the Samsung class constructor
        this.c = 100;
    }
}

// Creating instances
const m = new Mobile();
const s = new Samsung();
const g = new Galaxy();

console.log("Galaxy Object can access:");
console.log("Mobile A:", g.a);
console.log("Samsung B:", g.b);
console.log("Mobile Prototype Z:", g.z);
console.log("Galaxy C:", g.c);
console.log();

console.log("Samsung Object can access:");
console.log("Mobile A:", s.a);
console.log("Samsung B:", s.b);
console.log("Mobile Prototype Z:", s.z);
console.log("Galaxy C:", s.c);
console.log();

console.log("Mobile Object can access:");
console.log("Mobile A:", m.a);
// 'b', 'z', and 'c' properties won't be accessible on the Mobile instance









// // Parent class Mobile
// class Mobile {
//     constructor() {}

//     getModel() {
//         return this.model;
//     }
// }

// // Child class Samsung inheriting from Mobile
// class Samsung extends Mobile {
//     constructor(model, price) {
//         super();
//         this.model = model;
//         this.price = price;
//     }

//     getPrice() {
//         return this.price;
//     }
// }

// // Child class Lenovo inheriting from Mobile
// class Lenovo extends Mobile {
//     constructor(model) {
//         super();
//         this.model = model;
//     }
// }

// // Creating instances
// const galaxy = new Samsung("Galaxy", 3000);
// const phab2 = new Lenovo("Phab 2");

// // Accessing methods
// console.log(galaxy.getModel()); // Output: Galaxy
// console.log(galaxy.getPrice()); // Output: 3000
// console.log(phab2.getModel());   // Output: Phab 2






// // Parent constructor function Mobile
// var Mobile = function() {};

// // Adding a method to the Mobile prototype
// Mobile.prototype.getModel = function() {
//     return this.model;
// };

// // Child constructor function Samsung
// var Samsung = function(model, price) {
//     // Calling the parent constructor
//     Mobile.call(this);
//     this.model = model;
//     this.price = price;
// };

// // Inheriting from Mobile
// Samsung.prototype = Object.create(Mobile.prototype);
// Samsung.prototype.constructor = Samsung;

// // Adding a method to the Samsung prototype (child-specific method)
// Samsung.prototype.getPrice = function() {
//     return this.price;
// };

// // Child constructor function Lenovo
// var Lenovo = function(model) {
//     // Calling the parent constructor
//     Mobile.call(this);
//     this.model = model;
// };

// // Inheriting from Mobile
// Lenovo.prototype = Object.create(Mobile.prototype);
// Lenovo.prototype.constructor = Lenovo;

// // Creating instances
// var galaxy = new Samsung("Galaxy", 3000);
// var phab2 = new Lenovo("Phab 2");

// // Accessing methods
// console.log(galaxy.getModel()); // Output: Galaxy
// console.log(galaxy.getPrice()); // Output: 3000
// console.log(phab2.getModel());   // Output: Phab 2
