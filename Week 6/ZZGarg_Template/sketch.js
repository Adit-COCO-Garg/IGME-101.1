/**
 * Adit Garg
 * IGME-101: Assignment Name, m/d/18
 * Summarization of sketch activity
 */

"use strict"; //catch some common coding errors
var x, y, batHue, wingX, wingY, number, wingspan;
/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */
function setup() {
	createCanvas(1300, 731);
	colorMode(HSB, 360, 100, 100);
	background(195, 2, 83);
	noStroke();
}

/**
 * draw : Periodically called automatically
 * Summarize code that you add
 */
function draw() {
	x = mouseX;
	y = mouseY;
	batHue = random(0, 255);

}

function drawBat(x, y, batHue) {
	fill(batHue, 100, 100);
	wingspan = random(100, 150);
	wingY = y;
	batBod(x, y);
	wingX = x + 200;
	batWing(x, y, wingspan);
	wingX = x - 200;
	batWing(x, y, wingspan);

	number = 0;
	return number;
}

function batBod(x, y) {
	ellipse(x, y, 50, 50);
}

function batWing(wingX, wingY, wingpsan) {
	arc(wingX, wingY, wingspan, 50, PI, 0);
}

function mouseClicked() {
	drawBat(x, y, batHue);
	print(number);
}
