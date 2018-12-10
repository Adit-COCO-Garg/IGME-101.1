/**
 * Adit Garg
 * IGME-101: Assignment Name, m/d/18
 * Summarization of sketch activity
 */

"use strict"; //catch some common coding errors

/* Global variables */
let slider1; //slider
let slider2; //slider
let gcells = [];
let aS = 1,
    bS = 1; //array of GCell objects


/**
 * setup : Create 2D arrays, print small arrays
 * show a grid of strings from a 2D array
 */
function setup() {
    canvasCreator();
    noStroke();
    objectMaker();
}

/**
 * draw : Draw grid of items in gcells
 * by calling their .display() methods
 */
function draw() {
    background(195, 2, 83); //Light gray background
    objectDisplay();
}

function canvasCreator() {
    //Canvas setup
    canvas = createCanvas(600, 400); //canvas 620x620, defining the canvas as a variable allows for it to be versatile
    canvas.position("relative"); //due to the variable's versatility the DOM library allows to define position
    canvas.style("z-index", "-1"); //due to the variable's versatility the DOM library allows to define the hirearchy of view/ z index (a css property)
    canvas.style("margin", "20px");
    colorMode(HSB, 360, 100, 100); //color mode set to HSB
    rectMode(CENTER)
    //--------
}

function objectMaker() {
    //Fill 2D array of GCell objects
    for (let r = 0; r < 4; r++) {
        // local variable for inner array
        let innerA = [];
        for (let c = 0; c < 6; c++) {
            let x = 57 + c * 97;
            let y = 56 + r * 95;
            innerA.push(new GCell(x, y, "NAME", random(0, 360)));
        }
        //force line break between rows of controls
        createElement("br"); //line break tag
        //add finished inner array to gcells
        gcells.push(innerA);
    }
    objectDisplay()
}

function objectDisplay() {
    //Access each row in gcells
    for (let row of gcells) {
        //Display each GCell in this row
        for (let cell of row) {
            cell.display();
        }
    }
}
