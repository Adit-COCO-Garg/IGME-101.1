/**
 * Adit Garg
 * IGME-101: HW2 Shifters, 10/20/18
 * In this activity using phase shifters we create different varried motions for each object within the scene with it's own accent, and upon mouseclick within an object change it's phase.
 */

/*
CODE FOR BROWNINAN MOTION TAKEN FROM 
https://p5js.org/examples/simulate-brownian-motion.html
*/

"use strict"; //catch some common coding errors
//global variables Declared
var phaseBall1, phaseBall2, xPosBall1, xPosBall2, yPosBall1, yPosBall2, xSpeedBall1, xSpeedBall2, ySpeedBall1, ySpeedBall2, diamBall1, diamBall2, ballDist, phase, changeCord, tempCord, init1,init2, num = 200,
	val, range = 6,ax1=[],ay1=[],ax2=[],ay2=[],shifter;



//Custom functions

function confetti() {
	for (let i = 0; i < 100; i++) {
		fill(random(0, 360), 100, 100); // random hue between 0 and 360
		ellipse(random(3, 597), random(3, 597), 3, 3); // 100 3px circles at random x,y location
	}
}

function mouseWithin(x2, y2, diam) {
	//x2 y2 ball x and ball y
	ballDist = dist(mouseX, mouseY, x2, y2); // distance of pointer from the ball's center
	if (ballDist <= (diam / 2)) { // checks if the pointer is within the ball.
		return true;
	} else {
		return false;
	}
}

function changePhase(phase) {
	phase++; //increases phase to next phase
	if (phase > 4) {
		phase = 0; //if current phase is 4 and changephase is called set phase to 0
	}
	return phase;
}

function wrap(changeCord, changeSpeed, maxCord, diam) {
	if (changeCord >= (maxCord + (diam / 2))) { // if the cordinate being changed is out of bounds
		changeCord = (-diam / 2); // Then wrap changeCord back to the top accounting for radius
	}
	changeCord = changeCord + changeSpeed; //increase the cordinate value by change speed
	return changeCord;
}

function wriggle(changeCord, maxCord, diam) {
	tempCord = changeCord + random(-1.5, 1.5); // sets a temporary cordinate variable
	if ((tempCord < (maxCord - diam)) || (tempCord > (maxCord + diam))) { //tests if the temp coordinate variable will be within bounds
		changeCord = tempCord; // if temoorary coordinate is within bounds then  apply it to change cord 
	}

	return changeCord;
}



function accentPhase(cordX, cordY, phase) { //based on the parameters given call the following accents for each parameter
	if (phase === 1) {
		for (let i = 8; i < 592; i += 30) {
			ellipse(cordX, i, 4, 8); //draw ellipses at the x cordinate of the ball from top to bottom of the canvas
		}

	} else if (phase === 2) {
		let posX = cordX - 60;
		for (let i = 0; i <= 6; i++) {
			let posY = cordY - 60;
			for (let j = 0; j <= 6; j++) {
				ellipse(posX, posY, 4, 4); //draw a grid of ellipses with circle's center being the grid's center
				posY = posY + 20;
			}
			posX = posX + 20;
		}

	} else if (phase === 3) {
		for (let i = 0; i <= 600; i += 10) {
			ellipse(i, cordY, 4, 4); // draw a horizontal line of ellipses acroos the canvas where y cordinate is dependant on the ball's y cordinate
		}

	} else if (phase === 4) {
		/*
		CODE FOR BROWNINAN MOTION TAKEN/ ADAPTED FROM 
		https://p5js.org/examples/simulate-brownian-motion.html
		*/
		print("BROWNIAN MOTION!! YAY! Warning: Epilepsy (MIGHT CAUSE EPILEPSY!)"); //draw text at mouse loaction and if phases are same EXTRA SHIBE POWER! (following code is mine)
		for (let i = 0; i < 3; i++) {
			let g = mouseX;
			let h = mouseY;
			fill(random(0, 360), 100, 100);
			text("SUCH BROWNIAN MOTION", g, h);
			fill(random(0, 360), 100, 100);
			text("MUCH PHYSICS", g, h + 20);
			fill(random(0, 360), 100, 100);
			text("VERY WOW", g, h + 40);
			if (phaseBall1 === phaseBall2) {
				textStyle(BOLD);
				text("EXTRA SHIBE POWER!!", 300, 300);
				textStyle(NORMAL);
			}
		}
	}
}

function drawballs() {
	fill((diamBall1 + (phaseBall1 * 60)), 100, 100); //random hue for ball1
	accentPhase(xPosBall1, yPosBall1, phaseBall1);
	ellipse(xPosBall1, yPosBall1, diamBall1, diamBall1);
	fill("black");
	text("1", xPosBall1, yPosBall1);

	fill((diamBall2 + (phaseBall2 * 60)), 100, 100); //random hue for ball2
	accentPhase(xPosBall2, yPosBall2, phaseBall2);
	ellipse(xPosBall2, yPosBall2, diamBall2, diamBall2);
	fill("black");
	text("2", xPosBall2, yPosBall2);

}

