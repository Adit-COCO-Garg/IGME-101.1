class Story1 {
    constructor(cColor, x, y) {

        this.color = cColor;
        this.x = x; 
        this.y = y;
    }

    display() { // method!
        fill(this.color);
        rect(this.x, this.y, 20, 10);
    }

    move() { // method!
        this.x += this.speed;
        // Wrap x around boundaries
        if (this.x < -20) {
            this.x = width;
        } else if (this.x > width) {
            this.x = -20;
        }
    }

}