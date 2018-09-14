/**
 * Adit Garg
 * IGME-101: HW1 DiceRolling, 9/14/18
 * Summarization of sketch activity
 */

"use strict"; //catch some common coding errors
var exclMark, diceButton, rollDice, ellipPositionX, rollDiceValue;
/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */
function setup() {
    createCanvas(400, 400);
    background(208, 211, 212);
    colorMode(HSB, 255);
    noStroke();
}

/**
 * draw : Periodically called automatically
 * Summarize code that you add
 */
function draw() {
    exclMark();
    diceButton();

}

function exclMark() {
    textSize(200);
    fill(255);
    text("!", 170, 250);
}

function diceButton() {
    fill(40, 180, 99);
    rect(270, 20, 100, 50);
}

function mousePressed() {
    background(208, 211, 212);
    if ((mouseX >= 270) && (mouseY >= 20)) {
        rollDice();
    }
}

function rollDice() {
    rollDiceValue = random(1, 6);
    fill((random(0, 255)), 100, 100);
        let ellipPositionX=33;
        for (var i = 1; i < rollDiceValue; i++) {
            ellipse(ellipPositionX, 250, 40, 40);
            ellipPositionX= ellipPositionX + 33;
        }

    }
