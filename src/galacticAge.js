export class GalacticAge {
  constructor(earthAge, lifeExpectancy) {
    this.earthAge = earthAge;
    this.lifeExpectancy = lifeExpectancy;

    this.ages = [this.mercuryYears(this.earthAge), this.venusYears(this.earthAge), this.marsYears(this.earthAge), this.jupiterYears(this.earthAge)];

    this.expectancies = [this.mercuryYears(this.lifeExpectancy), this.venusYears(this.lifeExpectancy), this.marsYears(this.lifeExpectancy), this.jupiterYears(this.lifeExpectancy)];
  }

  earthDays(earthYears) {
    let output = 0;
    if(parseInt(earthYears)) {
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
