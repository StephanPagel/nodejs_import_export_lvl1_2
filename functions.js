const first = (arr) => {
  return arr[0];
};

const allButLast = (arr) => {
  return arr.slice(0, -1);
};

const last = (arr) => {
  return arr[arr.length - 1];
};

const allButFirst = (arr) => {
  return arr.slice(1, arr.length);
};

const positionN = (arr, n) => {
  if (n >= 0 && n <= arr.length) {
    return arr[n];
  } else {
    return arr[arr.length - 1];
  }
};

let newArray = [];
const removeItem = (arr, item) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== item) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
};

const removeDouble = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) === index);
};

module.exports = {
  first,
  allButLast,
  last,
  allButFirst,
  positionN,
  removeItem,
  removeDouble,
};
