class collector {
    constructor(name) {
        this.name = name;
        this.inventory = "null";
        this.a = random(100, 900);
        this.b = random(100, 900);
        this.phase = "faceL";

    }
    updateState() {
        if (keyIsDown(65)) { //if key is held do the following
            this.phase = "walkL";
            this.a -= 10;
        } else if (this.phase === "walkL") { //else change to just facing a side
            this.phase = "faceL";
        }

        if (keyIsDown(68)) { //if key is held do the following
            this.phase = "walkR";
            this.a += 10;
        } else if (this.phase === "walkR") { //else change to just facing a side
            this.phase = "faceR";
        }

        if (keyIsDown(83)) { //if key is held do the following
            this.phase = "Down";
            this.b += 10;
        } else if (this.phase === "Down") {
            this.phase = "faceDown"; //else change to just facing a side
        }
        if (keyIsDown(87)) { //if key is held do the following
            this.phase = "Up";
            this.b -= 10;
        } else if (this.phase === "Up") { //else change to just facing a side
            this.phase = "faceUp";
        }

    }
    phaseDisplay() { //draws image based on transition's state
        fill("black");
        if (this.phase === "walkL") {
            text("walkL", this.a, this.b+60);
            image(walkL, this.a, this.b, 100, 100);
        } else if (this.phase === "walkR") {
            text("walkR", this.a, this.b+60);
            image(walkR, this.a, this.b, 100, 100);
        } else if (this.phase === "faceL") {
            text("faceL", this.a, this.b+60);
            image(faceL, this.a, this.b, 100, 100);
        } else if (this.phase === "faceR") {
            text("faceR", this.a, this.b+60);
            image(faceR, this.a, this.b, 100, 100);
        } else if (this.phase === "Up") {
            text("Up", this.a, this.b+60);
            image(up, this.a, this.b, 100, 100);
        } else if (this.phase === "Down") {
            text("Down", this.a, this.b+60);
            image(down, this.a, this.b, 100, 100);
        } else if (this.phase === "faceDown") {
            text("faceDown", this.a, this.b+60);
            image(fall, this.a, this.b, 100, 100);
        } else if (this.phase === "faceUp") {
            text("faceUp", this.a, this.b+60);
            image(fall, this.a, this.b, 100, 100);
        }
    }
    pickUp(obj) {
        this.inventory = obj;
        
    }
    drop() {
        this.inventory = "null"
    }
}
