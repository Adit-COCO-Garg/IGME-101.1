class lyrics { //class lyrics defined/initialized
    constructor() {
        this.lyric = []; //initializing an array of 4 verses/choruses
        this.lyric.push("The dust and dirt\n" + "Blind us slowly\n" + "But give a hint of a view to make it feel alright\n" + "And though it hurts\n" + "We keep on climbing\n" + "'Cause our addictions take us from inside\n");
        this.lyric.push("A sturdy back\n" + "But brittle bones\n" + "Too weak to show\n");
        this.lyric.push("We would say anything just to hear what we want\n" + "Right or wrong\n" + "Then we lie to be forgiven\n" + "We would sell anything just to buy who we're not\n" + "Any cost\n" + "Oh, we kill our way to heaven\n");
        this.lyric.push("We search alone\n" + "For golden crowns\n" + "'Cause if we find it, we'll have it all to ourselves\n" + "So one by one\n" + "We lay our bricks down\n" + "To pave a road on the shoulders of somebody else\n");
        this.state = 0; //state initialized to 0 i.e the 1st verse
    }

    transition() {
        if (this.state >= 3) {
            this.state = 0; //state reset's to 0 as it goes higher than 3 (4 verses only)
        } else {
            this.state++; //state incremented by 1
        }
    }


    display() {
        textFont(bebas); //Font bebas Neue Regular used
        textSize(30);
        text((this.lyric[this.state]), 200, 200); //displays text from the array this.lyric using index this.state to access it
        switch (this.state) { //switch case determining image to be displayed based on lyrics
            case 0:
                image(climb, 200, 500, 497.6, 200);
                break;
            case 2:
                image(fight, 200, 500, 381.8, 200);
                break;
        }
    }
    preload() {
        bebas = loadFont("assets/BebasNeue-Regular.otf"); //font
        climb = loadImage("assets/climb.png"); //image
        fight = loadImage("assets/fight.jpg");//image
    }
}
