import { fetchJSON } from "./fetchJSON.js";

const url = "https://api.le-systeme-solaire.net/rest/bodies/";

document.querySelector("#togglebtn").addEventListener("click", toggleMenu);
document.querySelector("#togglebtn").addEventListener("touchend", toggleMenu);
function toggleMenu() {
  document.querySelector("#nav").classList.toggle("hide");
}


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
  toggleForm();
  document.querySelector("#display").classList.toggle("hide");
  

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
    case "Jupiter":
      obj = 238;
      break;
    case "Mars":
      obj = 239;
      break;
    case "Mercury":
      obj = 240;
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
    case "Venus":
      obj = 244;
      break;
  }

  let section = document.getElementById("display");
  let story = document.createElement("p");

  story.innerHTML = `Once upon a time there was a girl named ${girlsName}.
  She was so fascinated by ${solarObject}. She would imagine there was a ${adjective}
  ${animal} living on ${solarObject}. She always named him ${boysName}. He had a birthday every ${json.bodies[obj].sideralOrbit} days 
  because thats the amount of days it takes for ${solarObject}
  to orbit the sun! She would plan out a    birthday party and  ${adverb} grab her friend  
  and ${verb} the ${json.bodies[obj].sideralOrbit} day trip to go find the ${noun} that she thinks the
  ${animal} needs to survive. The trip takes the same  ${exclamation}! I wonder if ${boysName} would care that much for the ${animal}...`;

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


form.addEventListener('submit', function (event) {
  if(!text.validity.valid) {
    showError();
    event.preventDefault();
  }
});

function showError() {
  if(text.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    emailError.textContent = 'You need to enter an e-mail address.';
  } else if(email.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.textContent = 'Entered value needs to be an e-mail address.';
  } else if(email.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    emailError.textContent = `Email should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`;
  }

  // Set the styling appropriately
  emailError.className = 'error active';
}