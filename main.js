noseX = 0;
noseY = 0;


function preload(){
much = loadImage('https://i.postimg.cc/rmKXHN2v/muchtase.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(300,300);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function draw(){
image(video,0,0,300,300);
image(much, noseX, noseY, 100, 50);
}

function take_snapshot(){
    save('your_image.png');
}

function gotPoses(results)
{
    if (results.length > 0) {
        console.log(results);
    noseX = results[0].pose.nose.x-50;
    noseY = results[0].pose.nose.y-10;


    console.log("nose x = "+ noseX);
    console.log("nose y = "+ noseY);
    }
}