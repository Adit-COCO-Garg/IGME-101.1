/**
 * Adit Garg
 * IGME-101: Thermo, 09/12/18
 * Summarization of sketch activity
 */

"use strict"; //catch some common coding errors

/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */

var tempHeight = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noFill();
    stroke("white");
    strokeWeight(1);
    background(2, 16, 38);
}

/**
 * draw : Periodically called automatically
 * Summarize code that you add
 */
function draw() {
    background(2, 16, 38);
    rect((windowWidth / 2.1), (windowHeight / 5), 100, 500);

    if (tempHeight >= -125) {
        fill("#00FFFF");
    } else if ((tempHeight < -125) && (tempHeight >= -250)) {
        fill("#8A2BE2");
    } else if ((tempHeight < -250) && (tempHeight >= -375)) {
        fill("#FF1493");
    } else if (tempHeight < -375) {
        fill("#DC143C");
    }
    rect((windowWidth / 2.1), (windowHeight / 1.06), 100, tempHeight);
    noFill();
}

function keyPressed() {
    if ((keyCode === UP_ARROW)&&(tempHeight >=-475)) {
        tempHeight = tempHeight -25;

    } else if ((keyCode === DOWN_ARROW)&&(tempHeight <=-25)) {
        tempHeight = tempHeight + 25;
    }


}
