/**
 * Adit Garg
 * IGME-101: FSM DRAGON, 11/11/18
 * Animate a dragon object based on user input
 */

"use strict"; //catch some common coding errors
var dragon1, walkL, walkR, faceL, faceR;

function preload() {
    walkL = loadImage("assets/walkL.png");
    walkR = loadImage("assets/walkR.png");
    faceL = loadImage("assets/faceL.png");
    faceR = loadImage("assets/faceR.png");
}
/**
 * setup : Initialization runs once; called automatically
 * The following code creates a canvas of 1000 by 100 px, defines colormode along with framerate, and creates a dragon object.
 */
function setup() {
    //Canvas setup
    createCanvas(1000, 1000); //canvas 1000x1000
    colorMode(HSB, 360, 100, 100); //color mode set to HSB
    //--------
    frameRate(10);//frame rate set to 10
    dragon1 = new dragon;//new dragon object
}

/**
 * draw : Periodically called automatically
 * background called to clear out previous frames and object methods are called to achieve the dragon walking animation
 */
function draw() {
    background(195, 2, 83);//background refreshes display
    dragon1.transition();//transition determines the state
    dragon1.display();//display's the state de
}
