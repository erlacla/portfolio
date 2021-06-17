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


window.addEventListener("load", drawImageToCanvas, false);
function drawImageToCanvas() {
var canvas7 = document.getElementById("demo6");
var context = canvas7.getContext("2d");
var image = document.getElementById("myImageElem");
// draw the image at x=0 and y=0 on the canvas
context.drawImage(image, 68, 68);
var imageData = context.getImageData(0, 0, 1, 1);
var pixelData = imageData.data;
console.log(pixelData.length);

}
window.addEventListener("load", manipulateImage, false);
function manipulateImage() {
    var canvas8 = document.getElementById("demo7");
    var context = canvas8.getContext("2d");
    var image = document.getElementById("secondImage");
    context.drawImage(image, 68, 68);
    var imageData = context.getImageData(0, 0, 200, 200);
    
    for (var i = 0; i < imageData.data.length; i += 4) {
    var red = imageData.data[i];
    var green = imageData.data[i + 1];
    var blue = imageData.data[i + 2];
        
    var grayscale = red * 0.3 + green * 0.59 + blue * 0.11;
        
    imageData.data[i] = grayscale;
    imageData.data[i + 1] = grayscale;
    imageData.data[i + 2] = grayscale;
    } 
    context.putImageData(imageData, 0, 0);
}

window.addEventListener("load", makeVideoOldTimey, false);
function makeVideoOldTimey() {
    var video = document.getElementById("video");
    var canvas9 = document.getElementById("canvasOverlay");
    var context = canvas9.getContext("2d");
    video.addEventListener("play", function() { 
    draw(video,context,canvas9);               
    }, false);  
}

function draw(video, context, canvas9) { 
    if (video.paused || video.ended) return false;
    
    drawOneFrame(video, context, canvas9);
    
    // Start over! 
    setTimeout(function(){ draw(video, context, canvas9); }, 0); 
}

function drawOneFrame(video, context, canvas9){
    context.drawImage(video, 0, 0, canvas9.width, canvas9.height);
    try {
    var imageData = context.getImageData(0, 0, canvas9.width, 
    canvas9.height);
    var pixelData = imageData.data;
    for (var i = 0; i < pixelData.length; i += 4) {
        var red = pixelData[i];
        var green = pixelData[i + 1];
        var blue = pixelData[i + 2];
        var grayscale = red * 0.3 + green * 0.59 + blue * 0.11;
        pixelData[i] = grayscale;
        pixelData[i + 1] = grayscale;
        pixelData[i + 2] = grayscale;
    }
    
    imageData.data = pixelData;
    context.putImageData(imageData, 0, 0);
    } catch (err) {
        canvas9.width = canvas9.width; 
        context.clearRect(0,0,canvas9.width,canvas9.height);
        canvas9.style.backgroundColor = "transparent"; 
        context.fillStyle = "white"; 
        context.textAlign = "left";
        context.font = "18px LeagueGothic, Tahoma, Geneva, sans-serif"; 
        context.fillText("There was an error rendering ", 10, 20);  
    context.fillText("the video to the canvas.", 10, 40);
    context.fillText("Perhaps you are viewing this page from", 10, 
    70);
    context.fillText("a file on your computer?", 10, 90);
    context.fillText("Try viewing this page online instead.", 10, 
    130); 
    return false; 
    }
}

var mice = document.querySelectorAll("#mouseContainer img");
var mouse = null;
for (var i=0; i < mice.length; i++) {
    mouse = mice[i];
    mouse.addEventListener('dragstart', function (event) {
    // handle the dragstart event
    });
}
mouse.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text/plain", this.id); 
});
var cat = document.getElementById("cat");
cat.addEventListener("dragover", function(event) {
    event.preventDefault();
});
cat.addEventListener("drop", function(event) {
    var mouseHash = {
    mouse1: 'NOMNOMNOM',
    mouse2: 'Meow',
    mouse3: 'Purrrrrr ...'
   };
var catHeading = document.getElementById('catHeading');
var mouseID = event.originalEvent.dataTransfer.getData("text/plain");
catHeading.innerHTML = mouseHash[mouseID];
var mousey = document.getElementById(item);
mousey.parentNode.removeChild(mousey);
event.preventDefault();

});

