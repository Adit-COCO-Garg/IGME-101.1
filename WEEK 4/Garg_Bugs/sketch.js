/**
 * Adit Garg
 * IGME-101: Adit Garg, 09/21/18
 * Summarization of sketch activity
 */

"use strict"; //catch some common coding errors

/**
 * setup : Initialization runs once; called automatically
 * This code iteratively prints rows and columns of bugs.
 */
function setup() {
	let legX, legY;
	var yPos = 50;
	var xPos = 50;
	createCanvas(windowWidth, windowHeight);
	stroke("white");
	strokeWeight(1);
	background(2, 16, 38);
	while (yPos < innerHeight) {
		if (innerHeight - yPos >= 110) {
			xPos = 50;
			while (xPos < innerWidth) {
				if (innerWidth - xPos >= 250) {
					rect(xPos, yPos, 200, 40);
					ellipse(xPos - 20, yPos + 20, 50, 30);
					strokeWeight(4);
					legX = xPos + 10;
					legY = yPos;
					while (legX < xPos + 200) { // within body?
						line(legX, yPos - 30, legX, yPos + 80); //place next leg
						legX = legX + 15;
					}
				}

				xPos += 300
			}
		}


		yPos += 150

	}

} // end setup


/**
 * draw : Periodically called automatically
 * Summarize code that you add
 */
