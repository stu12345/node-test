const assert = require("assert");
const starwars = require("./starwars");

describe("StarWars", function() {
  describe("findPersonWithMostAppearances", function() {
    this.timeout(5000); // Set timeout depending on your network speed.
    it("Should be Luke Skywalker", function(done) {
      starwars
        .findPersonWithMostAppearances()
        .then(r => {
          console.log(`${r} appeared in most films`);
          return r;
        })
        .then(r => {
          assert.equal(r, "Luke Skywalker");
          done();
        })
        .catch(err => done(err));
    });
  })
});
