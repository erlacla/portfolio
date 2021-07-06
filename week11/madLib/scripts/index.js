import { fetchJSON } from "./fetchJSON.js";

const url = "https://api.le-systeme-solaire.net/rest/bodies/";

fetchJSON(url);

const json = await fetchJSON(url);
//const bodies = JSON.stringify(json);
//console.log(bodies);
table(json);
document.querySelector('#togglebtn').addEventListener("click", toggleMenu);
function toggleMenu() {
    document.querySelector("#nav").classList.toggle("hide");
  }

  const madLibOne = document.createElement('p');
//   madLibOne.innerHTML = `${} 
//   ${}`;


// --- For Solar Objects Table

function table(json) {
  let i;
  console.log(json);
  let table = document.createElement("table");
  let row = document.createElement("tr");
  console.log(json.bodies[1].englishName);
  // table.innerHTML = `<tr><th>Name</th><th>Radius</th></tr>`;

  for (i = 0; i < json.length; i++) { 
    row.innerHTML = `<tr><td>${json.bodies[i].englishName}</td><td>${json.bodies[i].equaRadius / 1.609} miles</td></tr>`;
    table.appendChild(row);

  }
  
  document.getElementById("sso").textContent = table;
}