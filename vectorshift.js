class Vector {
    constructor (x,y) {
        this.x = x;
        this.y = y;
    }
}
class Node {
    constructor (x,y) {
        this.pos = new Vector(x,y);

    }
}
function factorial (n) {
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
} ​
class Path {
    function init () {
        this.nodes = []
    }
    // https://en.wikipedia.org/wiki/Bezier_curve
    function bezierCoord(points,coord,t) {
        var n = points.length-1;
        var sum = 0;
        for (var i=0;i<=n;i++) {
            var ni = (factorial(n))/(factorial(n-i)*factorial(i));
            var value = ni*pow(1-t,n-i)*pow(t,i)*points[i][coord];
            sum+=value;
        }
        return sum
    }
    function bezier(points,t) {
        return Vector(
            bezierCoord(points,t,0),
            bezierCoord(points,t,1)
        );
    }
    constructior () {

    }

}
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
