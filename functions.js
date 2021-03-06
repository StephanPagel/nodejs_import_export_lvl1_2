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

const sum = (arr) => arr.reduce((a, b) => a + b, 0);

const randomNumber = (a, b) => {
  return Math.floor(Math.random() * (b - a + 1) + a);
};

const upperCaseFirst = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const upperCaseAll = (str) => {
  return str.toUpperCase();
};

const checkLetter = (str, item) => {
  if (str[str.length - 1] === item) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
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
  checkLetter,
};
