/**
 * Adit Garg
 * IGME-101: Assignment Name, m/d/18
 * Summarization of sketch activity
 */

"use strict"; //catch some common coding errors
//global variables
let nettie, ducky;
/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */
function setup() {
	let nettie =new cat("nettie");
	ducky=new toy();
	print(nettie);
	nettie.pickup;
	print("netite's toy", nettie.toy);
	nettie.drop;
	print("netite's toy", nettie.toy);
}

/**
 * draw : Periodically called automatically
 * Summarize code that you add
 */
