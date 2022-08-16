// how to clone array

// how to concatenate two arrays
let array1 = ['item1', 'item2'];
let array2 = array1.slice(0).concat(['item5', 'item7']);
console.log(`slice method ${array2}`);
array2 = [].concat(array2, ['item8', 'item9']);
console.log(`concat method ${array2}`);
let array3 = [...array1, ...array2];
console.log(array3);