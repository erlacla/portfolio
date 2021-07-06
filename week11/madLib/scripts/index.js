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
  
  let table = document.getElementById("sso");
  let head = document.createElement("th");
  let headTwo = document.createElement("th");
  
  head.innerHTML = `<tr><th>Object Name</th></tr>`;
  headTwo.innerHTML = `<tr><th>Mass</th></tr>`;
  table.appendChild(head);
  table.appendChild(headTwo);
  for (i = 0; i < json.bodies.length; i++) { 
    let row = document.createElement("tr");
    row.innerHTML = `<td>${json.bodies[i].englishName}</td><td>${json.bodies[i].mass.massValue} X 10<sup>${json.bodies[i].mass.massExponent}</sup> kilograms</td>`;
    
    table.appendChild(row);
  
  }
  
 
}