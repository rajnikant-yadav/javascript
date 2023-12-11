// DEFINING FUNCTION
function findDuplicates(arr) {
    // Create a copy of the array to avoid modifying the original
    let sortedArr = arr.slice().sort();
    let resultArr = [];

    for (let i = 0; i < sortedArr.length - 1; i++) {
        if (sortedArr[i + 1] === sortedArr[i]) {
            // Check if the current element is not already in the result array
            if (!resultArr.includes(sortedArr[i])) {
                resultArr.push(sortedArr[i]);
            }
        }
    }

    return resultArr;
}

const arr = [5,5,5, 2, 7, 8, 1, 4, 0, 5, 7, 9, 3];
console.log(findDuplicates(arr));
