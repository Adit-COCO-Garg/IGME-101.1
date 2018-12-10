class target {
    constructor(x, y) {//x,y called as parameters
        this.owner = "nothin";//owner by default is set to nothin
        this.x = random(50, 850);//defines a random location on the canvas
        this.y = random(50, 850);//defines a random location on the canvas
    }
    display() {
        image(coin, this.x, this.y);//draws an image of the coin
    }
}
