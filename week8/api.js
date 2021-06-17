let i = 1;
let url = `https://swapi.dev/api/people/?page=${i}`;
const swList = document.querySelector("#apidata");
const buttonsN = document.querySelector('#buttonsN');
const buttonsP = document.querySelector('#buttonsP');
console.log(url);

//for(let i = 0; i <= 9; i++)
buttonsN.addEventListener("click", () => {
  // let i = 1;
  i++;
  let url = `https://swapi.dev/api/people/?page=${i}`;
  getJson(url);
});

buttonsP.addEventListener("click", () => {
  i--;
  let url = `https://swapi.dev/api/people/?page=${i}`;
  getJson(url);
  });

function getJson(url) {
   fetch(url)
    .then(response => {
      if (response.ok) {
          console.log('GOOD:', response);
          return response.json();
      } else {
          throw new Error ('Something went wrong!');
          console.log("Response not good.")
      }
    })
    .then(jsonObject => {
      console.log(jsonObject);
      swList.innerHTML = jsonObject.results
        .map((item) => `<li>${item.name}</li>`)
        .join("");
        console.log(url);
    })

.catch(error => {
    console.log('There was an error!')
});
};