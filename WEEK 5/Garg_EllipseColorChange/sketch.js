/**
 * Adit Garg
 * IGME-101: Assignment Name, m/d/18
 * Summarization of sketch activity
 */

"use strict"; //catch some common coding errors

/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */
var i, j = 0; //store current ellipse color

function setup() {
	createCanvas(innerWidth, innerHeight);
	ellipseMode(CORNER);
}

function draw() {
	if (millis() % 2000 === 0) {
		fill(255);
		if (j % 2 === 0) {
			fill(0);
		}
		for (i = 40; i <= innerWidth; i += 40) {
			ellipse(i, 0, 20, 20);
			j++;
		}
	}

}
