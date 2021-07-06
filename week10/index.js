
import QuakesController from './QuakesController.js';

const initFunc = function(event) {
    const radius = document.querySelector("#radius").value;
    console.log("Saving value", radius);
    event.preventDefault();
    
    const quake = new QuakesController("#quakeList");
    quake.init(radius);
  }

var form = document.querySelector("form");
  form.addEventListener("submit", initFunc);

var backButton = document.querySelector("#back");
backButton.addEventListener("click", initFunc);