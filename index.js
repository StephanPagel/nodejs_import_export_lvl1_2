const {
  names,
  numbers,
  input1,
  input2,
  input3,
  input4,
  input5,
  input6,
} = require("./data");
const {
  first,
  allButLast,
  last,
  allButFirst,
  positionN,
  removeItem,
  removeDouble,
  sum,
  randomNumber,
  upperCaseFirst,
  upperCaseAll,
} = require("./functions");

console.log(first(names));
console.log(first(numbers));
console.log(allButLast(names));
console.log(allButLast(numbers));
console.log(last(names));
console.log(last(numbers));
console.log(allButFirst(names));
console.log(allButFirst(numbers));
console.log(positionN(names, 2));
console.log(positionN(numbers, 20));
console.log(removeItem(input1, input2));
console.log(removeDouble(input3));
console.log(sum(numbers));
console.log(randomNumber(input4, input5));
console.log(upperCaseFirst(input6));
console.log(upperCaseAll(input6));
