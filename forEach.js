function func() {
      
// Original array
// example 1
const items = [12, 24, 36];
    const multarr = [];

    items.forEach(function (item) {
        multarr.push(item * item);
    });

    return multarr
}
a=func();

