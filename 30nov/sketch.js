let cx, cy;
let frozen = false;

function setup() {
	createCanvas(400, 400);
	background(250);
	cx = width / 2;
	cy = height / 2;
}

function draw() {
	// alternate fill color every 5 seconds
	const period = 5000; // milliseconds
	const phase = Math.floor(millis() / period) % 2;
	const colorA = color(125);
	const colorB = color(250);
	if (phase === 0) {
		fill(colorA);
	} else {
		fill(colorB);
	}

	// Freeze the circle's position while the mouse is pressed.
	if (mouseIsPressed) {
		if (!frozen) {
			frozen = true;
			cx = mouseX;
			cy = mouseY;
		}
	} else {
		// when not pressed, follow the mouse
		frozen = false;
		cx = mouseX;
		cy = mouseY;
	}

	circle(cx, cy, 50);
}

