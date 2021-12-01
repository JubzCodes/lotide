
const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns an empty array for arrays with one or two elements", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

    it("returns an array containing a single middle element for arrays with odd number of elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]); 
  });

  it("it returns an array containing the two elements in the middle for even number of elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
  });

});

