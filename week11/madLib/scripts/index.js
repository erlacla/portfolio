import { fetchJSON } from "./fetchJSON.js";

const url = "https://api.le-systeme-solaire.net/rest/bodies/";

fetchJSON(url);

const json = await fetchJSON(url);
madLib(json);
document.querySelector("#togglebtn").addEventListener("click", toggleMenu);
function toggleMenu() {
  document.querySelector("#nav").classList.toggle("hide");
}

function madLib(json) {
  let girlsName = document.querySelector("#g-name").value;
  let section = document.getElementById("display");
  let story = document.createElement("p");

  story.innerHTML = `Once upon a time there was a girl named ${girlsName}.`;

  section.appendChild(story);
}

const today = new Date();
let currentDay = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
  today
);
let date = document.querySelector("#currentdate");
date.textContent = currentDay;