function moveballs() {
	if (phaseBall1 === 1) {
		yPosBall1 = wrap(yPosBall1, (abs(xSpeedBall1)), height, diamBall1); //make ball 1 fall and wrap
	}
	if (phaseBall1 === 2) {
		xPosBall1 = wriggle(xPosBall1, width, diamBall1); //make the grid and ball1 wriggle
		yPosBall1 = wriggle(yPosBall1, height, diamBall1); //make the grid and ball1 wriggle
	}
	if (phaseBall1 === 3) { // make the ball bounce by changing direction whenever ball 1 touches the border
		xPosBall1 = xPosBall1 + xSpeedBall1;
		if ((xPosBall1 <= (diamBall1 / 2)) || (xPosBall1 >= (600 - (diamBall1 / 2)))) {
			xSpeedBall1 = -xSpeedBall1;
		}
		yPosBall1 = yPosBall1 + ySpeedBall1;
		if ((yPosBall1 <= (diamBall1 / 2)) || (yPosBall1 >= (600 - (diamBall1 / 2)))) {
			ySpeedBall1 = -ySpeedBall1;
		}
	}
	/*
	CODE FOR BROWNINAN MOTION TAKEN/ ADAPTED FROM 
	https://p5js.org/examples/simulate-brownian-motion.html
	*/
	if (phaseBall1 === 4) { //brownian motion
		if (init1 != 1) { // this if condition acts as a setup function as it only gets called once! I made this!
			for (let i = 0; i < num; i++) { //initializes array variables. Taken from the example
				ax1[i] = xPosBall1;//This is mine
				ay1[i] = yPosBall1;//This is mine
				print("this set1 runs");
				init1 = 1;
			}
			frameRate(60); //framerate locked to 30. This is mine
		}
		// Shift all elements 1 place to the left
		for (let i = 1; i < num; i++) {//Taken from the example
			ax1[i - 1] = ax1[i];//This is mine
			ay1[i - 1] = ay1[i];//This is mine
		}

		// Put a new value at the end of the array
		ax1[num - 1] += random(-range, range);//This is mine
		ay1[num - 1] += random(-range, range);//This is mine

		// Constrain all points to the screen
		ax1[num - 1] = constrain(ax1[num - 1], diamBall1, width-diamBall1);//This is mine
		ay1[num - 1] = constrain(ay1[num - 1], diamBall2, height-diamBall1);//This is mine

		// Draw a line connecting the points
		for (let j = 1; j < num; j++) {//Taken from the example
			xPosBall1 = ax1[j];//This is mine
			yPosBall1 = ay1[j];//This is mine
			val = j / num * 204.0 + 51; //make the tail of the motion fade out 
			stroke(val);//Taken from the example
			line(ax1[j - 1], ay1[j - 1], ax1[j], ay1[j]);//This is mine
			noStroke();//This is mine
		}
	}



	if (phaseBall2 === 1) {
		yPosBall2 = wrap(yPosBall2, (abs(xSpeedBall2)), height, diamBall2); //make ball 2 fall and wrap
	}

	if (phaseBall2 === 2) {
		xPosBall2 = wriggle(xPosBall2, width, diamBall2); //make the grid and ball1 wriggle
		yPosBall2 = wriggle(yPosBall2, height, diamBall2); //make the grid and ball1 wriggle
	}
	if (phaseBall2 === 3) { // make the ball bounce by changing direction whenever ball 2 touches the border
		xPosBall2 = xPosBall2 + xSpeedBall2;
		if ((xPosBall2 <= (diamBall2 / 2)) || (xPosBall2 >= (600 - (diamBall2 / 2)))) {
			xSpeedBall2 = -xSpeedBall2;
		}
		yPosBall2 = yPosBall2 + ySpeedBall2;
		if ((yPosBall2 <= (diamBall2 / 2)) || (yPosBall2 >= (600 - (diamBall2 / 2)))) {
			ySpeedBall2 = -ySpeedBall2;
		}
	}
	/*
	CODE FOR BROWNINAN MOTION TAKEN/ ADAPTED FROM 
	https://p5js.org/examples/simulate-brownian-motion.html
	*/
	if (phaseBall2 === 4) { //brownian motion
		if (init2 != 1) { // this if condition acts as a setup function as it only gets called once!
			for (let i = 0; i < num; i++) { //initializing array viarbles This is mine
				ax2[i] = xPosBall2;//This is mine
				ay2[i] = yPosBall2;//This is mine
				init2 = 1;//This is mine
			}
			frameRate(60);//This is mine
		}
		// Shift all elements 1 place to the left
		for (let i = 1; i < num; i++) {//Taken from the example
			ax2[i - 1] = ax2[i];//This is mine
			ay2[i - 1] = ay2[i];//This is mine
		}

		// Put a new value at the end of the array
		ax2[num - 1] += random(-range, range);//This is mine
		ay2[num - 1] += random(-range, range);//This is mine

		// Constrain all points to the screen
		ax2[num - 1] = constrain(ax2[num - 1], diamBall2, width-diamBall2);//This is mine
		ay2[num - 1] = constrain(ay2[num - 1], diamBall2, height-diamBall2);//This is mine

		// Draw a line connecting the points
		// Draw a line connecting the points
//		if (phaseBall1 === 4) {//This is mine
//			shifter = diamBall1; // if both phases are in phase 4 space out both the circles to prevent overlapping. This is mine
//		} else {
//			shifter = 0;//This is mine
//		}
		for (let j = 1; j < num; j++) {
			xPosBall2 = ax2[j];//This is mine
			yPosBall2 = ay2[j];//This is mine
			val = j / num * 204.0 + 51; //make the tail of the motion fade out
			stroke(val);//Taken from the example
			line(ax2[j - 1], ay2[j - 1], ax2[j], ay2[j]);//This is mine
			noStroke();//This is mine
		}



	}
}
/**
 * setup : Initialization runs once; called automatically
 * The setup funcction initializes canvas, colormode, no stroke, and text align values along with each ball's position, speed, diameter, and phase value.
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

	phaseBall1 = 0;
	phaseBall2 = 0;
	//--------
}

/**
 * draw : Periodically called automatically
 * Here the draw function calls background- which clears the previous frame. Further, confetti is called along with drawballs and moveballs functions are called.
 */
