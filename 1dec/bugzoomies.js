// todo try using createGraphics for the moving element
// and move all static elements to setup()

function setup() {
  createCanvas(400, 400);
  frameRate(100)
}

function draw() {
  background("lightblue");
  strokeWeight(10);
  stroke("#ffd058");
  fill("#fffd78");
  circle(350, 50, 50);

  strokeWeight(0);
  fill("#90ee90")
  // first two args set location of upper left corner of the rectange
  rect(0, 250, 400, 200)

  textSize(50);
  text("🌻", 150, 250);

  // move the worm randomly along the x axis between a range
  xstart = 50; xend = 250;
  xpos = random(xstart, xend);
  text("🐞", xpos, 250);
}
