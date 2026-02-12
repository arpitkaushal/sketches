const color = {
    "bg": "#567AB8",
    "circumfrence": "#BDBED0",
    "sand": "#FDD427",
    "treebark": "#71573D",
    "treeleaves": "#9CC756"
}
const bnw = {
    "bg": "#adb3c2",
    "circumfrence": "#e6eaf1",
    "sand": "#FDD427",
    "treebark": "#71573D",
    "treeleaves": "#9CC756"
}

colorOptions = [color, bnw]
colorIndex = 0;
let chosenColor;

function setup() {
    createCanvas(400, 400);
    frameRate(30)
}

let diameter = 50
let cx = 200;
let cy = 200;
function draw() {
    chosenColor = colorOptions[colorIndex];
    background(chosenColor.bg);
    noFill()
    stroke(chosenColor.circumfrence)
    strokeWeight(10)
    if(frameCount%10===0){
        // diameter = (diameter+50)%200
        // if(diameter===0) diameter = 50
        diameter = (diameter+25)
        if(diameter===200) {
            diameter = 50
            cx = cx + getRandomIntInclusive(-100,100)
            cy = cy + getRandomIntInclusive(-100,100)
        }
    }
    circle(cx,cy,diameter)
    mouseLocation();
}

function mouseLocation() {
    fill(0)
    text(`${int(mouseX)},${int(mouseY)}`, 20, 20);
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive
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