import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { GalacticAge } from './galacticAge.js';
import earth from './img/earth.jpg';
import mercury from './img/mercury.jpg';
import venus from './img/venus.jpg';
import mars from './img/mars.jpg';
import jupiter from './img/jupiter.jpg';

const earthImg = document.getElementById('earth-image');
const mercuryImg = document.getElementById('mercury-image');
const venusImg = document.getElementById('venus-image');
const marsImg = document.getElementById('mars-image');
const jupiterImg = document.getElementById('jupiter-image');
earthImg.src = earth;
mercuryImg.src = mercury;
venusImg.src = venus;
marsImg.src = mars;
jupiterImg.src = jupiter;

export function main() {
  $(function() {
    $(".form").submit(function(event) {
      event.preventDefault();
      let earthAge = $("#earth-age").val();
      let lifeExpectancy = $("#earth-age").val();
      let galactic = new GalacticAge(earthAge, lifeExpectancy);


    });
  });
}
