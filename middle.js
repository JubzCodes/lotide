const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function (arr) {

  const mid1 = Math.floor(arr.length / 2);
  value = arr[mid1];
  if (arr.length % 2 !== 0) {
    return [value];
  }
  const mid2 = Math.floor(arr.length / 2) - 1;
  value2 = arr[mid2];
  return [value, value2];
}
const numbers = [4, 6, 9, 2];
middle(numbers);
assertArraysEqual(numbers, [4, 6, 9, 2]);