function setup() {
    canvas=createCanvas(300,200)
    canvas.center()

}

function preload() {
    video = createVideo("video.mp4")
    video.hide()
    
}

function draw() {
    image(video ,0,0,200,200)  
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
