/**
 * Adit Garg
 * IGME-101: Lyrics, 11/13/18
 * Michl kill our way to heaven's verses our displayed and switched between via the click of a spacebar and 2 images are displayed based on the verses.
 */
let bebas;//global variable
"use strict"; //catch some common coding errors

function preload() {//prelaods assets
    bebas = loadFont("assets/BebasNeue-Regular.otf")
    climb = loadImage("assets/climb.png");
//    crown = loadImage("assets/crown.jpg");
    fight = loadImage("assets/fight.jpg");
    //NOTE: Crown and fight taken out since assignment only asks for 2 images. THE CODE IS COMMENTED OUT AS THE ASSIGNMENT PAGE IS UNCLEAR REGARDING INCLUSION OF MORE THAN 2 IMAGES.
    //weak = loadImage("assets/weak.jpg");
}
/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */
function setup() {
    //Canvas setup
    createCanvas(1000, 1000); //canvas 1000x1000
    colorMode(HSB, 360, 100, 100); //color mode set to HSB
    //--------
    song1 = new lyrics;//new object song1 declared
}

/**
 * draw : Periodically called automatically
 * calls the display method of the class lyrics and displays verses and images
 */
function draw() {
    background(195, 2, 83); //Light gray background
    song1.display();//display method called for the object song1
}
function keyPressed(){
    if (keyCode === 32) {
        song1.transition();//transition method for song 1 called
    }
}