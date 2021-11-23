const words = ["Yo Yo", "Lighthouse", "Labs"];


const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function (array) {
  let array2 = array.slice(1);
  return array2;
};

tail(words);
assertEqual(words.length, 3);