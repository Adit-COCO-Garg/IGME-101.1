/**
 * Adit Garg
 * IGME-101: Assignment Name, m/d/18
 * Summarization of sketch activity
 */

"use strict"; //catch some common coding errors
var dragon1;
/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */
function preload() {
	walkL = loadImage("assets/walkL.png");
	walkR = loadImage("assets/walkR.png");
	faceL = loadImage("assets/faceL.png");
	faceR = loadImage("assts/faceR.png");
}

function setup() {
	//Canvas setup
	createCanvas(1000, 1000); //canvas 600x600
	colorMode(HSB, 360, 100, 100); //color mode set to HSB
	//--------
	frameRate(10);
	dragon1 = new dragon;
}

/**
 * draw : Periodically called automatically
 * Summarize code that you add
 */
function draw() {
	transition();
	display();
}
