const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort());


const points = [40, 100,100, 1, 5, 25, 10];
// points.sort(function(a, b){return a - b});
// console.log(points)


// [ 1, 5, 10, 25, 40, 100 ]


points.sort(function(a, b){return b - a});
console.log(points)


// Find the Highest (or Lowest) Array Value
// There are no built-in functions for finding the max or min value in an array.

// However, after you have sorted an array, you can use the index to obtain the highest and lowest values.

// Sorting ascending:




points.sort(function(a, b){return a - b});
// now points[0] contains the lowest value
// and points[points.length-1] contains the highest value


points.sort(function(a, b){return b - a});
// now points[0] contains the highest value
// and points[points.length-1] contains the lowest value



// Sorting Object Arrays
// JavaScript arrays often contain objects:

// Example
const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];


const sorted=cars.sort(function(a, b){return a.year - b.year});

console.log(sorted)