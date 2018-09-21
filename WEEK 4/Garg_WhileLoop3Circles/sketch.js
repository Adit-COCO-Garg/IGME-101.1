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
function setup() {
	createCanvas(windowWidth, windowHeight);

}

/**
 * draw : Periodically called automatically
 * Summarize code that you add
 */
function draw() {
	let diameter;
	let yPos;
	diameter = height / 5;
	while (diameter > 0) {
		yPos = mouseY - diameter;
		while (yPos <= mouseY + diameter) {
			fill(diameter * 5, mouseX / 2, yPos * 100);
			ellipse(mouseX, yPos, diameter, diameter);
			yPos += diameter;
		}
		diameter -= 20;
	}
}
