class lyrics {
	constructor() {
		this.lyric = [];
		this.lyric.push("The dust and dirt\n" + "Blind us slowly\n" + "But give a hint of a view to make it feel alright\n" + "And though it hurts\n" + "We keep on climbing\n" + "'Cause our addictions take us from inside\n");
		this.lyric.push("A sturdy back\n" + "But brittle bones\n" + "Too weak to show\n");
		this.lyric.push("We would say anything just to hear what we want\n" + "Right or wrong\n" + "Then we lie to be forgiven\n" + "We would sell anything just to buy who we're not\n" + "Any cost\n" + "Oh, we kill our way to heaven\n");
		this.lyric.push("We search alone\n" + "For golden crowns\n" + "'Cause if we find it, we'll have it all to ourselves\n" + "So one by one\n" + "We lay our bricks down\n" + "To pave a road on the shoulders of somebody else\n");
		this.state = 0;
	}

	trainsition() {
		keyIsDown(SPACE_BAR) {
			this.state++;
		}

	}
	display() {
		textFont(myFont);
		text((this.lyric[this.state]), 200, 200);
	}
	preload() {
		walkL = loadImage("assets/walkL.png");
		walkR = loadImage("assets/walkR.png");
		faceL = loadImage("assets/faceL.png");
		faceR = loadImage("assts/faceR.png");
	}
}
