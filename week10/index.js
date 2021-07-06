
import QuakesController from './QuakesController.js';



    


// document.addEventListener("readystatechange", (event) => {
//     if (event.target.readyState === "complete") {
//       initApp();
//     }
//   });

// const initApp = () => {
// const enterRadius = document.getElementById("radiusEntryForm");
// radiusEntryForm.addEventListener("submit", (event) => {
    
    
//   });
// }

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