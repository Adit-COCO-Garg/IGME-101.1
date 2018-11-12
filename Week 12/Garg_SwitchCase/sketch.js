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
let input = prompt("How are you today?");
	switch (input) {
		case "good":
			print("I'm good too!");
			break;
		case "sad":
			print("I'm sorry you're sad. Have a cookie.");
			break;
		case "mad":
			print("Hope it wasn't me who made you mad!");
			break;
		case "hungry":
			print("Let's go have a snack!");
			break;
		default:
			print("Thank you for letting me know.");
	}
}

/**
 * draw : Periodically called automatically
 * Summarize code that you add
 */
function draw() {

}
