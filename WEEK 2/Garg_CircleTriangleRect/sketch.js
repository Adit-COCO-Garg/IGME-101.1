/**
 * Yourfirstand Lastname
 * IGME-101: Assignment Name, m/d/18
 * Summarization of sketch activity
 */

"use strict"; //catch some common coding errors
let shapeMode;
let visProp;
/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(2, 16, 38);
    noFill();
    stroke("white");
    strokeWeight(1);
}
/**
 * draw : Periodically called automatically
 * Summarize code that you add
 */
function draw() {
    if (shapeMode === "c") {
        ellipse(mouseX, mouseY, 50, 50);
    } else if (shapeMode === "r") {
        rect(mouseX, mouseY, 50, 50);
    } else if (shapeMode === "t") {
        triangle(mouseX + 25, mouseY, mouseX - 25, mouseY, mouseX, mouseY + 50);
    }
    if (visProp==="h") {
        hue=hue+1;
    } else if (visProp==="b") {
        bright=bright+1;
    } 
}

function keyPressed() {
    //shape
    if (key === "c" || key === "C") {
        shapeMode = "c"
    } else if (key === "r" || key === "R") {
        shapeMode = "r"
    } else if (key === "t" || key === "T") {
        shapeMode = "t"
    }
    //hue and bright
    if (key === "b" || key === "B") {
        visProp = "b"
    } else if (key === "h" || key === "H") {
        visProp = "h"
    } 
    
}
