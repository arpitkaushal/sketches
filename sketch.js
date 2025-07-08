let walkers = [];

function setup() {
    
    createCanvas(1920,1080);
    background(230, 190, 255)
    
    const totalWalkers = 20;
    for (let index = 0; index < totalWalkers; index++) {
        walkers.push(new Walker(random(width), random(height)));
    }
    
    // to allow background processing of the sketch
    // Do NOT call frameRate() or loop()/noLoop() here if you want setInterval to drive it
    // noLoop(); // Stop p5's default draw loop
    // Manually call draw() at a fixed interval
    // Be cautious with very low intervals as it can be CPU intensive
    // setInterval(draw, 1000 / 1000); // Call draw 30 times per second
}

function draw(){
    for(let walker of walkers){
        walker.step();
    }
    for(let walker of walkers){
        walker.show();
    }
}

class Walker {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    
    show(){
        stroke(10);
        point(this.x, this.y);
        frameRate(120);
    }

    step(){
        let choice = floor(random(4));
        switch (choice) {
            case 0: this.x++; break;
            case 1: this.x--; break;
            case 2: this.y++; break;
            case 3: this.y--; break;
            default:
                break;
        }
    }

}