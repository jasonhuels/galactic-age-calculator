import { GalacticAge } from './../src/galacticAge.js';

describe("GalacticAge", function() {
  let galactic;

  beforeEach(function() {
    galactic = new GalacticAge(32, 85);
  });

  it("will not except ages that are not numbers", function() {
    galactic.earthAge = "thirty-two";
    expect(galactic.earthDays()).toEqual(0);
  });
  it("will not except ages that are less than 1", function() {
    galactic.earthAge = 0;
    expect(galactic.earthDays()).toEqual(0);
  });
});
