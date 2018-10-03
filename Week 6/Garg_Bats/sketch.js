/**
 * Adit Garg
 * IGME-101: Bats, 10/03/18
 * Draw bats on user's click. Print moon when the pointer is over the moon. 
 */

"use strict"; //catch some common coding errors
var x, y, batHue, wingX, wingY, batWidth, wingspan, moonDist; //declaring variables
/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */
function setup() {
	createCanvas(1300, 731);
	colorMode(HSB, 360, 100, 100);
	background(217, 90.0, 7.8);
	noStroke();
	moon(); //function draws moon
}

/**
 * draw : Periodically called automatically
 * Summarize code that you add
 */
function draw() {
	x = mouseX;//assigning mouse values to variables
	y = mouseY;
	mouseWithin(x,y);// function checks if pointer is over the moon considering the parameters
	batHue = random(0, 255);// random bat color

}

function mouseClicked() {
	drawBat(x, y, batHue);// function draws the bat
	print("The bat's width is: " + batWidth);// prints the width of the bat
}

function drawBat(x, y, batHue) {
	fill(batHue, 100, 100);
	wingspan = random(100, 150);// random wingzise/ wingspan
	wingY = y;
	batBod(x, y);// calls the function that draws the bat's body
	wingX = x + 25 + wingspan / 2;// ensuring wing's center is such that it's edges fall on top of bat body's circles
	batWing(wingX, y, wingspan);// calling function that draws the wing
	wingX = x - 25 - wingspan / 2;// ensuring wing's center is such that it's edges fall on top of bat body's circle
	batWing(wingX, y, wingspan);// calling function that draws the wing
	batWidth = (wingspan * 2) + 50;// defines the variable that holds the totalwidth of the bat
	return batWidth;
}

function batBod(x, y) {
	ellipse(x, y, 50, 50);//draws bat's body
}

function batWing(wingX, wingY, wingpsan) {
	arc(wingX, wingY, wingspan, 50, PI, 0); // draws a semi circle with a constant height and varying width
}

function moon() {
	fill(200, 4, 89);
	ellipse(1200, 100, 150, 150);// draws moon
}

function mouseWithin(x,y) {
	moonDist = int(dist(x, y, 1200, 100)); // distance of pointer from the moon's center
	if (moonDist<=150){// checks if the pointer is within the moon/ circle.
		print("moon");
	}
}
