// list the illustration that i am going to use
var armImg;
var backgroundImg;
var bullet1Img;
var bullet2Img;
var bullet3Img;
var bullet4Img;
var bullet5Img;
var wheelImg;
var policeImg;
var position = 160;
var bulletSpeed = 10;
var fireImg;
var reloadImg;
var criminalImg;
var healthImg;
var levelImg;
var hideImg;
var hp = 635;

//preload elements
function preload() {
	armImg = loadImage("images_2/arm.png");
	backgroundImg = loadImage("images_2/background.png");
	bullet1Img = loadImage("images_2/bullet1.png");
	bullet2Img = loadImage("images_2/bullet2.png");
	bullet3Img = loadImage("images_2/bullet3.png");
	bullet4Img = loadImage("images_2/bullet4.png");
	bullet5Img = loadImage("images_2/bullet5.png");
	policeImg = loadImage("images_2/police.png");
	wheelImg = loadImage("images_2/wheel.png");
	fireImg = loadImage("images_2/fire.png");
	reloadImg = loadImage("images_2/reload.png");
	criminalImg = loadImage("images_2/criminal.png");
	healthImg = loadImage("images_2/health.png");
	levelImg = loadImage("images_2/level.png");
	hideImg = loadImage("images_2/hide.png");
}

//draw the canvas
function setup() {
	createCanvas(640, 480);
}

//draw other elements
function draw() {
	image(backgroundImg, 0, 0);
	image(fireImg, 275, 5);
	image(reloadImg, 410, 45);
	image(healthImg, 535, 115);
	image(levelImg, 535, 100);

	//set the difficulty
	if (mouseIsPressed) {
		hp = hp - 0.2;
	} else {
		hp = hp + 0.1;
	}
	image(hideImg, hp, 115);

	//make the bullet go when FIRE! button is clicked
	if (mouseIsPressed &&
		mouseX > 280 &&
		mouseX < 360 &&
		mouseY > 20 &&
		mouseY < 80) {
		position = position + bulletSpeed;
		image(bullet1Img, position, 180);
	}

	//make the reload button to work
	if (mouseIsPressed &&
		mouseX > 410 &&
		mouseX < 590 &&
		mouseY > 50 &&
		mouseY < 90) {
		position = 160;
		image(bullet1Img, position, 180);
	}

	//move the police officer's arm
	if (mouseIsPressed) {
		image(armImg, 82, 195);
	} else {
		image(armImg, 90, 197);
	}

	//draw what is left
	image(criminalImg, 510, 130);
	image(policeImg, 10, 170);
}
