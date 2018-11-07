/**
 * Junhao, Ben, Adit
 * IGME-101: Assignment Name, 11/2/18
 * Define an array of 20 stripes. Move them with random speed.
 */

"use strict"; //catch some common coding errors

/**
 * setup : Initialization runs once; called automatically
 * Defines the stripe's as objects and pushes em into an array
 */


let stripe = [];

function setup() {

    createCanvas(800, 500); //canvas
    background("Black");

    // Setup 20 object into the array stripe[]
    for (let i = 0; i < 10; i++) {
        stripe.push(new Stripe());
    }
}


/**
 * draw : Periodically called automatically
 * Summarize code that you add
 */


function draw() {
    background("Black");
    for (let i = 0; i < 10; i++) {
        stripe[i].within(mouseX, mouseY); //is mouse pointer within the stripe
        stripe[i].display(); //displays each stripe object in sequence
        stripe[i].move(); //uses the speed of each stripe to move
        
    }



}
