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
	constructor(x, y, name) {
		this.x = x;
		this.y = y;
		this.control = createSlider(1, 3,int(random(1,3.4)));
		this.control.style("z-index", "2");
		this.control.size(70);
		this.control.position(this.x + 620, this.y + 120);
		this.control2 = createSlider(0, 100,int(random(1,99)));
		this.control2.style("z-index", "2");
		this.control2.size(70);
		this.control2.position(this.x + 620, this.y + 140);
		this.a = this.x + random(-10, 10);
		this.b = this.y + random(-10, 10);
		this.aSpeed = this.control.value();
		this.bSpeed = this.control.value();
		this.aSign=1;
		this.bSign=1;
		

	}

	/**
	 * display: draw name on canvas at location coords
	 */
	display() {
		//bg of cell
		let brit =100-this.control2.value();
		fill(319.7, brit, 89.4); //transparent light red
		rect(this.x, this.y, 90, 90);
		this.aSpeed = this.control.value();
		this.bSpeed = this.control.value();
		if ((this.a <= this.x - 40) || (this.a >= this.x + 40)) {
			this.aSign *= -1;
			
		}
		if ((this.b <= this.y - 40) || (this.b >= this.y + 40)) {
			this.bSign *= -1;
			
		}
		let hueVal=3.6*this.control2.value();
		fill(hueVal,100,100);
		this.a += this.aSpeed*this.aSign;
		this.b += this.bSpeed*this.bSign;
		ellipse(this.a, this.b, 10, 10);
		
	}
}
