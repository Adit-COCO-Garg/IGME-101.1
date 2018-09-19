/**
 * Adit Garg
 * IGME-101: HW1 DiceRolling, 9/14/18
 * Roll dice on user prompt
 */

"use strict"; //catch some common coding errors
var exclMark, diceButton, rollDice, ellipPositionX, rollDiceValue;
/**
 * setup : Initialization runs once; called automatically
 * The objectve of this program is allow the user to "roll a dice" by clicking the green button.
 */
function setup() {
	createCanvas(400, 400);
	colorMode(HSB, 360, 100, 100);
	background(195, 2, 83);
	noStroke();
	exclMark();
}

/**
 * draw : Periodically called automatically
 * Summarize code that you add
 */
function draw() {
	diceButton();
}

function exclMark() {
	fill("black");
	rect(180, 70, 40, 100);
	ellipse(200,200,40,40);
	

}

function diceButton() {
	fill(120, 100, 50);
	rect(270, 20, 100, 50);
}

function mousePressed() {
	if ((mouseX >= 270) && (mouseY >= 20) && (mouseX <= 370) && (mouseY <= 70)) {
		background(195, 2, 83);
		rollDice();
	}
}

function rollDice() {
	rollDiceValue = int(random(1, 6));
	print(rollDiceValue);
	fill((random(0, 255)), 100, 100);
	if (rollDiceValue >= 1) {
		ellipse(40, 250, 40, 40);
	}
	if (rollDiceValue >= 2) {
		ellipse(100, 250, 40, 40);
	}
	if (rollDiceValue >= 3) {
		ellipse(160, 250, 40, 40);
	}
	if (rollDiceValue >= 4) {
		ellipse(220, 250, 40, 40);
	}
	if (rollDiceValue >= 5) {
		ellipse(280, 250, 40, 40);
	}
	if (rollDiceValue >= 6) {
		ellipse(340, 250, 40, 40);
	}

}
