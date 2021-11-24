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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);