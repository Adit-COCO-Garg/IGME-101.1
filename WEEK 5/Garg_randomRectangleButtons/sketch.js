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
	drawBackdrop();

}

function draw() {

	noStroke();
	fill("red");
	rect(100, 10, 50, 300);
	 if (isInside(mouseX, mouseY, 100, 10, 50, 300)){
		 print ("The cursor is in red polygon");
	 }
		

	fill("green");
	rect(400, 200, 200, 200);
	if (isInside(mouseX, mouseY, 400, 200, 200, 200)){
		 print ("The cursor is in green polygon");
	}

	fill("blue");
	rect(500, 500, 135, 100);
	if (isInside(mouseX, mouseY, 500, 500, 135, 100)){
		 print ("The cursor is in blue polygon");
	}

	fill("hotpink");
	rect(700, 500, 128, 50);
	if (isInside(mouseX, mouseY, 700, 500, 128, 50)){
		 print ("The cursor is in hot pink polygon");
	}

	fill("darkgreen");
	rect(700, 100, 300, 124);
	if (isInside(mouseX, mouseY, 700, 100, 300, 124)){
		 print ("The cursor is in dark green polygon");
	}


}

function isInside(x, y, rLeft, rTop, rWidth, rHeight) {
	return (x >= rLeft) && (x <= rLeft + rWidth) &&(y >= rTop) && (y <= rTop + rHeight);
}


function drawBackdrop() {
	createCanvas(1300, 720);
	colorMode(HSB, 360, 100, 100); //Max hue, max saturation, and max brightness. And color mode set to HSB
	background(195, 2, 83); //Light gray background
}

/**
 * draw : Periodically called automatically
 * Summarize code that you add
 */
