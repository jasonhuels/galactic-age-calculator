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
}
