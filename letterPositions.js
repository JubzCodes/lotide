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

//const message = "hello";

const letterPositions = function (sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (results.hasOwnProperty(sentence[i])) {
      results[sentence[i]] = [sentence.indexOf(sentence[i])];
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [sentence.indexOf(sentence[i])];
    }
  }
  console.log(results);
  return results;
};
letterPositions("hello");
//console.log(letterPositions(message));
assertArraysEqual(letterPositions("hello"), { h: [0], e: [1], l: [2, 3], o: [4] });
