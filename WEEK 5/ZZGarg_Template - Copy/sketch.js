/**
 * Adit Garg
 * IGME-101: Robot, 09/25/18
 * Drawing a robot with a scenic backdrop
 */

var bg, face, a = 200;

"use strict"; //catch some common coding errors
function preload() {
	bg = loadImage("https://www.dailydot.com/wp-content/uploads/97a/d8/246354a6d4005e451bffc5eb98c9b00a.jpg");
	face = loadImage("Assets/smiley.png");
}
/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */
function setup() {
	drawBackdrop()
	stroke("black");
	city();
	fill("white");
	robot();
}

/**
 * draw : Periodically called automatically
 * Summarize code that you add
 */
function drawBackdrop() {
	createCanvas(1200, 600);
	background(bg);
	sky();
	//filter(GRAY);
}



function sky() {
	var i = 0;
	while (i <= 10){
		cloudX = 100, cloudY = 100;
		cloud(cloudX, cloudY);
		cloudX = random(100, 900), cloudy = random(80, 200);
		cloud(cloudX, cloudY);
		i++;
	}
}

function cloud() {
	fill(255, 255, 255);
	noStroke();
	arc(cloudX, 100, cloudY - 41, 20, PI + TWO_PI, TWO_PI);
	arc(cloudX + 10, cloudY, 125, 45, PI + TWO_PI, TWO_PI);
	arc(cloudX + 25, cloudY, 200, 35, PI + TWO_PI, TWO_PI);
	arc(cloudX + 45, cloudY, 130, 20, PI + TWO_PI, TWO_PI);
}

function city() {
	buildings();
}

function drawBuildings() {
	strokeWeight(10);
	fill("gray");
	rect(a, 200, 200, 400);

}

function buildings() {
	drawBuildings(a);
	a += 300;
	drawBuildings(a);
}

function robot() {
	head();
	body();
	neck();
	faceR();
	Accessories();
}

function head() {
	strokeWeight(6);
	ellipse(1030, 432, 80, 80);
}

function body() {
	strokeWeight(6);
	rect(1000, 480, 60, 120);

}

function neck() {
	strokeWeight(7);
	rect(990, 470, 80, 8);
}

function faceR() {
	image(face, 1000, 420, face.width / 10, face.height / 10);
}

function Accessories() {
	flowerAc()
}

function flowerAc() {
	fill(192, 40, 135);
	translate(1040, 500);
	noStroke();
	for (var i = 0; i < 10; i++) {
		ellipse(0, 5, 2, 15);
		rotate(PI / 5);
	}
}
