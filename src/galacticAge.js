export class GalacticAge {
  constructor(earthAge, lifeExpectancy) {
    this.earthAge = earthAge;
    this.lifeExpectancy = lifeExpectancy;
  }

  earthDays(earthYears) {
    let output = 0;
    if(parseInt(earthYears) >= 1) {
      output = parseInt(earthYears) * 365;
    }
    return output;
  }

  mercuryYears(earthYears) {
    return Math.floor(this.earthDays(earthYears) / 88);
  }

  venusYears(earthYears) {
    return Math.floor(this.earthDays(earthYears) / 225);
  }

  marsYears(earthYears) {
    return Math.floor(this.earthDays(earthYears) / 687);
  }

  jupiterYears(earthYears) {
    return Math.floor(this.earthDays(earthYears) / 4333);
  }
}
