var names = ["Rahul", "Sonam", "Sumit", "Raj", "Rohan"];

// The slice( ) method returns a shallow copy of a portion of an array into a new array object selected from begin to
// end (end not included). The original array will not be modified.
// Syntax: - array_name.slice(start, end)

// var Newnames=names.slice(0,2)
// console.log(Newnames)
// output  [ 'Rahul', 'Sonam' ]

// var Newnames=names.slice(-7,-1)
// console.log(Newnames)
// output [ 'Rahul', 'Sonam', 'Sumit', 'Raj' ]
// In this example:

// The slice method is used on the names array.
// The starting index is calculated as -7, which effectively means starting from the beginning of the array (because it wraps around).
// The ending index is calculated as -1, which means it goes up to, but does not include, the element at index -1 (which is equivalent to the last element in the array).
// Therefore, the output is an array containing elements from index 0 to 3 in the original names array: ['Rahul', 'Sonam', 'Sumit', 'Raj'].

// var Newnames=names.slice(-3,-1)
// console.log(Newnames)
// output [ 'Sumit', 'Raj' ]


// var Newnames=names.slice(0,9)
// console.log(Newnames)
//  output  [ 'Rahul', 'Sonam', 'Sumit', 'Raj', 'Rohan' ]


// var Newnames=names.slice(0,5)
// console.log(Newnames)
//  output  [ 'Rahul', 'Sonam', 'Sumit', 'Raj', 'Rohan' ]

const a=[1,2,3,4,5,"ab","cd"]
// console.log(a.slice(3))

//[ 4, 5, 'ab', 'cd' ]

console.log(a.slice(2,-1))
// output [ 3, 4, 5, 'ab' ]

console.log(a)