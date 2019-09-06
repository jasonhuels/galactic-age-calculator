import earthImg from './img/earth.jpg';
import mercuryImg from './img/mercury.jpg';
import venusImg from './img/venus.jpg';
import marsImg from './img/mars.jpg';
import jupiterImg from './img/jupiter.jpg';
import cosmosImg from './img/cosmos.jpg';

export function loadImages() {
  const EARTH = document.getElementById('earth-image');
  const MERCURY = document.getElementById('mercury-image');
  const VENUS = document.getElementById('venus-image');
  const MARS = document.getElementById('mars-image');
  const JUPITER = document.getElementById('jupiter-image');
  const COSMOS = document.getElementById('cosmos');
  EARTH.src = earthImg;
  MERCURY.src = mercuryImg;
  VENUS.src = venusImg;
  MARS.src = marsImg;
  JUPITER.src = jupiterImg;
  COSMOS.src = cosmosImg;
}
