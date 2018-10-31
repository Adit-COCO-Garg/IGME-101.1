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

	//Canvas setup
	createCanvas(600, 600); //canvas 1000x1000
	colorMode(HSB, 360, 100, 100); //color mode set to HSB
	background(195, 2, 83); //light gray background
	//--------
	noStroke();
	//testing string properties
	let aString = "Trick or treat";
	text(aString[3], 20, 60);
	//adding strings
	aString.concat(" Later.");
	//Does concat affect the original string?
	print(aString);
	print(aString.concat(" Later."));
	// using +
	let msg = "Danger!";
	let accum = "";
	accum = accum + msg + " ";
	accum = accum.concat(msg);
	accum = accum + " No?";
	print (accum);
	//change case
	let hey = "Danger!";
	print(hey.toLowerCase());
	// "danger!"
	let whoa = "danger!";
	if (hey.toLowerCase() === whoa.toLowerCase()) {
		print("basically equal");
	}
	//Change case with .toLowerCase() or .toUpperCase() methods. Neither affects the value of the original string
	//splitting strings
	let whe = "Danger, Will R!";
	let wheSplit = whe.split(" ");
	print(wheSplit);
}

/**
 * draw : Periodically called automatically
 * Summarize code that you add
 */
function draw() {

}
