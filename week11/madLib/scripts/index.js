import { fetchJSON } from "./fetchJSON.js";

const url = "https://api.le-systeme-solaire.net/rest/bodies/";

document.querySelector("#togglebtn").addEventListener("click", toggleMenu);
document.querySelector("#togglebtn").addEventListener("touchend", toggleMenu);
function toggleMenu() {
  document.querySelector("#nav").classList.toggle("hide");
}

fetchJSON(url);

const json = await fetchJSON(url);

function toggleForm() {
  document.querySelector(".container").classList.toggle("hide");
  
}
function reload() {
  location.reload();
    return false;
}

const form = document.getElementById("madLib");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(json);
  toggleForm();

  // document.querySelector("#display").classList.toggle("hide");

  let girlsName = form.querySelector("#g-name").value;
  let boysName = form.querySelector("#b-name").value;
  let exclamation = form.querySelector("#exclamation").value;
  let adjective = form.querySelector("#adjective").value;
  let noun = form.querySelector("#noun").value;
  let solarObject = form.querySelector("#solarObject").value;
  let verb = form.querySelector("#verb").value;
  let adverb = form.querySelector("#adverb").value;
  let animal = form.querySelector("#animal").value;

  let obj = 0;
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
      break;
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

  let backButton = document.createElement("button");
  backButton.setAttribute("id", "back");
  backButton.innerHTML = "Try again";
  
section.appendChild(backButton);
document.querySelector("#back").addEventListener("click", reload);
  document.querySelector("#back").addEventListener("touchend", reload);
});

const today = new Date();
let currentDay = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
  today
);
let date = document.querySelector("#currentdate");
date.textContent = currentDay;
