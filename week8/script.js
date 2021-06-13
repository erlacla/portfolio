var canvas = document.getElementById("myCanvas"); 
var context = canvas.getContext("2d"); 
context.strokeStyle = "purple";
context.fillStyle = "rgba(96, 0, 255, 0.3)";
context.fillRect(10, 10, 100, 100);   
context.strokeRect(10, 10, 100, 100);


function drawPattern() {
    var canvas2 = document.getElementById("demo2");
    var context2 = canvas2.getContext("2d"); 
    var img = new Image();
    img.src ="bike.png";
    img.onload = function() {
    var pattern = context.createPattern(img, "repeat"); 
    context2.fillStyle = pattern;                        
    context2.fillRect(0, 0, 200, 200);                  
    context2.strokeRect(0, 0, 200, 200);             
    };           
}
window.addEventListener("load", drawPattern, false);

function drawGradient() {
    var canvas3 = document.getElementById("demo3");
    var context3 = canvas3.getContext("2d");
    context3.strokeStyle = "black";
    var gradient = context3.createLinearGradient(0, 0, 0, 100); 
    gradient.addColorStop(0, "green"); 
    gradient.addColorStop(1, "white"); 
    context3.fillStyle = gradient; 
    context3.fillRect(10, 10, 100, 100); 
    context3.strokeRect(10, 10, 100, 100); 
}
window.addEventListener("load", drawGradient, false);

function drawCircle() {
    var canvas4 = document.getElementById("demo4");
    var context4 = canvas4.getContext("2d");
    context4.beginPath();
    context4.arc(100, 100, 50, 0, Math.PI*2, true);
    context4.closePath();
    context4.strokeStyle = "grey";
    context4.fillStyle = "yellow";
    context4.lineWidth = 3;
    context4.fill(); 
    context4.stroke(); 
}
window.addEventListener("load", drawCircle, false);

function saveDrawing() {
    var canvas5 = document.getElementById("demo4");
    window.open(canvas5.toDataURL("circle.png"));
}
var button = document.getElementById("saveButton");
button.addEventListener("click", saveDrawing, false);



function drawImageToCanvas() {
var canvas7 = document.getElementById("myCanvas");
var context = canvas7.getContext("2d");
var image = document.getElementById("myImageElem");
// draw the image at x=0 and y=0 on the canvas
context.drawImage(image, 68, 68);
var imageData = context.getImageData(0, 0, 1, 1);
var pixelData = imageData.data;
console.log(pixelData.length);

}
window.addEventListener("load", drawImageToCanvas, false);