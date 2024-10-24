// let counter = 0;


// function foo() {
//     counter++;
//     return foo();
// }

// try {
//     foo();
// }
// catch (err) {
//     console.log(err);
//     console.log(counter);
// }

// recursively flaten the arrray. 
const numberArray = [1, 2, 4, [4, 7, 8, [5, 6, 7], [[[6, 7], [7, 8]], [4, 5, 6]], 7, 8], 8, 8];

function flatten(arr) {
    const result = [];
    arr.forEach(element => {
        if (Array.isArray(element)) {
            result.push(...flatten(element));
        } else {
            result.push(element);
        }
    });
    return result;
}

console.log(flatten(numberArray));

//modify the recursive function to return a function 
function flattenArray(arr) {

    let result = [];
    function checkForNested(ar, index, res) {

        if (index >= ar.length) {
            return res;
        }
        let item = ar[index];
        if (Array.isArray(item)) {
            return () => {item.forEach((subItem, subIndex) => checkForNested(item, subIndex, res));
                return checkForNested(arr, index + 1, res)};
        } else {
            res.push(item);
            return () => checkForNested(ar, index + 1, res);
        }
    }
    return () => checkForNested(arr, 0, result);
}

// function trampoline 
function trampoline(fn) {
    let thunks = fn;
    while (typeof thunks === 'function') {
        thunks = thunks();
    }
    return thunks;
}
// testing implementation on 
const numberArray2 = [1, [2, [3, 4], 5], 6];
console.log(trampoline(flattenArray(numberArray2)));