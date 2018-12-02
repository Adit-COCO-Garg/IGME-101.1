class dragon {
    constructor() {
        this.state = "faceL";//initialized state to faceL
    }

    transition() {
        if (keyIsDown(LEFT_ARROW)) {//if key is held do the following
            this.state = "walkL";
        } else if (this.state === "walkL") {//else change to just facing a side
            this.state = "faceL";
        }
        if (keyIsDown(RIGHT_ARROW)) {//if key is held do the following
            this.state = "walkR";
        } else if (this.state === "walkR") {//else change to just facing a side
            this.state = "faceR";
        }
    }
    
    display() {//draws image based on transition's state
        if (this.state === "walkL") {
            image(walkL, 360, 360);
        } else if (this.state === "walkR") {
            image(walkR, 360, 360);
        } else if (this.state === "faceL") {
            image(faceL, 360, 360);
        } else if (this.state === "faceR") {
            image(faceR, 360, 360);
        }
    }

}
