noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup() {
    canvas = createCanvas(600, 600);
    canvas.position(650, 230);

    video = createCapture(VIDEO);
    video.size(600, 600);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw() {
    background("lightblue");
    document.getElementById("square_side").innerHTML = "Width and Heigth of the square will be = " + difference + "px";
    textSize(difference);
    fill("red");
    text("Nilanshu", noseX, noseY);
}

function modelLoaded() {
    console.log("Posenet is Intiallized");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("Left Wrist = " + leftWristX + ", Right Wrist = " + rightWristX + ", Difference = " + difference);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X coordinates = " + noseX + ", Nose Y coordinates = " + noseY);
    }
}