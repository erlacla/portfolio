document.querySelector("#togglebtn").addEventListener("click", toggleMenu);
document.querySelector("#togglebtn").addEventListener("touchend", toggleMenu);
function toggleMenu() {
  document.querySelector("#nav").classList.toggle("hide");
}

function scaleGallery()
{
  // This is roughly the max pixels width/height of a square photo
  let widthSetting = 400;
  
  // Do not edit any of this unless you know what you're doing
  let containerWidth = document.querySelector(".gallery").clientWidth;
  let ratioSumMax = containerWidth / widthSetting;
  let imgs = document.querySelectorAll(".gallery img");
  let numPhotos = imgs.length, ratioSum, ratio, photo, row, rowPadding, i = 0;
  
  while (i < numPhotos) {
    ratioSum = rowPadding = 0;
    row = new Array();
    while (i < numPhotos && ratioSum < ratioSumMax) {
        photo = imgs[i];
        // reset width to original
        photo.style.height = ""; 
        ratio = photo.clientWidth / photo.clientHeight;
        console.log(photo);
        rowPadding += getHorizontalPadding(photo);
        // if this is going to be first in the row, clear: left
        if(ratioSum == 0) photo.style = ("clear", "left"); else photo.style = ("clear", "none");
        ratioSum += ratio;
        row.push(photo);
        i++;
        // if only 1 image left, squeeze it in
        if(i == numPhotos - 1) ratioSumMax = 999;
    }
    let unitWidth = (containerWidth - rowPadding) / ratioSum;
    
    row.forEach(element => {
      element.clientWidth(unitWidth * element.clientWidth / element.clientHeight);
    });
  }
}

function getHorizontalPadding(elem)
{
    let padding = 0;
    let left = elem.style = ("padding-left");
    let right = elem.style = ("padding-right");
    padding += parseInt(left ? left.replace("px", "") : 0);
    padding += parseInt(right ? right.replace("px", "") : 0);
    return padding;
}

window.onload = scaleGallery;
window.onresize = scaleGallery;



let req = new XMLHttpRequest();
let url = "https://api.nasa.gov/planetary/apod?api_key=";
let api_key = "EuGKO5mBswmcnrMN8LpU99ziiL5tDIjqx1APfpsw";

req.open("GET", url + api_key);
req.send();

req.addEventListener("load", function() {
	if(req.status == 200 && req.readyState == 4){
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
})
