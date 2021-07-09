import { fetchJSON } from "./fetchJSON.js";

const url = "https://api.le-systeme-solaire.net/rest/bodies/";

fetchJSON(url);

const json = await fetchJSON(url);

document.querySelector('#togglebtn').addEventListener("click", toggleMenu);
function toggleMenu() {
    document.querySelector("#nav").classList.toggle("hide");
  }

  const madLibOne = document.createElement('p');
//   madLibOne.innerHTML = `${} 
//   ${}`;


