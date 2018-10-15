/**
 * Adit Garg
 * IGME-101: Assignment Name, m/d/18
 * Summarization of sketch activity
 */

"use strict"; //catch some common coding errors
var phase = "dots",
	drawWeight = 3;
/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */
function setup() {
	createCanvas(600, 600);
	stroke('White');
	background("Black");
}

/**
 * draw : Periodically called automatically
 * Summarize code that you add
 */
//PARAMETERS

function draw() {
	if (phase === "dots") {
		drawDot();
	} else if (phase === "scribble") {
		drawScribble();
	} else if (phase === "cross") {
		drawCross(mouseX,mouseY);
	}
}

function keyTyped() {
	drawWeight = 1 + (keyCode % 10);
	print(drawWeight);
}

function mouseClicked() {
	background("Black");
	if (phase === "dots") {
		phase = "scribble";
		strokeWeight(drawWeight);
	} else if (phase === "scribble") {
		phase = "cross";
		noStroke();
	} else if (phase === "cross") {
		phase = "dots";
		noStroke();
		fill("white");
	}
	print(phase);
}

function drawDot() {
	fill(random(0, 255), random(0, 255), random(0, 255), (drawWeight * 10));
	ellipse(mouseX, mouseY, 50, 50);
}

function drawScribble() {
	strokeWeight(drawWeight); //<-- even though the stroke weight is already defined when the phase changes, it is defined here again as per the assignment document
	fill("white");
	line(mouseX, mouseY, mouseX, mouseY);
}

function drawCross(mouseX, mouseY) {
	background("Black");
	let xPos = 0;
	while (xPos <= width) {
		ellipse(xPos, mouseY, drawWeight, drawWeight);
		xPos += 10;
	}
	let yPos;
	for (yPos = 0; yPos <= height; yPos += 10) {
		ellipse(mouseX, yPos, drawWeight, drawWeight);

	}


}
