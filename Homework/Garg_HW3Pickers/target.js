class target {
    constructor(x, y) {
        this.owner = "nothin";
        this.x = random(50, 850);
        this.y = random(50, 850);;
    }
    display() {
        image(coin, this.x, this.y);
    }
}
