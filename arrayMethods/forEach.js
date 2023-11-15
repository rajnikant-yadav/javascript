// The forEach method in JavaScript is an array method used to iterate over elements in an array. It executes a provided function once for each array element, in ascending order.
//example 1
// function func() {
// const items = [12, 24, 36];
//     const multarr = [];
//     items.forEach(function (item) {
//         multarr.push(item * item);
//     });

//     return multarr
// }
// a=func();
// console.log(a)


// example 2
 var func=() =>{
const items = ['a', "b", "c"];
    const objarr = [];
  items.forEach((item)=> {
       
        var obj={key:item}
        objarr.push(obj);
    });

    return objarr
}
a=func();
console.log(a)

const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));
