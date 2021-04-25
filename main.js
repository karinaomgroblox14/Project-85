var canvas= document.getElementById("myCanvas");
background_image="https://thumbs.dreamstime.com/b/race-track-view-top-illustration-cartoon-isolated-white-background-174314871.jpg"
ctx= canvas.getContext("2d");
Car1_image= "Car1.png"
Car1_x= 10;
Car1_y= 10;

Car2_image= "Car2.png"
Car2_x= 10;
Car2_y= 10;


function add() {
background_imgTag = new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src = background_image;

Car1_imgTag = new Image();
Car1_imgTag.onload = uploadCar1;
Car1_imgTag.src = Car1_image;

Car2_imgTag = new Image();
Car2_imgTag.onload = uploadCar2;
Car2_imgTag.src = Car2_image;
}

function uploadBackground() {
ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar1() {
ctx.drawImage(Car1_imgTag, Car1_x, Car1_y, 100, 100);
}

function uploadCar2() {
    ctx.drawImage(Car2_imgTag, Car2_x, Car2_y, 100, 100);
    }

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
keyPressed = e.keyCode;
console.log(keyPressed);
if (keyPressed == '38'){
Car1_up();
console.log("up");
}
if(keyPressed == '40')
{
Car1_down();
console.log("down");
}
if(keyPressed == '37')
{
Car1_left();
console.log("left");
}
if(keyPressed == '39')
{
Car1_right();
console.log("right");
}
 if (keyPressed == '87'){
    Car2_up();
    console.log("W");
    }
    if(keyPressed == '83')
    {
    Car2_down();
    console.log("S");
    }
    if(keyPressed == '65')
    {
    Car2_left();
    console.log("A");
    }
    if(keyPressed == '68')
    {
    Car2_right();
    console.log("D");
    }
    }

function Car1_up() {
if (Car1_y>=0) {
Car1_y= Car1_y-10;
uploadBackground();
uploadCar1();
}
}

function Car1_down() {
if (Car1_y<=500){
Car1_y= Car1_y+10;
uploadBackground();
uploadCar1();
}
}

function Car1_left() {
if (Car1_x>=0){
Car1_x= Car1_x-10;
uploadBackground();
uploadCar1();
}
}

function Car1_right() {
if (Car1_x<=700){
Car1_x= Car1_x+10;
uploadBackground();
uploadCar1();
}
}

function Car2_up() {
    if (Car2_y>=0) {
    Car2_y= Car2_y-10;
    uploadBackground();
    uploadCar2();
    }
    }
    
    function Car2_down() {
    if (Car2_y<=500){
    Car2_y= Car2_y+10;
    uploadBackground();
    uploadCar2();
    }
    }
    
    function Car2_left() {
    if (Car2_x>=0){
    Car2_x= Car2_x-10;
    uploadBackground();
    uploadCar2();
    }
    }
    
    function Car2_right() {
    if (Car2_x<=700){
    Car2_x= Car2_x+10;
    uploadBackground();
    uploadCar2();
    }
    }

