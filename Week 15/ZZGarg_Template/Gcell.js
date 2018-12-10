/**
 * WM Harris, 12/5/2018
 * GCell : one cell of text *that moves in circle*
 * to display on canvas
 */
class GCell {
    /**
     * constructor: make cell with x-coord & name. Name animates in circle
     * @param x - number, x-coord value
     * @param y - number, y-coord value
     * @param name - string, cell label
     */
    constructor(x, y, name, hueVal) {
        this.x = x;
        this.y = y;
        this.control = createSlider(1, 3, 1);
        this.control.style("z-index", "2");
        this.control.size(70);
        this.control.position(this.x + 620, this.y + 120);
        this.filler = hueVal;
        this.a = this.x + random(-10, 10);
        this.b = this.y + random(-10, 10);;
        this.aSpeed = 1
        this.bspeed = 1
   
    }

    /**
     * display: draw name on canvas at location coords
     */
    display() {
        //bg of cell
        fill(319.7, 97.4, 89.4); //transparent light red
        rectMode(CENTER)
        rect(this.x, this.y, 90, 90);


     print(this.y)
        print(this.b)


        var val = this.control.value()

        if (this.a >= this.x + 50) {
            this.aSpeed = -val
        }
        if (this.a <= this.x - 50) {
            this.aSpeed = val
        }
        if (this.b >= this.y + 50) {
            this.bSpeed = -val
        }
        if (this.by <= this.y - 50) {
            this.bSpeed = val
        }

        fill("white")
        ellipseMode(CENTER)
        ellipse(this.a, this.b, 10, 10);
        this.a += this.aSpeed;
        this.b += this.bSpeed;



    }
}
