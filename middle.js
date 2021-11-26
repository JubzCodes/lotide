const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

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