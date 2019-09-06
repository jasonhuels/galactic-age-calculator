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
      const PAST = "Congratulations on exceeding expectations!";
      const CLOSE = "Enjoy the time you have left...";
      const FAR = "You've got plenty of life left to live.";
      let extra = "";

      if(lifeExpectancy - earthAge < 0) {
        extra = PAST;
      } else if(lifeExpectancy - earthAge < 5) {
        extra = CLOSE;
      } else {
        extra = FAR;
      }

      $("#form").trigger("reset");
      if(earthAge >= 1 && lifeExpectancy >=1) {
        $("#error").slideUp();
        if(earthAge >= lifeExpectancy) {
          yearsLeft = `You've out-lived your life expectancy by ${earthAge - lifeExpectancy} years. ${extra}`;
        } else {
          yearsLeft = `You'll most likely live another ${lifeExpectancy - earthAge} years. ${extra}`;
        }
        $("#earth-age").html(earthAge);
        $("#earth-life").html(lifeExpectancy);
        $("#earth-left").html(yearsLeft);

        for(let i=0; i<PLANETS.length; i++) {
          if(galactic.expectancies[i] - galactic.ages[i] < 0) {
            extra = PAST;
          } else if(galactic.expectancies[i] - galactic.ages[i] < 5) {
            extra = CLOSE;
          } else {
            extra = FAR;
          }
          $(`#${PLANETS[i]}-age`).html(galactic.ages[i]);
          $(`#${PLANETS[i]}-life`).html(galactic.expectancies[i]);
          if(galactic.ages[i] >= galactic.expectancies[i]) {
            $(`#${PLANETS[i]}-left`).html(`You've out-lived your life expectancy by ${galactic.ages[i] - galactic.expectancies[i]} years. ${extra}`);
          } else {
            $(`#${PLANETS[i]}-left`).html(`You'll most likely live another ${galactic.expectancies[i] -galactic.ages[i]} years. ${extra}`);
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
