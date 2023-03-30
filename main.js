var tint_img='';
var video='';
function preload(){

}
function setup(){
var canvas= createCanvas(640,480);
canvas.position(110,250);
 video=createCapture(VIDEO);
video.hide();
}
function draw(){
image(video,0,0,640,480);
tint(tint_img);
}
function filter(){
    tint_img=document.getElementById("colour").value;
}
function take_snapshot(){
    save('photo.png');
}