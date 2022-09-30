// draws a tiles pattern using diagonal lines

// define variables
sideLength = 100;

xLeft = 0;
xRight = sideLength;
yTop = 0;
yBottom = sideLength;

// commands to run once
function setup() {
 createCanvas(windowWidth, windowHeight);
 background(0);
 stroke(255);
}

// commands to run in an infinite loop
function draw() {
 drawRandomLine(xLeft, yTop, xRight, yBottom);
}

// draw a line going randomly up or down
function drawRandomLine(x1, y1, x2, y2) {
 randomNumber = random(10);
 inverted = randomNumber > 5;
 if (inverted) {
  line(x1, y2, x2, y1);
 } else {
  line(x1, y1, x2, y2);
 }
 shift();
}

// move to the next drawing section
function shift() {
 if (xRight < windowWidth) {
  xLeft = xLeft + sideLength;
  xRight = xRight + sideLength;
 } else {
  xLeft = 0;
  xRight = sideLength;
  yTop = yTop + sideLength;
  yBottom = yBottom + sideLength;
 }
}