function draw() {
	background(195, 2, 83); //Light gray background
	if (phaseBall1 === phaseBall2) {
		confetti(); //draws confetti when phases are equal
	}
	drawballs();
	moveballs();
}

//Event Handlers
function mouseClicked() {

	if (mouseWithin(xPosBall1, yPosBall1, diamBall1)) { //if mouse click is within ball 1 do the following
		phaseBall1 = changePhase(phaseBall1); // change phase based on previous phase of ball 1
		print("One " + phaseBall1);
	}

	if (mouseWithin(xPosBall2, yPosBall2, diamBall2)) { // if mouse click is within ball 2 do the follwoing
		phaseBall2 = changePhase(phaseBall2); // change phase based on previous phase of ball 2
		print("Two " + phaseBall2);

	}

}
//--------


//Rough Code
//function drawShape(x, y) {
//	if (phase === 0) {
//		click1();
//	} else if (phase === 1) {
//		click2();
//
//	} else if (phase === 2) {
//		click3();
//
//	} else if (phase === 3) {
//		click4()
//
//	} else if (phase === 4) {
//		click5();
//	}
//}

//function grav(){
//			// Make balls fall with gravity
//		//mousex x displacement
//		//y grav displacement
//		counter=0, 
//		while (kill!=true)
//		displacementball=switcherGrav((counter^2)*2.5); //1/2 at^2 (ut =0)
//		if (xPosBall1===diamBall1/2){
//			switcherGrav=-1;
//		} else{
//			switcherGrav=1;
//		}
//		
//		counter=counter+.25;
//		
//}


//--------
//function click1() {
//	fill(random(0, 360));
//	while (lineY < 600) {
//		if (ballClicked === 1) {
//			ellipse(xPosBall1, lineY, 10, 10);
//		}
//		if (ballClicked === 2) {
//			ellipse(xPosBall2, lineY, 10, 10);
//		}
//	}
//	if ((yPosBall1 === 600) || (yPosBall2 = 600)) {
//		y = 0; //wrap to top
//	}
//	y--; // move the ball
//}
//
//function click2() {
//	fill(random(0, 360));
//	if (ballClicked === 1) {
//		maxCord = diamBall1 + yPosBall1;
//		diam = diamBall1;
//
//		cordX = diamBall1 - xPosBall1;
//		speedX = xSpeedBall1;
//
//		cordY = diamBall1 - yPosBall1;
//		speedY = ySpeedBall1;
//
//	} else {
//		maxCord = diamBall1 + xPosBall1;
//		diam = diamBall2
//
//		cordX = diamBall2 - xPosBall2;
//		speedX = xSpeedBall2;
//
//		cordY = diamBall2 - yPosBall2;
//		speedY = ySpeedBall2;
//	}
//	//Draws grid
//	while (cordX < maxCord) {
//		while (cordY < gridlimit) {
//			ellipse(cordX, cordY, 10, 10);
//			cordY += 10;
//		}
//		cordX += 10;
//	}
//}
//
//function click3() {
//	fill(random(0, 360));
//
//}
//
//function click4() {
//
//}
//
//function click5() {
//
//}
