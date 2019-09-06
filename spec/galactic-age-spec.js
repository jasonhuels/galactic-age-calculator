import { GalacticAge } from './../src/galacticAge.js';

describe("GalacticAge", function() {
  let galactic;

  beforeEach(function() {
    galactic = new GalacticAge(32, 85);
  });

  it("will not except ages that are not numbers", function() {
    galactic.earthAge = "thirty-two";
    expect(galactic.earthDays(galactic.earthAge)).toEqual(0);
  });
  it("will not except ages that are less than 1", function() {
    galactic.earthAge = 0;
    expect(galactic.earthDays(galactic.earthAge)).toEqual(0);
  });
  it("will output the user's age on Mercury", function() {
    expect(galactic.mercuryYears(galactic.earthAge)).toEqual(132);
  });
  it("will output the user's average life expectancy on Mercury", function() {
    expect(galactic.mercuryYears(galactic.lifeExpectancy)).toEqual(352);
  });
  it("will output the user's expected years remaining on Mercury", function() {
    expect(galactic.mercuryYears(galactic.lifeExpectancy) - galactic.mercuryYears(galactic.earthAge)).toEqual(220);
  });
  it("will output the user's age on Venus", function() {
    expect(galactic.venusYears(galactic.earthAge)).toEqual(51);
  });
  it("will output the user's average life expectancy on Venus", function() {
    expect(galactic.venusYears(galactic.lifeExpectancy)).toEqual(137);
  });
  it("will output the user's expected years remaining on Venus", function() {
    expect(galactic.venusYears(galactic.lifeExpectancy) - galactic.venusYears(galactic.earthAge)).toEqual(86);
  });
  it("will output the user's age on Mars", function() {
    expect(galactic.marsYears(galactic.earthAge)).toEqual(17);
  });
  it("will output the user's average life expectancy on Mars", function() {
    expect(galactic.marsYears(galactic.lifeExpectancy)).toEqual(45);
  });
  it("will output the user's expected years remaining on Mars", function() {
    expect(galactic.marsYears(galactic.lifeExpectancy) - galactic.marsYears(galactic.earthAge)).toEqual(28);
  });
  it("will output the user's age on Jupiter", function() {
    expect(galactic.jupiterYears(galactic.earthAge)).toEqual(2);
  });
  it("will output the user's average life expectancy on Jupiter", function() {
    expect(galactic.jupiterYears(galactic.lifeExpectancy)).toEqual(7);
  });
  it("will output the user's expected years remaining on Jupiter", function() {
    expect(galactic.jupiterYears(galactic.lifeExpectancy) - galactic.jupiterYears(galactic.earthAge)).toEqual(5);
  });
});
