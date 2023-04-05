img="";
status = "";
objects=[];
function setup() {
    canvas=createCanvas(800,350)

}

function preload() {
    video = createVideo("video.mp4")
    video.hide()
    
}

function draw() {
    image(video ,0,0,200,200)  
    if(status != "")
{
    objectDetector.detect(video , gotresults)

    for(i = 0; i < objects.length; i++ )
    {
      document.getElementById("status").innerHTML = "Status : Object Detected";
      document.getElementById("number_of_objects").innerHTML = "number of objects detected are : " + objects.length
     r = random(255)
     g = random(255)
     b = random(255)
      fill(r,g,b);
      percent = floor(objects[i].confidence * 100);
      text(objects[i].label + " " + percent + "%", objects[i].x , objects[i].y);
      noFill();
      stroke(r,g,b);
    rect(objects[i].x -30, objects[i].y, objects[i].width,objects[i].height); }
    }    


}

function start() {
    objectDetector=ml5.objectDetector('cocossd' , modelLoaded)
    document.getElementById("status").innerHTML = "status : detecting objects"    
}

function modelLoaded() {
console.log("model has been loaded")
status = true
video.loop()
video.speed(1)
video.volume(0)
}


function gotresults(error , results) {
    if (error) {
        console.log(error)
        
    } else {
        console.log(results)  
        objects = results;
    }
}






