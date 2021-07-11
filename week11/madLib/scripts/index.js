import { fetchJSON } from "./fetchJSON.js";

const url = "https://api.le-systeme-solaire.net/rest/bodies/";

document.querySelector("#togglebtn").addEventListener("click", toggleMenu);
document.querySelector("#togglebtn").addEventListener("touchend", toggleMenu);
function toggleMenu() {
  document.querySelector("#nav").classList.toggle("hide");
}

fetchJSON(url);

const json = await fetchJSON(url);

const form = document.getElementById("madLib_input");
form.addEventListener("submit", (e) => {
  console.log(json);
  
  let girlsName = document.querySelector("#g-name").value;
  let boysName = document.querySelector("#b-name").value;
  let exclamation = document.querySelector("#exclamation").value;
  let adjective = document.querySelector("#adjective").value;
  let noun = document.querySelector("#noun").value;
  let solarObject = document.querySelector("#solarObject").value;
  let verb = document.querySelector("#verb").value;
  let adverb = document.querySelector("#adverb").value;
  let animal = document.querySelector("#animal").value;


  
  switch (solarObject) {
    case "Earth":
      obj = 243;
      break;
    case "Halley's Comet":
      obj = 237;
      break;
    case "Jupiter":
      obj = 238;
      break;
    case "Mars":
      obj = 239;
      break;
    case "Mercury":
      obj = 240;
      break;
    case "Moon":
      obj = 1;
      break;
    case "Neptune":
      obj = 219;
      break
    case "Pluto":
      obj = 7;
      break;
    case "Uranus":
      obj = 199;
      break;
    case "Saturn":
      obj = 241;
      break;
    case "Sun":
      obj = 242;
      break;
    case "Venus":
      obj = 244;
      break;
  }




  let section = document.getElementById("display");
  let story = document.createElement("p");
  
  story.innerHTML = `Once upon a time there was a girl named ${girlsName}.
  She was so fascinated by ${solarObject}. Why, you ask? Because in her mind, there was a ${adjective}
  ${animal} living ${adverb} close to ${solarObject}. If she could, she would grab her friend ${boysName} 
  and ${verb} the ${json.bodies[obj].sideralOrbit} day trip to go find the ${noun} that she thinks the
  ${animal} needs to survive. The trip takes the same amount of days as it does for ${solarObject}
    to orbit the sun! ${exclamation}! I wonder if ${boysName} would care that much for the ${animal}...`;

  section.appendChild(story);
});

const today = new Date();
let currentDay = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(today);
let date = document.querySelector("#currentdate");
date.textContent = currentDay;
