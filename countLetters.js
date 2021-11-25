const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const str = "jadden";

const countLetters = function (str) {
  let obj = {};
  for (const letters of str) {
    if (!obj.hasOwnProperty(letters)) {
      obj[letters] = 1;
    } else if (obj.hasOwnProperty(letters)) {
      obj[letters] = obj[letters] + 1;
    }
  }
  return obj;
};

console.log(countLetters(str));
