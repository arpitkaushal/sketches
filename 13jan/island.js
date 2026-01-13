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
}

function draw() {
    chosenColor = colorOptions[colorIndex];
    mouseLocation();
    background(chosenColor.sky);
    fill(chosenColor.ocean);
    rect()
}

function mouseLocation() {
    fill(0)
    text(`${int(mouseX)},${int(mouseY)}`, 20, 20);
}
