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
		this.control = createSlider(1, 2);
		this.control.style("z-index", "2");
		this.control.size(70);
		this.control.position(this.x + 620, this.y + 120);
		this.filler = hueVal;
		this.a = this.x + random(-10, 10);
		this.b = this.y + random(-10, 10);
		this.aSpeed = this.control.value();
		this.bspeed = this.control.value();
		this.aSign=1;
		this.bSign=1;
		

	}

	/**
	 * display: draw name on canvas at location coords
	 */
	display() {
		//bg of cell
		fill(319.7, 97.4, 89.4); //transparent light red
		rect(this.x, this.y, 90, 90);
		this.aSpeed = this.control.value()*this.aSign;
		this.bSpeed = this.control.value()*this.bSign;
		if ((this.a <= this.x - 50) || (this.a >= this.x + 40)) {
			this.aSign *= -1;
			console.log(this.aSign);
		}
		if ((this.b <= this.y - 50) || (this.b >= this.y + 40)) {
			this.bSign *= -1;
			console.log(this.bSign);
		}
		fill("white");
		this.a += this.aSpeed;
		this.b += this.bSpeed;
		ellipse(this.a, this.b, 10, 10);
		
	}
}
