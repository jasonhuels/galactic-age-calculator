import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { GalacticAge } from './galacticAge.js';
import { loadImages } from './loadImages.js';

loadImages();
main();

function main() {
  $(function() {
    $("#form").submit(function(event) {
      event.preventDefault();
      let earthAge = $("#input-age").val() || 0;
      let lifeExpectancy = $("#life-expectancy").val() || 0;
      let yearsLeft = "";
      let galactic = new GalacticAge(earthAge, lifeExpectancy);
      const PLANETS = ["mercury", "venus", "mars", "jupiter"];

      $("#form").trigger("reset");
      if(earthAge >= 1 && lifeExpectancy >=1) {
        $("#error").slideUp();
        if(earthAge >= lifeExpectancy) {
          yearsLeft = `You've out-lived your life expectancy by ${earthAge - lifeExpectancy} years.`;
        } else {
          yearsLeft = `You'll most likely live another ${lifeExpectancy - earthAge} years.`;
        }
        $("#earth-age").html(earthAge);
        $("#earth-life").html(lifeExpectancy);
        $("#earth-left").html(yearsLeft);

        for(let i=0; i<PLANETS.length; i++) {
          $(`#${PLANETS[i]}-age`).html(galactic.ages[i]);
          $(`#${PLANETS[i]}-life`).html(galactic.expectancies[i]);
          if(galactic.ages[i] >= galactic.expectancies[i]) {
            $(`#${PLANETS[i]}-left`).html(`You've out-lived your life expectancy by ${galactic.ages[i] - galactic.expectancies[i]} years.`);
          } else {
            $(`#${PLANETS[i]}-left`).html(`You'll most likely live another ${galactic.expectancies[i] -galactic.ages[i]} years.`);
          }
        }
        $("#results").slideDown();
      } else {
        $("#error").slideDown();
      }

      $("#results").dblclick(function() { $(this).slideUp(); });

    });
  });
}
