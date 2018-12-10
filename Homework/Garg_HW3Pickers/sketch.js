/**
 * Adit Garg
 * IGME-101: Picker Upper, 20/11/18
 * This assignment allows user(s) to play against each other in a game where 2 mario's try to pick up coins the fastest and drop them in the collector to gain points!
 */

//Global variables defined
var object = [],
    randomFound = false,
    smallest, smallest2,
    name = [],
    picked, runbf4, score1 = 0,
    score2 = 0,
    canvas;

"use strict"; //catch some common coding errors
//MARIO AND COIN SPRITE CREATED BY https://www.deviantart.com/minocvi/art/Mario-Sprite-Sheet-331971671
function preload() { //Images and all relevant assets preloaded
    walkL = loadImage("assets/WalkL.png");
    walkR = loadImage("assets/WalkR.png");
    faceL = loadImage("assets/faceL.png");
    faceR = loadImage("assets/faceR.png");
    fall = loadImage("assets/fall.png");
    up = loadImage("assets/up.png");
    down = loadImage("assets/down.png");
    coin = loadImage("assets/coin.png")
}
/**
 * setup : Initialization runs once; called automatically
 * The following code sets up the objects on the screen, sets default styles, colormodes, creates the canvas, and defines imagemode,colormode, rectmode, and text align
 */

function setup() {
    //Canvas setup
    canvas = createCanvas(1000, 1000); //canvas 1000x1000, defining the canvas as a variable allows for it to be versatile
    canvas.position(0, 0); //due to the variable's versatility the DOM library allows to define position
    canvas.style("z-index", "-1"); //due to the variable's versatility the DOM library allows to define the hirearchy of view/ z index (a css property)
    colorMode(HSB, 360, 100, 100); //color mode set to HSB
    //--------

    noStroke();
    imageMode(CENTER);
    textAlign(CENTER);
    rectMode(CENTER);
    setupObjs(); //this calls and sts objects through out the screens
}

/**
 * draw : Periodically called automatically
 * Summarize code that you add
 */
function draw() {
    background(195, 2, 83); //Light gray background
    textSize(50);
    textStyle(BOLD);
    fill("white");
    text(score1, 100, 80);
    text(score2, 900, 80);
    textSize(12);
    textStyle(NORMAL);
    if ((mario.inventory != "null") && (picked != "null")) { //if collector has an object set object's location to appear to be in possesion of the collector
        object[picked].x = mario.a + 60;
        object[picked].y = mario.b - 30;
        runBf4 = 1;
    } else if ((mario.inventory === "null") && (runbf4 === 1) && (picked != "null")) { //if collector does not have an object set object's location to it's current location (drop it!)
        object[picked].x = object[picked].x;
        object[picked].y = object[picked].y;
        picked = "null";
    }
    for (i = 0; i <= 9; i++) {
        object[i].display();
    }
    mario.updateState();
    mario.phaseDisplay();

    if ((mario2.inventory != "null") && (picked != "null")) { //if collector has an object set object's location to appear to be in possesion of the collector
        object[picked].x = mario2.a + 60;
        object[picked].y = mario2.b - 30;
        runBf4 = 1;
    } else if ((mario2.inventory === "null") && (runbf4 === 1) && (picked != "null")) {
        { //if collector does not have an object set object's location to it's current location (drop it!)
            object[picked].x = object[picked].x;
            object[picked].y = object[picked].y;
            picked = "null";
        }
        for (i = 0; i <= 9; i++) {
            object[i].display();
        }
        mario2.updateState();
        mario2.phaseDisplay();


        fill("green");
        rect(925, 950, 100, 50);
        fill("black");
        text("Coin Collector", 925, 953);
        //    scorer();
    }
}
    //this function is called upon user interaction for drop and pickup and determines when to drop or pickup an object by calling other functions within it
    function keyPressed() {
        if (keyIsDown(32)) { //space
            if (mario.inventory != "null") {
                object[picked].owner = "nothin";
                mario.drop();
                scorer(picked, 1);
                picked = "null";
            } else if (mario.inventory === "null") {
                smallest = 900;
                for (i = 0; i <= 9; i++) {
                    vicinity();
                }
                if (object[picked].owner === "nothin") {
                    mario.pickUp(object[picked]);
                    object[picked].owner = mario;
                }
            }
        }
        if (keyIsDown(16)) { //shift
            if (mario2.inventory != "null") {
                object[picked].owner = "nothin";
                mario2.drop();
                scorer(picked, 2);
                picked = "null";
            } else if (mario2.inventory === "null") {
                smallest2 = 900;
                for (i = 0; i <= 9; i++) {
                    vicinity2();
                }
                if (object[picked].owner === "nothin") {
                    mario2.pickUp(object[picked]);
                    object[picked].owner = "mario2";
                }

            }
        }
    }
    //this function has no parameters but sets up all the objects on the screen
    function setupObjs() {
        mario = new collector("mario", random(100, 900), random(100, 900)); //collector 1
        mario2 = new collector2("mario2", random(100, 900), random(100, 900)); //collector 2
        for (i = 0; i <= 9; i++) { //array of objects (coins) declared with random locations
            if (i === 0) {
                object[i] = new target(random(50, 950), random(50, 950));
            } else if (i >= 1) {
                x = random(50, 950);
                y = random(50, 950);
                object[i] = new target(x, y);
            }
        }
    }
    //this function checks if the collector 1 is close enough to any object for it to be picked up and returns the closest object (if there is a clash the function returns the 1st closest object seen in the order of its location in the array)
    function vicinity() {
        if ((int(dist(mario.a, mario.b, object[i].x, object[i].y))) <= 90) { //this function checks within a distance of 90px
            if (smallest > int(dist(mario.a, mario.b, object[i].x, object[i].y))) { //checks for the nearest object 
                smallest = int(dist(mario.a, mario.b, object[i].x, object[i].y));
                picked = i;
            }
        }
        return picked;
    }
    //this function checks if the collector 2 is close enough to any object for it to be picked up and returns the closest object (if there is a clash the function returns the 1st closest object seen in the order of its location in the array)
    function vicinity2() {
        if ((int(dist(mario2.a, mario2.b, object[i].x, object[i].y))) <= 90) { //this function checks within a distance of 90px
            if (smallest2 > int(dist(mario2.a, mario2.b, object[i].x, object[i].y))) { //checks for the nearest object 
                smallest2 = int(dist(mario2.a, mario2.b, object[i].x, object[i].y));
                picked = i;
            }
        }
        return picked;
    }
    //this function keeps a track of the scores and generates new objects by rewriting over the object that was dropped within the "coin collector"
    function scorer(picked, m) {
        if ((int(dist(object[picked].x, object[picked].y, 840, 900))) <= 100) { //checks if coin was dropped within a proximity of coin collector
            if (m = 1) {
                score1++;
            } else if (m = 2) {
                score2++;
            }
            print("score!!!!!");
            object[picked] = new target(random(50, 950), random(50, 950));
        }
    }
