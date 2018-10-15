/**
 * Adit Garg
 * IGME-101: Assignment Name, m/d/18
 * Summarization of sketch activity
 */

"use strict"; //catch some common coding errors
//global variables inti
/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */
function setup() {
	createCanvas(600, 600);
	colorMode(HSB, 360, 100, 100);
	background(217, 90.0, 7.8);
}
//2 balls randomly sized 50 - 100
/**
 * draw : Periodically called automatically
 * Summarize code that you add
 */
function draw() {
	confetti();
	drawballs();
	moveballs();
}

function mouseWithin(x, y) {
	moonDist = int(dist(x, y, 1200, 100)); // distance of pointer from the moon's center
	if (moonDist <= 150) { // checks if the pointer is within the moon/ circle.
		print("moon");
	}
}
