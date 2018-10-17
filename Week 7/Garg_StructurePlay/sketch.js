/**
 * Adit Garg
 * IGME-101: 8-1 StructurePlay , 10/17/18
 * The shape changes whenever mouse is clicked once and the color of the shapes is determined by Y and their X position by Mouse's X position. Clicking on the keyboard results in key value being printed diagonally with similar fill conditions as to shapes with slight changes and double click alternates font. While all this happens a rectangle remains at bottom which changes it's hue depending on the X positon and stays in place under the rest of the visual elements. The shape's HSB Brightness value depends on Framecount.
 */

"use strict"; //catch some common coding errors
var phase = "squares",
	x, y, distMouse, diagonalLenght, font, fontSize, fontMult, font1, font2, fillMult, brightFrameCount;
/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */
function preload() {
	font1 = loadFont('Assets/HARRYP__.TTF');
	font2 = loadFont('Assets/BadWeatherDemo.ttf');
	font = font1; //font has to be intialized in preload
}

function setup() {
	createCanvas(1000, 1000); //Canvas intialized
	colorMode(HSB, 360, 100, 100); //Max hue, max saturation, and max brightness. And color mode set to HSB
	noStroke();
	print("*******************************************");
	print("Click on any key on the keyboard!");
	print(" Double click: changes font!");
	print(" Single click: changes shape!");
	print("Brightness value in HSB fill values for shapes changes depending on framecount")
	print("*******************************************");
}

/**
 * draw : Periodically called automatically
 * Summarize code that you add
 */
function draw() {
	background(195, 2, 83); //Light gray background
	x = mouseX;
	y = 50;
	distMouse = dist(0, 0, mouseX, mouseY);
	diagonalLenght = dist(0, 0, width, height);
	fontMult = ((distMouse / diagonalLenght) * 100);
	fillMult = ((distMouse / diagonalLenght) * 360);
	fontSize = 60 + fontMult;
	visualElement(fillMult);
	while (y < (height - 70)) {
		fill(((y / 1000) * 360), 100, brightFrameCount); // A hue value within the range 0 to 360 (by using the height as a percent of 360) using mouse Y
		brightFrameCount = frameCount;
		if (brightFrameCount >= 100) {
			frameCount = 0;
		}
		drawShape(x, y);
		y += 70;
	}

	for (y = 50; y < height - 70; y += 70) {
		fill((((height - y) / 1000) * 360), 100, 100); // A hue value within the range 0 to 360 (by using the height as a percent of 360) using mouse Y
		drawText(x, y, fontSize);
	}
}
//ShapeCaller
function drawShape(x, y) {
	if (phase === "squares") {
		drawSquares(x, y);
	} else if (phase === "circles") {
		drawCircles(x, y);
	} else if (phase === "triangles") {
		drawTriangles(x, y);
	}
}
//EventHandlers
function mouseClicked() {
	if (phase === "squares") {
		phase = "circles";
	} else if (phase === "circles") {
		phase = "triangles";
	} else if (phase === "triangles") {
		phase = "squares";
	}
	print(phase);
}

function doubleClicked() {
	if (font === font1) {
		font = font2;
	} else if (font === font2) {
		font = font1;
	}
}

//SHAPES
function drawSquares(x, y) {
	rect(x, y, 50, 50);
}

function drawCircles(x, y) {
	ellipse(x, y, 50, 50);
}

function drawTriangles(x, y) {
	triangle(x, y - 25, x, y + 25, x + 50, y);
}

function drawText(x, y, fontSize) {
	textFont(font);
	textSize(fontSize); //uses the dist function to find distance of mouse from origin and increases the font size upto 130px at the furthest distance from origin via using dist as a percent of 100px.
	text(key, y, y); //text positioned diagonally across the screen as x=y and y=y and since y is incremented by the same value.
}

function visualElement() {
	fill(fillMult, 100, 100);
	rect(450, 800, 100, 50);
}
