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
  let headThree = document.createElement("th"); 
  let headFour = document.createElement("th");
  let headFive = document.createElement("th");
  
  head.innerHTML = `<tr><th>Object Name</th></tr>`;
  headTwo.innerHTML = `<tr><th>Mass</th></tr>`;
  headThree.innerHTML = `<tr><th>Sideral Orbit</th></tr>`;
  headFour.innerHTML = `<tr><th>Discovered By</th></tr>`;
  headFive.innerHTML = `<tr><th>Discovery Date</th></tr>`;

  table.appendChild(head);
  table.appendChild(headTwo);
  table.appendChild(headThree);
  table.appendChild(headFour);
  table.appendChild(headFive);

  
          for (i = 0; i < json.bodies.length; i++) { 
              if (json.bodies[i].isPlanet == true || json.bodies[i].id == "halley") {

            // if (json.bodies[i].aroundPlanet == null) {
            //   continue;
            // }
            // if (json.bodies[i].mass == null) {
            //   continue;
            // }
            
            let row = document.createElement("tr");
            row.innerHTML = `<td>${json.bodies[i].englishName}</td>
            <td>${json.bodies[i].mass.massValue} X 10<sup>${json.bodies[i].mass.massExponent}</sup> kilograms</td>
            <td>${json.bodies[i].sideralOrbit}</td>
            <td>${json.bodies[i].discoveredBy}</td>
            <td>${json.bodies[i].discoveryDate}</td>`;
            
            table.appendChild(row);
            
          }
        }
}