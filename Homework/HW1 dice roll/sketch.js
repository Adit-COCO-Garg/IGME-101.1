/**
 * Adit Garg
 * IGME-101: HW1 DiceRolling, 9/14/18
 * Roll dice on user prompt
 */

"use strict"; //catch some common coding errors
var exclMark, diceButton, rollDice, rollDiceValue, dotXposition;
/**
 * setup : Initialization runs once; called automatically
 * The objectve of this program is allow the user to "roll a dice" by clicking the green button.
 */
function setup() {
	createCanvas(400, 400); //Canvas intialized
	colorMode(HSB, 360, 100, 100); //Max hue, max saturation, and max brightness. And color mode set to HSB
	background(195, 2, 83); //Light gray background
	noStroke();
	exclMark(); //Calls the exclamation mark in function as it would only be drawn once
}

/**
 * draw : Periodically called automatically
 * Summarize code that you add
 */
function draw() {
	diceButton(); //This function draws the button
}

function exclMark() {
	fill("black");
	rect(180, 70, 40, 100); 
	ellipse(200, 200, 40, 40);// The exclamation mark is horizontally and vertically centered on the screen.
}

function diceButton() { //The function to draw the dice button
	fill(120, 100, 50);
	rect(270, 20, 100, 50);
}

function mousePressed() {
	if ((mouseX >= 270) && (mouseY >= 20) && (mouseX <= 370) && (mouseY <= 70)) { //Bounding conditions for button created, allowing the "dice to be rolled only when the user clicks inside the "dark green button"
		background(195, 2, 83);// Previous roll/ instance cleared
		rollDice(); //This function rolls the dice
	}
}

function rollDice() {
	dotXposition=40; //Intialize position variable for 'X' position of the dots.
	rollDiceValue = int(random(1, 6)); //Randomly generates a value between 1 to 6 (inclusive). Which is similar to rolling the dice.
	print(rollDiceValue);// Prints the value generated in console.
	fill((random(0, 255)), 100, 100); //Assigns the dots a random hue value between 0 and 255 (inclusive) and ensures each dot has max saturation and brinhtness
	if (rollDiceValue >= 1) {//each if block draws the dot once, depending on the value of the roll.
		ellipse(dotXposition, 250, 40, 40);
	}
	if (rollDiceValue >= 2) {
		dotXposition+=60;
		ellipse(dotXposition, 250, 40, 40);
	}
	if (rollDiceValue >= 3) {
		dotXposition+=60;
		ellipse(dotXposition, 250, 40, 40);
	}
	if (rollDiceValue >= 4) {
		dotXposition+=60;
		ellipse(dotXposition, 250, 40, 40);
	}
	if (rollDiceValue >= 5) {
		dotXposition+=60;
		ellipse(dotXposition, 250, 40, 40);
	}
	if (rollDiceValue >= 6) {
		dotXposition+=60;
		ellipse(dotXposition, 250, 40, 40);
	}

}
