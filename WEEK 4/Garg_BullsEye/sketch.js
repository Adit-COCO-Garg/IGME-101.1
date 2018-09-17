/**
 * Adit Garg
 * IGME-101: Assignment Name, m/d/18
 * DRAW'S A BULL'S EYE AT CURSOR
 */

"use strict"; //catch some common coding errors

/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */
function setup() {
    createCanvas(windowWidth, windowHeight);
    //colorMode(HSB, 360, 100, 100);
    background(195, 2, 83);
}

function draw() {
    background(195, 2, 83);
    var w = 200;
    while (w > 0) {
        fill(w);
        ellipse(mouseX, mouseY, w, w);
        print(mouseY);
        w = w - 20;
    }
    
}
/**
 * draw : Periodically called automatically
 * Summarize code that you add
 */
