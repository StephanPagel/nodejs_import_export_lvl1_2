const { names, numbers, input1, input2, input3 } = require("./data");
const {
  first,
  allButLast,
  last,
  allButFirst,
  positionN,
  removeItem,
  removeDouble,
  sum,
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
