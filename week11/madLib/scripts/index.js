import { fetchJSON } from "./fetchJSON.js";

const url = "https://api.le-systeme-solaire.net/rest/bodies/";

// fetchJSON(url);

const json = await fetchJSON(url);
//const bodies = JSON.stringify(json);

table();
document.querySelector('#togglebtn').addEventListener("click", toggleMenu);
function toggleMenu() {
    document.querySelector("#nav").classList.toggle("hide");
  }

  const madLibOne = document.createElement('p');
//   madLibOne.innerHTML = `${} 
//   ${}`;







// --- For Solar Objects Table

function table() {
  alert("function called")
  let i;
  console.log(json);
  
  let table = "<tr><th>Name</th><th>Radius</th></tr>";
  
  for (i = 0; i < json.length; i++) { 
  //   let row = `<tr><td>${json.bodies[i].englishname}</td><td>${json.bodies[i].equaRadius / 1.609} miles</td></tr>`;
  // table.appendChild(row);
       console.log(bodies[i].englishname);
  }
  
  document.getElementById("sso").innerHTML = table;
}