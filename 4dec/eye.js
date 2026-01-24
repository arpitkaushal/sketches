function setup() {
	createCanvas(W = windowWidth, H = windowHeight)
	background(100)
	w = W/2
	h = H/2
	S = min(W,H)
	s = S/2
	noStroke()
	fill(255)
	translate(w,h)
	ew = s * 2
	eh = s * 1.5
	angle = PI / 8.855
	y = - s/3
	arc(0,y, ew, eh, angle, PI - angle, CHORD)
	rotate(PI)
	arc(0,y, ew, eh, angle, PI - angle, CHORD)
	fill(0)
	circle(0, 0, s * 0.75)
}