/**
 * WM Harris
 * IGME-101: Demo p5.DOM form elements, 11/28/18
 * Create and add interactivity to HTML form
 * elements using p5.dom.js.
 */
"use strict"; //catch some common coding errors

//Global variables for p5.DOM objects
let slider1;
let button1;
let checkbox1;
let radio1;
let select1;

function setup() {
    createCanvas(200, 200);
    colorMode(HSB);
    noStroke();
    background("yellow");

    //createSlider(min,max,[value],[step])
    slider1 = createSlider(0, 360, 60);

    //createButton(label,[value])
    button1 = createButton("Click me");
    //set callback function
    button1.mouseClicked(button1Clicked);

    //createCheckbox([label],[checked])
    checkbox1 = createCheckbox("Join newsletter?", false);

    //Create radio group and its options
    radio1 = createRadio();
    //.option([contentValue],[value])
    //If 1 param, it's both content AND
    //value. Values treated as strings.
    radio1.option("cranberries", 1);
    radio1.option("almonds", 2);
    radio1.option("gouda", 3);

    radio1.value("1"); //set init value

    //Create select drop-down menu with options
    select1 = createSelect();
    //.option([contentValue],[value])
    //If 1 param, it's both content AND
    //value. Values treated as strings.
    select1.option("Sans-serif");
    select1.option("Serif");
    select1.option("Fantasy");
    //If changed, call select1Changed 
    select1.changed(select1Changed);

}

/**
 * draw : Periodically called automatically
 * Summarize code that you add
 */
function draw() {
    //Set canvas bg color based on slider1
    let ahue = slider1.value(); // get a value
    background(ahue, 30, 100);

    //position white rect depending on radio setting
    switch (radio1.value()) {
        //radio value is always a string
        case "1":
            rect(0, 0, width, 50);
            break;
        case "2":
            rect(0, 70, width, 50);
            break;
        case "3":
            rect(0, 140, width, 50);
            break;
    }

    //If mouse in corner, turn on checkbox1
    if ((mouseX < width / 3) &&
        (mouseY < height / 3)) {
        checkbox1.checked(true);
    }
    //Is checkbox1 checked? Say so.
    if (checkbox1.checked()) {
        text("CHECKED", 20, 40);
    }
}

/**
 * keyTyped : Reset slider1 to 180 when keyTyped
 */
function keyTyped() {
    slider1.value(180); // set slider value
}

/*
 * buttonClicked : button1's callback function
 * for the mouseClicked event. Moves slider1 to 0.
 */
function button1Clicked() {
    slider1.value(0);
}

/*
 * select1Changed : select1's callback function
 * for the changed event. Sets current font to select
 * value.
 */
function select1Changed() {
	switch(select1.value()) {
		case "Sans-serif":
			textFont("sans-serif");
			break;
		case "Serif":
			textFont("serif");
			break;
		case "Fantasy":
			textFont("fantasy");
			break;
	}
}