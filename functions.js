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

module.exports = {
  first,
  allButLast,
  last,
  allButFirst,
};
