x = 200; y = 200;
dx = 2; dy = 30;
w = 400; h = 400;
let position;
let velocity;

function setup() {
    createCanvas(w, h);
    frameRate(1000)
    position = createVector(x, y);
    velocity = createVector(dx, dy);
}

function draw() {

    background(200);
    position.add(velocity);

    /*    
        x += dx;
        y += dy;
    
        if (x > w || x < 0)
            dx *= -1;
    
        if (y > h || y < 0)
            dy *= -1;
    */

    if (position.x > width || position.x < 0) {
        velocity.x = velocity.x * -1;
    }
    if (position.y > height || position.y < 0) {
        velocity.y = velocity.y * -1;
    }


    noStroke();
    fill(150);
    circle(position.x, position.y, 50);

}