const color = {
    "sky": "#FEAA00",
    "sun": "#FF8A02",
    "sunglare": "#FEA202",
    "dune1": "#954B00",
    "dune1Shadow": "#63320C",
    "dune2": "#966401",
    "dune2Shadow": "#785032"
}
const bnw = {
    "sky": "#d5d5d527",
    "sun": "#a9a9a9ff",
    "sunglare": "#b9b9b9ff",
    "dune1": "#848483ff",
    "dune1Shadow": "#6a6a69ff",
    "dune2": "#9c9c9cff",
    "dune2Shadow": "#8e8d8dff"
}
colorOptions = [color, bnw]
colorIndex = 0;
let chosenColor;
let stars = []

function setup() {
    createCanvas(400, 400);
    frameRate(20);
}

let horizon = 600;
let sunHeight = horizon;
let redVal = 0, greenVal = 0, blackVal = 0;

function draw() {
    chosenColor = colorOptions[colorIndex];
    sunHeight = height - (frameCount % horizon);

    if (colorIndex === 0) {
        if (sunHeight < 100) {
            redVal -= 4; greenVal--;
        } else {
            redVal += 4; greenVal++;
        }
        background(redVal, greenVal, 0);
    } else {
        if (sunHeight < 100) {
            blackVal -= 1;
        } else {
            blackVal += 1;
        }
        background(blackVal)
    }


    strokeWeight(10)
    stroke(chosenColor.sunglare)
    fill(chosenColor.sun)
    circle(200, sunHeight, 100);
    strokeWeight(0);

    fill(chosenColor.dune1)
    triangle(130, 200, 0, 400, 400, 400);
    fill(chosenColor.dune1Shadow)
    triangle(130, 200, 0, 300, 0, 400);

    fill(chosenColor.dune2)
    triangle(300, 220, 100, 400, 700, 400);
    fill(chosenColor.dune2Shadow)
    triangle(300, 220, 100, 400, 180, 400);


    // fill(0)
    // text(`${int(mouseX)},${int(mouseY)}`, 20, 320);
    // text(`${sunHeight}`, 20, 340);
    // text(`${blackVal}`, 20, 360);


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