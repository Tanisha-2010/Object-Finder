model_status = "";

function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
    canvas.position(550, 300);

    video = createCapture(480, 380);
    video.hide();
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Objects Detecting";
    input = document.getElementById("inpt_tag").value;
}

function modelLoaded() {
    console.log("Model is initialised");
    model_status = true;
}

function draw() {
    image(video, 0, 0, 480, 380);
}