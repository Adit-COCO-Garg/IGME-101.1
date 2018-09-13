/**
 * Yourfirstand Lastname
 * IGME-101: Assignment Name, m/d/18
 * Summarization of sketch activity
 */

"use strict"; //catch some common coding errors

let startPos1X;
let startPos1Y;
let startPos2X;
let startPos2Y;
let sqSide;
/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */
function setup() {
    createCanvas(windowWidth, windowHeight);
    noFill();
    stroke("white");
    strokeWeight(1);
    // DEFINING VARIABLES
    startPos1X = 520;
    startPos1Y = 40;
    startPos2X = windowHeight + 420;
    startPos2Y = 40;
    sqSide = 10;

}

/**
 * draw : Periodically called automatically
 * Summarize code that you add
 */
function draw() {
    background(2, 16, 38);
    rect(startPos1X, startPos1Y, sqSide, sqSide);
    rect(startPos2X, startPos2Y, sqSide, sqSide);
    startPos1X = startPos1X + 1;
    startPos1Y = startPos1Y + 1;
    startPos2X = startPos2X - 1;
    startPos2Y = startPos2Y + 1;
   
    
}

function mousePressed() {
    startPos1X = 520;
    startPos1Y = 40;
    startPos2X = windowHeight + 420;
    startPos2Y = 40;
}
/**
 * draw : Periodically called automatically
 * Summarize code that you add
 */
