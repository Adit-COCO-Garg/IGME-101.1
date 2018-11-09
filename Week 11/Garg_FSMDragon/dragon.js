class dragon {
	constructor() {
		this.state = "faceL";
	}

trainsition(){
	if (keyIsDown(LEFT_ARROW)) {
		this.state = "WalkL"
	} else if (keyIsDown(RIGHT_ARROW)) {
		this.state = "WalkR"
	} else if (this.state === "walkL") {
		this.state = "faceL";
	} else if (this.state === "walkR") {
		this.state = "faceR";
	}

}
display(){
	image("assets/" + this.state, width / 2, height / 2);
}
	preload(){
	walkL = loadImage("assets/walkL.png");
	walkR = loadImage("assets/walkR.png");
	faceL = loadImage("assets/faceL.png");
	faceR = loadImage("assts/faceR.png");
	}
}
