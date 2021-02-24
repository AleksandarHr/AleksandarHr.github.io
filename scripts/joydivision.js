// var w = window.innerWidth
// var h = window.innerHeight
var height_size = 480;
var width_size = 320;
var dpr = window.devicePixelRatio;
var w = width_size * dpr;
var h = height_size * dpr;
var lineColor, bgColor;
var numLines = 100
var verticalStep = h / numLines
var horizontalStep = w / 50
// var oscillation = 15

function setup() {
  let canv = createCanvas(w, h)
  canv.parent('joy_division')
  scale(dpr, dpr);
  noLoop()
}

function draw() {
  const htmlEl = document.documentElement;
  if (htmlEl.classList.contains("light")) {
    bgColor = 0;
    lineColor = 255;
  } else if (htmlEl.classList.contains("dark")){
    bgColor = 255;
    lineColor = 0;
  }
  background(bgColor)
  strokeWeight(2)
  stroke(lineColor)
  drawLines()
}

function drawOneLine(y) {
  var i;
  var points = []
  for (i = 0; i <= w; i += horizontalStep) {
    // var rand = Math.random()*oscillation
    var distanceToCenter = Math.abs(i - w / 2);
    var variance = Math.max(w / 2 - (w/5) - distanceToCenter, 0);
    var rand = Math.random() * variance / 2 * -1;
    points.push(createVector(i, y + rand));
  }

  fill(bgColor)
  beginShape()
  vertex(points[0].x, points[0].y)
  for (let i = 0; i < points.length - 1; i++) {
    var current = points[i]
    var next = points[i+1]
    var curveX = (current.x+next.x)/2
    var curveY = (current.y+next.y)/2
    quadraticVertex(current.x, current.y, curveX, curveY)
    // line(current.x, current.y, next.x, next.y)
  }
  endShape()
}

function drawLines() {
  for (let y = 15*verticalStep; y < h; y +=verticalStep) {
    drawOneLine(y)
  }
}
