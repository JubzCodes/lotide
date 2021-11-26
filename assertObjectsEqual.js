
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

const eqObjects = function (object1, object2) {

  keys1 = Object.keys(object1);
  keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const values of keys1) {
    if (Array.isArray(object1[values])) {
      if (!eqArrays(object1[values], object2[values])) {
        return false;
      }
    } else if (object2[values] !== object1[values]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function (object1, object2) {
  if (eqObjects(object1, object2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${object1} === ${object2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${object1} !== ${object2}`);
  }
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(eqObjects(ab, ba), true);
