// The splice() method changes the contents of an array by removing existing elements
// and/or adding new elements. This method changes the original array.
// Syntax:- array_name.splice (start, deletecount, replacevalues);

var names = ["Rahul", "Sonam", "Sumit", "Raj", "Rohan"];

// console.log(names.splice(2))
// console.log(names)
// output   [ 'Sumit', 'Raj', 'Rohan' ]  
//[ 'Rahul', 'Sonam' ]

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


