const color = {
    "sky": "#AEB5C7",
    "ocean": "#6894D1",
    "sand": "#FDD427",
    "treebark": "#71573D",
    "treeleaves": "#9CC756"
}
const bnw = {
    "sky": "#AEB5C7",
    "ocean": "#6894D1",
    "sand": "#FDD427",
    "treebark": "#71573D",
    "treeleaves": "#9CC756"
}
colorOptions = [color, bnw]
colorIndex = 0;
let chosenColor;

function setup() {
    createCanvas(400, 400);
    colorMode(HSB)
    background("black");
}
let saturation = 20; 
let brightness = 20;
let opacity = 5;

function draw() {
    // chosenColor = colorOptions[colorIndex];
    saturation+=10
    brightness+=2
    opacity+=((opacity+5)%20)/20;
    fill(120,saturation%100,brightness%100,opacity);
    strokeWeight(20)
    stroke(120,saturation%100,brightness%100,opacity)
    line(pmouseX, pmouseY, mouseX, mouseY);
    // mouseLocation();
}

function mouseLocation() {
    fill(0)
    text(`${int(mouseX)},${int(mouseY)}`, 20, 20);
}
