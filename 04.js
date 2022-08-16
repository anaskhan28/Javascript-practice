// array destructuring
const myArray = ["value1", "value2", "value3", "value4", "value5"];
let [firstArray, secondArray, thirdArray, ...newArray] = myArray;

console.log(firstArray);
console.log(secondArray);
console.log(thirdArray);
console.log(newArray)