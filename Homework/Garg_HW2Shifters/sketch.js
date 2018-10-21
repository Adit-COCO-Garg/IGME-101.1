/**
 * Adit Garg
 * IGME-101: HW2 Shifters, m/d/18
 * Summarization of sketch activity
 */

"use strict"; //catch some common coding errors
//global variables Declared
var phaseBall1, phaseBall2, xPosBall1, xPosBall2, yPosBall1, yPosBall2, xSpeedBall1, xSpeedBall2, ySpeedBall1, ySpeedBall2, diamBall1, diamBall2, ballDist, x2, y2,diam,phase,cordX,cordY,tempCordX,tempCordY;

/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */


function setup() {
	//Canvas setup
	createCanvas(600, 600); //canvas 600x600
	colorMode(HSB, 360, 100, 100); //color mode set to HSB
	//--------

	//Visual Details
	noStroke();
	textAlign(CENTER, CENTER);
	//--------

	//Initializing ball global variables
	diamBall1 = random(50, 100);
	diamBall2 = random(50, 100);

	xPosBall1 = random(0 + diamBall1, 600 - diamBall1);
	xPosBall2 = random(0 + diamBall1, 600 - diamBall1);

	yPosBall1 = random(0 + diamBall2, 600 - diamBall2);
	yPosBall2 = random(0 + diamBall2, 600 - diamBall2);

	xSpeedBall1 = random(0.8, 2.5);
	xSpeedBall2 = random(0.8, 2.5);

	ySpeedBall1 = random(0.8, 2.5);
	ySpeedBall2 = random(0.8, 2.5);
	//--------
}

/**
 * draw : Periodically called automatically
 * Summarize code that you add
 */
function draw() {
	background(195, 2, 83); //Light gray background
	if (phaseBall1 === phaseBall2) {
		confetti();
	}

	drawballs();
	moveballs();
}

//Event Handlers
function mouseClicked() {
	var x = mouseX,
		y = mouseY,
		ballClicked;

	if (mouseWithin(x, y, xPosBall1, yPosBall1, diamBall1)) {
		changePhase(phaseBall1);
		phaseBall1 = phase;
		ballClicked = 1;
	}

	if (mouseWithin(x, y, xPosBall2, yPosBall2, diamBall2)) {
		changePhase(phaseBall2);
		phaseBall2 = phase;
		ballClicked = 2;
	}

}

function mouseWithin(x, y, x2, y2) {
	ballDist = dist(x, y, x2, y2); // distance of pointer from the moon's center
	if (ballDist <= diamBall1) { // checks if the pointer is within the ball.
		return true;
	}
}
//--------

//Custom functions
function changePhase() {
	phase++;
	if ((phaseBall1 > 4) || (phaseBall2 > 4)) {
		phase = 0;
	}
	return phase;
	print("Two " + phase);
}

function drawShape(x, y) {
	if (phase === 0) {
		click1();
	} else if (phase === 1) {
		click2();

	} else if (phase === 2) {
		click3();

	} else if (phase === 3) {
		click4()

	} else if (phase === 4) {
		click5();
	}
}


function click1() {
	fill(random(0, 360));
	while (lineY < 600) {
		if (ballClicked === 1) {
			ellipse(xPosBall1, lineY, 10, 10);
		}
		if (ballClicked === 2) {
			ellipse(xPosBall2, lineY, 10, 10);
		}
	}
	if ((yPosBall1 === 600) || (yPosBall2 = 600)) {
		y = 0; //wrap to top
	}
	y--; // move the ball
}

function click2() {
	fill(random(0, 360));
	if (ballClicked === 1) {
		maxCord = diamBall1 + yPosBall1;
		diam = diamBall1;

		cordX = diamBall1 - xPosBall1;
		speedX = xSpeedBall1;

		cordY = diamBall1 - yPosBall1;
		speedY = ySpeedBall1;

	} else {
		maxCord = diamBall1 + xPosBall1;
		diam = diamBall2

		cordX = diamBall2 - xPosBall2;
		speedX = xSpeedBall2;

		cordY = diamBall2 - yPosBall2;
		speedY = ySpeedBall2;
	}
	//Draws grid
	while (cordX < maxCord) {
		while (cordY < gridlimit) {
			ellipse(cordX, cordY, 10, 10);
			cordY += 10;
		}
		cordX += 10;
	}
}

function click3() {
	fill(random(0, 360));

}

function click4() {

}

function click5() {

}

function confetti() {
	for (let i = 0; i < 100; i++) {
		ellipse(random(3, 597), random(3, 597), 3, 3);
	}
}

function wrap(cordX, cordY, speedX, speedY, maxCord, diam) {
	if (cordX >= (600 + diam / 2)) {
		cordX = -diam / 2;
	}
	if (cordY >= (600 + diam / 2)) {
		cordY = -diam / 2;
	}
	cordX += speedX;
	cordY += speedY;
	return cordX, cordY;
}

function drawballs() {
	fill((diam + (phase * 60)), 100, 100);
	accentPhase(cordX, cordY, phase);
	ellipse(xPosBall1, yPosBall1, diamBall1, diamBall1);
	text("1", xPosBall1, yPosBall1);
	ellipse(xPosBall2, yPosBall2, diamBall2, diamBall2);
	text("2", xPosBall2, yPosBall2);
	fill("black");
}

function moveballs() {
	
}

function wriggle(cordX, cordY, maxCord, diam) {
	tempCordX = cordX + random(-1.5, 1.5);
	if ((tempCordX < (600 - diam)) || (tempCordX > (600 + diam))) {
		cordX = tempCordX;
	}
	tempCordY = cordY + random(-1.5, 1.5);
	if ((tempCordY < (600 - diam)) || (tempCordY > (600 + diam))) {
		cordY = tempCordY;
	}
	return cordX, cordY;
}

function accentPhase(cordX, cordY, phase) {
	if (phase === 1) {
		for (i = 30; i < 130; i += 30) {
			ellipse(cordX, i, 8, 8);
		}

	} else if (phase === 2) {
		for (i = (cordX - 60); i <= 120; i += 20) {
			for (j = (cordY - 60); i <= 120; i += 20) {
				ellipse(i, j, 4, 4);
			}
		}

	} else if (phase === 3) {
		for (i = 0; i <= 600; i += 10) {
			ellipse(i, cordY, 4, 4);
		}

	} else if (phase === 4) {
		//random shit
	}
}


//--------
