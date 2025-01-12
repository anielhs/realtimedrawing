noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    document.getElementById("square_side").innerHTML = "Width and Height of the square will be = "+ difference+"px";
    background('#969A97');
    fill('#F90093');
    stroke('#F9003');
    square(noseX,noseY, difference);
}
function modelLoaded(){
    console.log('PoseNet is Intialized!');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseX = results[0].pose.nose.y;
        console.log("noseX = " + noseX +"noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("LeftWristX = "+leftWristX+"RightWristX = "+rightWristX+"difference = "+difference);
    }
}