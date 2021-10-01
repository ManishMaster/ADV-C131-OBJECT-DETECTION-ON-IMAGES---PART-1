img = "";
url_var = "";
status = "";
objects = [];

function TakeImg()
{
         url_var = document.getElementById("url_taker").input;
}

function preload() {
          img = loadImage(url_var);
}

function setup() {
          canvas = createCanvas(500, 400);
          canvas.center();
          objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded() {
          console.log("The Model has been loaded");
          status = true;
          objectDetector.detect(img, gotResult);
}