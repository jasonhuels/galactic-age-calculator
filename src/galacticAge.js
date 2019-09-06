export class GalacticAge {
  constructor(earthAge, lifeExpectancy) {
    this.earthAge = earthAge;
    this.lifeExpectancy = lifeExpectancy;
  }

  earthDays() {
    let output = 0;
    if(parseInt(this.earthAge) >= 1) {
      output = parseInt(this.earthAge) * 365;
    }
    return output;
  }

  mercuryAge() {
    return Math.floor(this.earthDays() / 88);
  }

  venusAge() {
    return Math.floor(this.earthDays() / 225);
  }

  marsAge() {
    return Math.floor(this.earthDays() / 687);
  }

  jupiterAge() {
    return Math.floor(this.earthDays() / 4333);
  }
}
