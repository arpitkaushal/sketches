const color = {
    "bg": "#FCF3E4",
    "iris": "#F4A71A",
    "pupil": "#232534",
    "c1": "#EB392B",
    "c2": "#20509C",
    "c3": "#F4A719",
    "sq1": "#EB392B",
    "sq2": "#20509C"
}
const bnw = {
    "bg": "#b8b2a7ff",
    "iris": "#e6e4deff",
    "pupil": "#232534",
    "c1": "#e1dadaff",
    "c2": "#95979aff",
    "c3": "#c7c6c6ff",
    "sq1": "#e1dadaff",
    "sq2": "#95979aff"
}
colorOptions = [color, bnw]
colorIndex = 0;
let chosenColor;

centerX = 200; centerY = 200;
diameter = 350; radiusf = diameter / 2;
frate = 30;

function setup() {
    createCanvas(400, 400);
    frameRate(frate);
}

function draw(){
    chosenColor = colorOptions[colorIndex];
    background(chosenColor.bg);
    noStroke();
    // grid();
    circles();
    lefthalfsquares();
    // mouseLocation();
    rays();
    eye();
}

function mouseLocation() {
    fill(0)
    text(`${int(mouseX)},${int(mouseY)}`, 20, 20);
}

function circles() {
    fill(chosenColor.c3);
    circle(centerX, centerY, diameter);

    fill(chosenColor.c2);
    circle(centerX, centerY, 250);

    fill(chosenColor.c1);
    circle(centerX, centerY, 125);
}

function lefthalfsquares() {
    fill(chosenColor.bg)
    rect(0, 0, 200, 400);

    fill(chosenColor.sq1);
    rect(25, 25, 175, 175)

    fill(chosenColor.sq2);
    rect(25, 200, 175, 175);
}

function rays() {
    // radiusf = radiusf + 5;
    // New: Use a time-based variable for smooth, continuous animation
    let time = frameCount / frate; // Time increases by 1 every second

    // 1. Calculate the pulsating factor (0 to 1 and back to 0)
    // sin(PI * time) creates a wave from 0 to 1 to 0 over one second.
    // We use the absolute value squared to keep it positive and slightly sharper at the peaks.
    let pulsateFactor = abs(sin(PI * time));
    
    // Optional: Sharpen the effect by squaring the factor (makes it look more like a pulse)
    pulsateFactor = pow(pulsateFactor, 2); 

    // 2. Map the factor to the desired radius range (0 to radiusf)
    radius = radiusf * pulsateFactor;

    // fixed radius
    // radius = radiusf;

    // linearly increasing radius
    // radius = radiusf * (frameCount % frate) / frate;

    startAngle = 0; endAngle = 180;
    numRadii = 9;
    angleMode(DEGREES)
    // angularIncrement = (endAngle - startAngle) / numRadii;
    angularIncrement = 22.5;

    stroke(chosenColor.bg);
    strokeWeight(15);
    strokeCap(SQUARE);
    for (var i = startAngle; i <= endAngle; i += angularIncrement) {
        pointX = centerX - radius * sin(i);
        pointY = centerY + radius * cos(i);
        line(centerX, centerY, pointX, pointY);
    }
    noStroke()

}

function eye() {
    // cornea
    fill(chosenColor.bg);
    ellipse(200, 200, 100, 45);
    // fill(0)
    // arc(220,200,100,45,315,360,CHORD)

    fill(chosenColor.iris);
    circle(centerX, centerY, 40)

    fill(chosenColor.pupil);
    circle(centerX, centerY, 20)
}


function grid() {
    stroke(190); // Set line color to a light gray
    let gridSize = 20; // Define the size of each grid cell
    // Loop to draw vertical lines
    for (let x = 0; x < width; x += gridSize) {
        line(x, 0, x, height);
    }
    // Loop to draw horizontal lines
    for (let y = 0; y < height; y += gridSize) {
        line(0, y, width, y);
    }
    noStroke();
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