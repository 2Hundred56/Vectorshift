class Vector {
    constructor (x,y) {
        this.x = x;
        this.y = y;
    }
}
class Shape {
    function init() {
        this.nodes = [];
        this.closed = true;
    }
    constructor (pos,starting) {
        init();
        if (starting == "rect") {

        }
    }
}
function factorial (n) {
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
} ​

var canvasSize;
var processing;
function init() {
    setCanvasSize(600,600);
}
function onResize() {
    var xSize = parseInt(document.getElementById("xsize").value);
    var ySize = parseInt(document.getElementById("ysize").value);
    if (xSize == NaN || ySize == NaN) {
        alert("Invalid input");
    } else {
        setCanvasSize(xSize,ySize);
    }
}
function setCanvasSize(x,y) {
    canvasSize = new Vector(x,y);
    processing.size(canvasSize.x,canvasSize.y);
    processing.background(255,255,255);
}
function sketchProc(_processing) {
    processing = _processing;
    processing.draw = function() {
    }
    processing.setup = function() {

        init();

        processing.fill(255);
        var fontA = processing.loadFont("courier");
        processing.textFont(fontA, 24);

    }
}
var canvas = document.getElementById("main-canvas");
var processingInstance = new Processing(canvas, sketchProc);
