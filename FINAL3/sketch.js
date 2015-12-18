//bring illustration to the p5
var backgroundImage;
var blueImage;
var redImage;
var bluesirenImage;
var redsirenImage;
var carImage;
var wordImage;
var thanksImage;
var speed = 3;
var c = -50;
var r = 70;
var b = 95;
var rs = 37;
var bs = 62;
var w = 640;
var T = 1200;

//preload elements for the project
function preload() {
	backgroundImage = loadImage("images_3/background.png");
	blueImage = loadImage("images_3/blue.png");
	redImage = loadImage("images_3/red.png");
	bluesirenImage = loadImage("images_3/bluesiren.png");
	redsirenImage = loadImage("images_3/redsiren.png");
	carImage = loadImage("images_3/car.png");
	wordImage = loadImage("images_3/word.png");
	thanksImage = loadImage("images_3/thanks.png");
}

function setup() {
	createCanvas(640, 480);
}

function draw() {
	image(backgroundImage, 0, 0);

	//set up condition for the movement for later
	// c = car r=red b=blue rs=redsiren bs=bluesiren w=word T=thank
	if (mouseIsPressed) {
		c = c + speed;
		r = r + speed;
		b = b + speed;
		rs = rs + speed;
		bs = bs + speed;
		w = w - speed;
		T = T - speed;
	}

	//draw illustration
	image(carImage, c, 300);
	image(redImage, r, 295);
	image(blueImage, b, 295);
	image(wordImage, w, 100);

	//make it to stay at the end
	image(thanksImage, T, 250);
	if (T <= 50) {
		T = 50;
	}

	//make a siren to blink
	tint(255, random(0, 255));
	image(redsirenImage, rs - 2, 257);
	image(bluesirenImage, bs - 2, 257);


}
