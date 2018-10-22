/**
 * Adit Garg
 * IGME-101: Assignment Name, m/d/18
 * Summarization of sketch activity
 */

"use strict"; //catch some common coding errors

var xPos, yPos,xTextPos=0;


/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */
function setup() {
	
	createCanvas(1920, 1080); //Canvas intialized
	colorMode(HSB, 360, 100, 100); //Max hue, max saturation, and max brightness. And color mode set to HSB
	noStroke();


}
/**
 * draw : Periodically called automatically
 * Summarize code that you add
 */
function draw() {
	background(195, 2, 83);
	xPos = mouseX;
	yPos = 0;
	while (yPos < 1080) {
		fill(((yPos / 1080) * 360), 100, 100);
		drawShape(xPos, yPos);
		yPos += 120;
	}
	for (yPos=0;yPos<height;yPos+=80){
		
		 drawText(yPos);
	}



}
function drawText() {
    fill("black");
    strokeWeight(1);
	stroke("black");
    textFont("Avenir", 50);
	xTextPos=yPos+700;
	text(key, xTextPos,yPos);
	
    
}
function drawShape(xPos, yPos) {
	noStroke();
	rect(xPos, yPos, 100, 100);
}
