noseX=0;
noseY=0;
difference=0;
leftwrist=0;
rightwrist=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('posenet is initialied');
}
function draw(){
    background('#fffeba');
    document.getElementById("square_side").innerHTML="Width and Height of a square will be="+difference+"px";
    fill('#d9937e');
    stroke('#d9937e');
    square(noseX,noseY,difference);
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("posenetisintialized");
        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference=floor(leftwristX-rightwristX);
        console.log("leftwristX="+leftwristX+"rightwristX="+rightwristX+"difference"+diiference);
           }
}
