/**
 * Adit Garg
 * IGME-101: Assignment Name, m/d/18
 * Summarization of sketch activity
 */

"use strict"; //catch some common coding errors
var counter, sum;
/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */
function setup() {
    background(2, 16, 38);
    stroke("white");
    strokeWeight(1);
    createCanvas(windowWidth, windowHeight);
    counter = 1;
    oneThirtyOne()
    counter = 515;
    pointFive();
    counter = 0;
    sum = 0;
    evenSum();
}

function draw() {
    fill(100, 50)
    randomSquares();
}
/**
 * draw : Periodically called automatically
 * Summarize code that you add
 */
function oneThirtyOne() {
    while (counter <= 31) {
        print(counter);
        counter = counter + 2;
    }
}

function pointFive() {
    while (counter >= 500) {
        print(counter);
        counter = counter - .5;
    }
}

function evenSum() {
    while (counter <= 100) {
        if ((counter % 2) === 0) {
            sum = counter + sum;
        }
        counter++;
    }
    print("Sum = " + sum);
}

function randomSquares() {
    while (random(400) < 200) {
        rect(random(width), mouseY, 20, 20)
    }
}
