
const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns [Lighthouse, Labs] for [Yo Yo, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

    it("returns [from, home] for [coding, from, home]", () => {
    assert.deepEqual(tail(["coding", "from", "home"]), ["from", "home"]); 
  });

  it("it returns [new, skills] for [learning, new, skills]", () => {
    assert.deepEqual(tail(["learning", "new", "skills"]), ["new", "skills"])
  });

});