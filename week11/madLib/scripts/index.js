import { fetchJSON } from "./fetchJSON.js";

const url = "https://api.le-systeme-solaire.net/rest/bodies/";

document.querySelector("#togglebtn").addEventListener("click", toggleMenu);
document.querySelector("#togglebtn").addEventListener("touchend", toggleMenu);
function toggleMenu() {
  document.querySelector("#nav").classList.toggle("hide");
}

fetchJSON(url);

const json = await fetchJSON(url);

document.getElementById("submitBtn").addEventListener("click", madLib);

function madLib() {
  console.log(json);
  
  // let girlsName = document.querySelector("#g-name").value;
  // let girlsName = document.querySelector("#g-name").value;
  // let girlsName = document.querySelector("#g-name").value;
  // let girlsName = document.querySelector("#g-name").value;
  // let girlsName = document.querySelector("#g-name").value;
  // let girlsName = document.querySelector("#g-name").value;
  // let girlsName = document.querySelector("#g-name").value;


  let section = document.getElementById("display");
  let story = document.createElement("p");
  let girlsName = document.querySelector("#g-name").value;
  story.innerHTML = `Once upon a time there was a girl named ${girlsName}.
  She was so fascinated by ${json.bodies.englishName}`;

  section.appendChild(story);
}

const today = new Date();
let currentDay = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(today);
let date = document.querySelector("#currentdate");
date.textContent = currentDay;
