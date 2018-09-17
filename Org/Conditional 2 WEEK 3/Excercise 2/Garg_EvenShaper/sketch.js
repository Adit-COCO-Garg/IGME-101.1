/**
 * Adit Garg
 * IGME-101: Even Shaper, 09/12/18
 * Draw shapes depending on even or odd key value
 */

"use strict"; //catch some common coding errors
/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */
function setup() {
    createCanvas(windowWidth, windowHeight);
    noFill();
    stroke("white");
    strokeWeight(1);
    //background(2, 16, 38);
}

/**
 * draw : Periodically called automatically
 * Summarize code that you add
 */
function draw() {
    background(2, 16, 38);// I used background here because it was used in the excercise 2 assignment.
    if ((keyCode % 2) === 0) {
        ellipse(mouseX, mouseY, 60, 60);
    } else {
        rect(mouseX, mouseY, 60, 60);
    }
}
