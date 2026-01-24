const color = {
    "sky": "#435ea9ff",
    "moon": "#b0d4e9ff",
    "ground": "#023e6eff",
    "mountain": "#7a4cd0ff",
    "cloud": "#c3cafbff",
    "shootingStars": "#d4bff8ff"
}
const bnw = {
    "sky": "#c0c0c0ff",
    "moon": "255",
    "ground": "#9b9b9bff",
    "mountain": "#585858ff",
    "cloud": "#d0d1d3ff",
    "shootingStars": "#e7e9f9ff"
}
colorOptions = [color, bnw]
colorIndex = 0;
let chosenColor;
let stars = []

function setup() {
    createCanvas(400, 400);
    frameRate(60)
    for (var i = 0; i < 500; i++) {
		stars[i] = new Star();
	}
}

function draw() {
    chosenColor = colorOptions[colorIndex];

    background(chosenColor.sky);

    drawstars();

    strokeWeight(0)
    fill(chosenColor.moon)
    circle(350, 50, 50);
    fill(chosenColor.sky)
    circle(335, 50, 50);
    

    strokeWeight(0);
    fill(chosenColor.ground)
    // first two args set location of upper left corner of the rectange
    rect(0, 300, 400, 200)

    fill(chosenColor.mountain)
    triangle(60, 90, 220, 490, -70, 370);
    triangle(190, 200, 270, 450, 100, 450);

    // fill(250)
    // text(`${int(mouseX)},${int(mouseY)}`, 20, 20);

    fill(chosenColor.cloud)

    cloudX = frameCount % (2*width);
    ellipse(cloudX + 20, 50, 20, 10)
    ellipse(cloudX - 40, 150, 50, 15)
    ellipse(cloudX + 120, 20, 100, 10)

    shootX = random(0, width);
    shootY = random(0, height / 2);
    stroke(chosenColor.shootingStars);
    strokeWeight(1)
    line(shootX, shootY, shootX + 30, shootY - 30);

}

function drawstars(){
    for (var i = 0; i < stars.length; i++) {
		stars[i].draw();
	}
}


// star class //
class Star {
	constructor() {
		this.x = random(width);
		this.y = random(height);
		this.size = random(0.25, 3);
		this.t = random(TAU);
	}
	
	draw() {
		this.t += 0.1;
		var scale = this.size + sin(this.t) * 2;
		noStroke();
		ellipse(this.x, this.y, scale, scale);
	}
}

/**
 * P5.js built-in function called when any key is pressed.
 * key: the character of the key pressed.
 * keyCode: the numerical value of the key pressed.
 */
function keyPressed() {
    // Check if the pressed key is 't' (case-insensitive)
    if (key === 't' || key === 'T') {
        toggleColors();
    }
    // Note: Do not forget to return false if you want to prevent the default 
    // browser behavior (e.g., scrolling with arrow keys).
}

// --- Button Handler Function ---

/**
 * This function is called by the HTML button (onclick="toggleColors()") 
 * AND the keyPressed() function.
 */
function toggleColors() {
    // Increment the index and use the modulo (%) operator to wrap around
    // 0 -> 1 -> 0 -> 1 ... 
    colorIndex = (colorIndex + 1) % colorOptions.length;

    // Because frameRate is slow (2 FPS), we force a redraw immediately 
    // to see the change without waiting for the next frame.
    redraw();

    // Update the checkbox UI to match the new color index (checked for index 1)
    const cb = document.getElementById('colorToggle');
    if (cb) {
        cb.checked = (colorIndex === 1);
    }
}

// Attach the checkbox switch to the toggleColors function when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const cb = document.getElementById('colorToggle');
    if (cb) {
        // Set initial checked state to reflect `colorIndex` and wire change handler
        cb.checked = (colorIndex === 1);
        cb.addEventListener('change', () => {
            toggleColors();
        });
    }
});