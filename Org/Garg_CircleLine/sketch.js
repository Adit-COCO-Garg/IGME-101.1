/**
 * Adit Garg
 * IGME-101: Assignment Name, 08/27/18
 * Summarization of sketch activity Draw line 
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
    //loadFont('Assets/BebasNeue-Regular.otf', drawText);
    //loadFont('Assets/RofiTaste.otf', drawText);
    loadFont('Assets/BadWeatherDemo.ttf', drawText);
    //loadFont('Assets/HARRYP_.ttf', drawText);
    createCanvas(windowWidth, windowHeight);
    background(2, 16, 38);
    lineowrjubg();
    circleiyh();
}
function lineowrjubg() {
    stroke("white");
    strokeWeight(1);
    line(500, 500, 1500, 500);
}
function circleiyh(){
    noFill();
    stroke("white");
    strokeWeight(1);
    ellipse(750, 250, 400, 400);
    ellipse(1250, 750, 400, 400);
}
function circleiyh(){
    noFill();
    stroke("white");
    strokeWeight(1);
    ellipse(750, 250, 400, 400);
    ellipse(1250, 750, 400, 400);
}
function drawText(font) {
    fill("white");
    strokeWeight(1);    
    textFont(font, 100);
    text("The Weather is Bad", 1340,930);
}

/**function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
/**
* Line 14: from https://github.com/processing/p5.js/wiki/Positioning-your-canvas. 08/29/2018
/**
 * draw : Periodically called automatically
 * Summarize code that you add
 */
