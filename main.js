canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

mars_images = ["M1.jpg", "M2.jpg", "M3.jpg", "R1.png"]
random_Number = Math.floor(Math.random() * 4)

rover_image = "rover.png";

background_image = mars_images[random_Number];

rover_x = 10;
rover_y = 10;

rover_w = 100;
rover_h = 90;

function add() {
    background_imageTag = new Image();
    background_imageTag.onload = uploadBackground;
    background_imageTag.src = background_image;

    roverTag = new Image();
    roverTag.onload = uploadRover;
    roverTag.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(roverTag, rover_x, rover_y, rover_w, rover_h);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == '37') {
        left();
        console.log("Left")
    }
    if (keyPressed == '38') {
        up();
        console.log("Up");
    }
    if (keyPressed == '39') {
        right();
        console.log("Right");
    }
    if (keyPressed == '40') {
        down();
        console.log("Down");
    }
}

function up() {
    if (rover_y >= 0) {

        rover_y = rover_y - 10;
        console.log("new X-"+ rover_x + "new Y-"+ rover_y);

        uploadBackground();
        uploadRover();
    }
}

function down() {
    if (rover_y <= 510) {
        rover_y = rover_y + 10;
        console.log("new X-"+ rover_x + "new Y-"+ rover_y);

        uploadBackground();
        uploadRover();
    }
}

function left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        console.log("new X-"+ rover_x + "new Y-"+ rover_y);

        uploadBackground();
        uploadRover()
    }
}

function right() {
    if (rover_x <= 700) {
        rover_x = rover_x + 10;
        console.log("new X-"+ rover_x + "new Y-"+ rover_y);

        uploadBackground();
        uploadRover()

    }
}


