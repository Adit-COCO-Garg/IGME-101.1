class Stripe {

    constructor() {

        this.x = 0;
        this.width = random(10, 30); //generates a random width between 10 and 30 pixels
        this.xSpeed = random(1.0); //sets a speed for each stripe up to 1 pixel per second
        this.active = false;
    }


    display() {

        //all-white fill, slightly transparent
        noStroke();
        if (this.active === true) {
            fill(255, 255, 255);
        } else {
            fill(255, 255, 255, 100);
        }
        rect(this.x, 0, this.width, 600);


    }


    move() {

        this.x += this.xSpeed; // Change the x position by x speed

        // If the rectangle is out of the border, set it back to the origin
        if (this.x > width + this.width) {
            this.x = (0 - this.width)
        }
    }

    within(x, y) {
        if ((x >= this.x) && (x <= (this.width + this.x))) { //Checks if the point's within the stripe
            this.active = true;
        } else {
            this.active = false;
        }

    }
}
