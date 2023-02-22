// draws a tiles pattern using diagonal lines

// defines the size of the imaginary square in which the diagonal will be drawn
const sideLength = 100; 

// set the starting point of the pattern to the upper left corner
xLeft = 0;
xRight = sideLength;
yTop = 0;
yBottom = sideLength;

/*
The setup() function is executed once at the start of the program.
It defines the initial settings, such as the canvas size or the background color.
*/
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	stroke(255);
}

/*
The draw() function is executed infinitely once the setup() function is finished.
It calls the drawRandomLine() function with the current values of the global variables.
*/
function draw() {
	drawRandomLine(xLeft, yTop, xRight, yBottom);
}

// Randomly draws a diagonal from top to bottom or from bottom to top.
function drawRandomLine(x1, y1, x2, y2) {
	randomNumber = random(10);
	inverted = randomNumber < 5;
	if (inverted) {
		line(x1, y2, x2, y1);
	} else {
		line(x1, y1, x2, y2);
	}
	shift();
}

// Moves the square where the diagonal is drawn one unit to the right or to a new line.
function shift() {
	if (xRight < windowWidth) {
		xLeft = xLeft + sideLength;
		xRight += sideLength;
	} else {
		xLeft = 0;
		xRight = sideLength;
		yTop += sideLength;
		yBottom += sideLength;
	}
}