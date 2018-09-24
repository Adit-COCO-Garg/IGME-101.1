/**
 * Adit Garg
 * IGME-101: Assignment Name, m/d/18
 * Summarization of sketch activity
 */
var img;
"use strict"; //catch some common coding errors
function preload() {
	bg = loadImage("https://www.dailydot.com/wp-content/uploads/97a/d8/246354a6d4005e451bffc5eb98c9b00a.jpg");
	face = loadImage("");
}
/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */
function setup() {
	drawBackdrop()
	stroke("black");
	makeRobot();



}

/**
 * draw : Periodically called automatically
 * Summarize code that you add
 */
function drawBackdrop() {
	createCanvas(windowWidth, windowHeight);
	background(bg);
	//filter(GRAY);
}

function drawBuildings() {

}

function makeRobot() {
	body();
	Accessories();

}

function createFace() {

}

function buildings() {

}

function head() {

}

function neck() {

}

function Accessories() {
	flowerAc()
}

function body() {
	strokeWeight(4);
	rect(width - 400, height - 300, width / 13, height / 3);

}

function flowerAc() {
	fill(192, 40, 135);
	translate(width - 300, height - 200);
	noStroke();
	for (var i = 0; i < 10; i++) {
		ellipse(0, 5, 10, 50);
		rotate(PI / 5);
	}
}

function sky() {

}


function city() {

}


function robot() {

}
