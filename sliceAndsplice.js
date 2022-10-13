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

// var Newnames=names.slice(-3,-1)
// console.log(Newnames)
// output [ 'Sumit', 'Raj' ]


// var Newnames=names.slice(0,9)
// console.log(Newnames)
//  output  [ 'Rahul', 'Sonam', 'Sumit', 'Raj', 'Rohan' ]


// var Newnames=names.slice(0,5)
// console.log(Newnames)
//  output  [ 'Rahul', 'Sonam', 'Sumit', 'Raj', 'Rohan' ]



// The splice() method changes the contents of an array by removing existing elements
// and/or adding new elements. This method changes the original array.
// Syntax:- array_name.splice (start, deletecount, replacevalues);
// names.splice(2)
// console.log(names)
// output   [ 'Rahul', 'Sonam' ]

// var Newnames=names.splice(2)
// console.log(Newnames)
// output  [ 'Sumit', 'Raj', 'Rohan' ]


// names.splice(2,1)
// console.log(names)
// output  [ 'Rahul', 'Sonam', 'Raj', 'Rohan' ]

// names.splice(2,2)
// console.log(names)
// output  [ 'Rahul', 'Sonam', 'Rohan' ]


// names.splice(2,1,"hp")
// console.log(names)
// output  [ 'Rahul', 'Sonam', 'hp', 'Raj', 'Rohan' ]

// names.splice(2,2,"hp","del")
// console.log(names)
// output [ 'Rahul', 'Sonam', 'hp', 'del', 'Rohan' ]


