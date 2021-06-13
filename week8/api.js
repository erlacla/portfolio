const swList = document.querySelector("#apidata");


// let url = `https://swapi.dev/api/people/?page=1`;
function getJson(url) {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Something went wrong!');
      } else {
       return response.json();
      }
    })
    .catch(error => {
      console.log(error)
    });
}
function getPeople(url) {
  return getJson(url);
}

function peopleList() {
  swList.innerHTML = jsonObject.results
    .map((item) => `<li>${item.name}</li>`)
    .join("");
  console.log(url);
};




function showPeople(url = "https://swapi.dev/api/people/?page=1") {
  getPeople(url).then(function (jsonObject) {
    console.log(jsonObject);
    const data = jsonObject.items;

    if (data.next) {
      const buttonsN = document.querySelector('#buttonsN');
      buttonsN.addEventListener("click", () => {
        showPeople(data.next);
      });
    }
    if (data.previous) {
      const buttonsP = document.querySelector('#buttonsP');
      buttonsP.addEventListener("click", () => {
        showPeople(data.previous);

      });
    }
  })
};






