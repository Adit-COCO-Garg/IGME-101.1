/**
 * Adit Garg
 * IGME-101: Scribbler, 9/12/18
 * Set drawing color based on typed letter
 */

"use strict"; //catch some common coding errors

/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */
function setup() {
    createCanvas(windowWidth, windowHeight);
    background("white");
    strokeWeight(10);
}

/**
 * draw : Periodically called automatically
 * Summarize code that you add
 */
function draw() {
    point(mouseX, mouseY);

}

function keyPressed() {
    //shape
    if (key === "b" || key === "B") {
        stroke("blue");
    } else if (key === "g" || key === "G") {
        stroke("green");
    } else if (key === "o" || key === "O") {
        stroke("orange");
    } else if (key === "p" || key === "P") {
        stroke("purple");
    } else if (key === "r" || key === "R") {
        stroke("red");
    }

}
