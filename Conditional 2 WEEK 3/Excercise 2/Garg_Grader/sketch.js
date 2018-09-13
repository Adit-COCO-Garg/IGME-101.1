/**
 * Yourfirstand Lastname
 * IGME-101: conditionals 2, 9/12/18
 * random grade genereator
 */

"use strict"; //catch some common coding errors
/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(2, 16, 38);
    gradeFF();
}
/**
 * draw : Periodically called automatically
 * Assign's grades based on score
 */

function gradeFF() {
    let grade = random(0,100);

    if (grade < 60) {
        print("Assign F");
    } else if (grade < 70 && grade >= 60) {
        print("Assign D");
    } else if (grade < 80 && grade >= 70) {
        print("Assign C");
    } else if (grade < 90 && grade >= 80) {
        print("Assign B");
    } else if (grade < 100 && grade >= 90) {
        print("Assign A");
    }
}
