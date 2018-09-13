/**
 * Adit Garg
 * IGME-101: Garg Bounce, 9/7/18
 * Bounce: Make a ball bounce at walls of canvas
 */

"use strict"; //catch some common coding errors

/* Global Variables */
//ball position
let x;
let y;
//ball speed
let xSpeed;
let ySpeed;
/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */
function setup() {
    createCanvas(400, 300);
    background(2, 16, 38);
    xSpeed = 1; // behavior if -1?
    ySpeed = 1; // behavior if -1?
    x = width / 2;
    y = height / 2;
}

/**
 * draw : Periodically called automatically
 * Summarize code that you add
 */
function draw() {

    background(2, 16, 38);
    // draw the ball
    fill(random(0, 250), random(0, 250), random(0, 250));
    ellipse(x, y, 20, 20);

    //Horizonntal bounce
    if (x === 390 || x === 10) {
        xSpeed = -xSpeed;
    }

    //vertical bounce
    if (y === 290 || y === 10) {
        ySpeed = -ySpeed;
    }

    // move the ball
    x = x + xSpeed;
    y = y + ySpeed;
}
