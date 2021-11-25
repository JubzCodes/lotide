const eqArrays = function (arr1, arr2) {
  let ans;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        ans = true;
      } else {
        ans = false;
      }
    }
  }
  return ans;
};

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log("Assertion Passed");
  } else {
    console.log("Assertion Failed");
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