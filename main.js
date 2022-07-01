function preload(){

}
function setup(){
canvas=createCanvas(600,425);
canvas.center();
canvas.position(187,130);
video=createCapture(VIDEO);
video.hide();

}
function draw(){
image(video, 0, 0, 600, 425);
}
function ts(){
    save(mustache.png)
}