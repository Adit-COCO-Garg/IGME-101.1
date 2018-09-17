/**
 * Adit Garg
 * IGME-101: Assignment Name, 08/31/18
 * Event Handlers
 */

"use strict"; //catch some common coding errors

/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */
/**var myFont;
function preload() {}
  */
function setup() {
    createCanvas(500, 500);
    background(2, 16, 38);
    fill("orange");
    noStroke();
    ellipse(250, 250, 50, 50);

}

function mouseClicked() {
    noFill();
    stroke("deepPink");
    strokeWeight(1);
    ellipse(mouseX, mouseY, 30, 50);
}

function keyTyped() {
    fill("DeepSkyBlue");
    noStroke();
    rect(random(0,500), random(0,500), 20, 40);
}

function mouseDragged() {
    clear();
}

/**
 * This code allows the user to draw circles, rectangles, and obliterate the canvas.
 */