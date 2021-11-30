const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
const words2 = ["coding", "from", "home"]
const words3 = ["learning", "new", "skills"]

tail(words);
tail(words2);
tail(words3);

assertEqual(words,words);
assertEqual(words2,words2);
assertEqual(words3,words3);