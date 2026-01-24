//allowing the user to play with the placement and height of two arcs to compose an eye shape
//after Metamere's https://openprocessing.org/sketch/2817007/pc/mTI3wzpl

let arcModeIx = 0;

//various props that will be animated
let props;

function setup() {
	createCanvas(800, 600);
	noStroke()

	props = {
		strokeWeight: 0,
		angleFrac: 1,
		pupilOpacity: 0
	};

}

function draw() {
	background(100);
	push()
	translate(width / 2, height / 2);
	const arcHeight = map(mouseY, 0, height, 0, 2 * height, true);
	const arcWidth = 600;
	const arcY = map(mouseX, 0, width, 0, -300, true);
	// const arcY = -arcHeight / 3
	// y = - s/3
	const arcModeInfo = getArcModeInfo(arcModeIx);

	//https://p5js.org/reference/p5/arc/
	const angle = PI / 8.855
	stroke(30)
	fill(255)
	strokeWeight(props.strokeWeight * 4)
	arc(0, arcY, arcWidth, arcHeight, angle * props.angleFrac, PI - angle * props.angleFrac, arcModeInfo.value)
	rotate(PI)
	arc(0, arcY, arcWidth, arcHeight, angle * props.angleFrac, PI - angle * props.angleFrac, arcModeInfo.value)

	//pupil, maybe
	noStroke()
	fill(30, props.pupilOpacity * 255)
	circle(0, 0, height / 3)
	pop()

	drawDebugText({
		arcY,
		arcWidth,
		arcHeight
	});
}

function drawDebugText({
	arcY,
	arcWidth,
	arcHeight
}) {
	const arcModeInfo = getArcModeInfo(arcModeIx);

	const hOverY = arcHeight / arcY
	const yOverH = 1 / hOverY;

	textSize(30)
	textAlign(RIGHT, BOTTOM)
	const lineHeight = 40;
	const linesWithYOffsets = [
		"arc mode: " + arcModeInfo.name,
		"arc height: " + arcHeight.toFixed(0),
		"arc width: " + arcWidth.toFixed(0),
		"height over y-offset: " + hOverY.toFixed(5),
		"y-offset over height: " + yOverH.toFixed(5)
	].reverse().map((msg, ix) => ({
		msg,
		y: ix * lineHeight
	}))
	fill('tomato')
	noStroke()
	linesWithYOffsets.forEach(li => {
		push()
		translate(0, height - li.y)
		text(li.msg, width, 0)
		pop()
	})
}

function animateAngle() {
	gsap.fromTo(props, {
		angleFrac: 0,
		strokeWeight: 1
	}, {
		angleFrac: 1,
		strokeWeight: 0,
		duration: 1.5
	})
}

function togglePupil() {
	if (props.pupilOpacity < 0.1) {
		gsap.to(props, {
			pupilOpacity: 1
		});
	} else {

		gsap.to(props, {
			pupilOpacity: 0
		});
	}
}

function toggleStroke() {
	if (props.strokeWeight < 0.1) {
		gsap.to(props, {
			strokeWeight: 1
		});
	} else {

		gsap.to(props, {
			strokeWeight: 0
		});
	}
}

function getArcModeInfo(ix) {
	const arcModeInfos = [{
		name: "CHORD",
		value: CHORD
	}, {
		name: "PIE",
		value: PIE
	}, {
		name: "OPEN",
		value: OPEN
	}];
	return arcModeInfos[ix % arcModeInfos.length];
}

function cycleArcMode() {
	//getArcModeInfo() will handle wrapping this to array
	arcModeIx++;

}

function mousePressed() {
	cycleArcMode();
}

function keyPressed() {
	if (key === "1") {
		animateAngle();
	}
	if (key === " ") {
		togglePupil();
	}
	if (key === "s") {
		toggleStroke()
	}
}