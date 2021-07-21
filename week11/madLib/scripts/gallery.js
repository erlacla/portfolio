document.querySelector("#togglebtn").addEventListener("click", toggleMenu);
document.querySelector("#togglebtn").addEventListener("touchend", toggleMenu);
function toggleMenu() {
  document.querySelector("#nav").classList.toggle("hide");
}

let req = new XMLHttpRequest();
let url = "https://api.nasa.gov/planetary/apod?api_key=";
let api_key = "EuGKO5mBswmcnrMN8LpU99ziiL5tDIjqx1APfpsw";

req.open("GET", url + api_key);
req.send();

req.addEventListener("load", function () {
  if (req.status == 200 && req.readyState == 4) {
    let response = JSON.parse(req.responseText);

    let title = response["title"];
    let date = response["date"];
    let pic = response["hdurl"];
    let explanation = response["explanation"];

    document.getElementById("title").innerHTML = title;
    document.getElementById("date").innerHTML = date;
    document.getElementById("pic").src = pic;
    document.getElementById("explanation").innerHTML = explanation;
  }
});

const current = document.querySelector("#current");
const imgs = document.querySelector(".imgs");
const img = document.querySelectorAll(".imgs img");
const opacity = 0.6;

img[0].style.opacity = opacity;

imgs.addEventListener("click", imgClick);

function imgClick(e) {
  img.forEach((img) => (img.style.opacity = 1));
  current.src = e.target.src;
  current.classList.add("fade-in");
  setTimeout(() => current.classList.remove("fade-in"), 500);
  e.target.style.opacity = opacity;
}

const today = new Date();
let currentDay = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
  today
);
let date = document.querySelector("#currentdate");
date.textContent = currentDay;
