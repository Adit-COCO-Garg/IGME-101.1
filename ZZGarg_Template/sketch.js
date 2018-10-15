/**
 * Adit Garg
 * IGME-101: Assignment Name, m/d/18
 * Summarization of sketch activity
 */

"use strict"; //catch some common coding errors
let i;
/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */
function setup() {
	createCanvas(windowWidth, windowHeight);
	noFill();
	stroke("white");
	strokeWeight(1);
	background(2, 16, 38);
	createCanvas(400, 400);
	for (i = 30; i < 5; i -= 5) {
		print(i);
	}


	function draw() {
		background(220);
	}
}

/**
 * draw : Periodically called automatically
 * Summarize code that you add
 */
function draw() {
	for (i = 30; i < 5; i -= 5) {
		print(i);
	}

}
