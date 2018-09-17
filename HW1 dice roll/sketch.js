/**
 * Adit Garg
 * IGME-101: HW1 DiceRolling, 9/14/18
 * Summarization of sketch activity
 */

"use strict"; //catch some common coding errors
var exclMark, diceButton, rollDice, ellipPositionX, rollDiceValue;
/**
 * setup : Initialization runs once; called automatically
 * The objectve of this program is allow the user to "roll a dice" by clicking the green button.
 */
function setup() {
    createCanvas(400, 400);
    colorMode(HSB, 360, 100, 100);
    background(195, 2, 83);
    noStroke();
    exclMark();
}

/**
 * draw : Periodically called automatically
 * Summarize code that you add
 */
function draw() {
    diceButton();
}

function exclMark() {
    textSize(200);
    fill(255);
    text("!", 170, 250);
}

function diceButton() {
    fill(120, 100, 50);
    rect(270, 20, 100, 50);
}

function mousePressed() {
    background(195, 2, 83);
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
            ellipPositionX= ellipPositionX + 60;
        }

    }
