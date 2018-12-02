/**
 * Adit Garg
 * IGME-101: Assignment Name, m/d/18
 * Summarization of sketch activity
 */
var object = [],
    randomFound = false,
    smallest, smallest2,
    name = [],
    picked, runbf4, score1 = 0,score2 = 0;

"use strict"; //catch some common coding errors
//MARIO AND COIN SPRITE CREATED BY https://www.deviantart.com/minocvi/art/Mario-Sprite-Sheet-331971671
function preload() {
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
 * Summarize code that you add
 */
var canvas;

function setup() {
    //Canvas setup

    canvas = createCanvas(1000, 1000); //canvas 600x600
    canvas.position(0, 0);
    canvas.style("z-index", "-1");
    colorMode(HSB, 360, 100, 100); //color mode set to HSB
    noStroke();
    //--------
    imageMode(CENTER);
    textAlign(CENTER);
    rectMode(CENTER);
    setupObjs();
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
    text(score1,100,80);
    text(score2,900,80);
    textSize(12);
    textStyle(NORMAL);
    if ((mario.inventory != "null") && (picked != "null")) {
        object[picked].x = mario.a + 60;
        object[picked].y = mario.b - 30;
        runBf4 = 1;
    } else if ((mario.inventory === "null") && (runbf4 === 1) && (picked != "null")) {
        object[picked].x = object[picked].x;
        object[picked].y = object[picked].y;
        picked = "null";
    }
    for (i = 0; i <= 9; i++) {
        object[i].display();
    }
    mario.updateState();
    mario.phaseDisplay();

    if ((mario2.inventory != "null") && (picked != "null")) {
        object[picked].x = mario2.a + 60;
        object[picked].y = mario2.b - 30;
        runBf4 = 1;
    } else if ((mario2.inventory === "null") && (runbf4 === 1) && (picked != "null")) {
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

function keyPressed() {
    if (keyIsDown(32)) {
        if (mario.inventory != "null") {
            object[picked].owner = "nothin";
            mario.drop();
            scorer(picked,1);
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
            scorer(picked,2);
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

function setupObjs() {
    mario = new collector("mario", random(100, 900), random(100, 900));
    mario2 = new collector2("mario2", random(100, 900), random(100, 900));
    for (i = 0; i <= 9; i++) {
        if (i === 0) {
            object[i] = new target(random(50, 950), random(50, 950));
        } else if (i >= 1) {
            x = random(50, 950);
            y = random(50, 950);
            object[i] = new target(x, y);
        }
    }
}

function vicinity() {
    if ((int(dist(mario.a, mario.b, object[i].x, object[i].y))) <= 90) {
        if (smallest > int(dist(mario.a, mario.b, object[i].x, object[i].y))) {
            smallest = int(dist(mario.a, mario.b, object[i].x, object[i].y));
            picked = i;
        }
    }
    return picked;
}

function vicinity2() {
    if ((int(dist(mario2.a, mario2.b, object[i].x, object[i].y))) <= 90) {
        if (smallest2 > int(dist(mario2.a, mario2.b, object[i].x, object[i].y))) {
            smallest2 = int(dist(mario2.a, mario2.b, object[i].x, object[i].y));
            picked = i;
        }
    }
    return picked;
}

function scorer(picked,m) {
    if ((int(dist(object[picked].x, object[picked].y, 840, 900))) <= 100) {
        if (m=1){
            score1++;
        }else if(m=2){
            score2++;
        }
        print("score!!!!!");
        object[picked] = new target(random(50, 950), random(50, 950));
    }
}
