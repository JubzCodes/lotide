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


const data = [1, 2, 5, 7, 2, -1, 2, 4, 5];
takeUntil = function(array, callback) {
  
  let results = [];
  for (const values of array) {
    if (callback(values)) {
      results.push(values);
    }
  }
  return results;
}


const results1 = takeUntil(data, x => x > 0);
console.log(results1);
assertArraysEqual(results1,[
  1, 2, 5, 7,
  2, 2, 4, 5
])
 