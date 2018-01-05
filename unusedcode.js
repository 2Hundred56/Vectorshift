
var canvasSize;
var processing;
var drawing;

function init() {
    drawing = new Drawing([600,600],new processing.color(255));
    drawing.shapes.push(new Shape([100,100],"rect"));

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
    proc.size(canvasSize.x,canvasSize.y);
    proc.background(255,255,255);
}
function redraw () {
    drawing.render();
    var mousePos = new Vector(proc.mouseX,proc.mouseY);

}
var mousePressed = false;
function sketchProc(_processing) {
    processing = _processing;
    proc = _processing;
    proc.draw = function() {
        redraw();
        let mousePos = new Vector(proc.mouseX-180, proc.mouseY-110);
        let mouseDown = mousePressed && (proc.mouseButton == proc.LEFT);
        for (var i in drawing.shapes) {
            let shape = drawing.shapes[i];
            for (var j in shape.nodes) {
                let node = shape.nodes[j];
                let mDist = distance(mousePos,node);
                if (mDist < 5) {
                    proc.fill(244, 152, 66);
                    proc.ellipse(node.x,node.y,8,8);

                }
                if (mouseDown) {

                    if (mDist < 100) {
                        console.log(sub(node,mousePos).normalized());
                        drawing.shapes[i].nodes[j] = sub(node,sub(node,mousePos).normalized()); // JS is an awful language
                    }
                }
            }
        }
    }
    proc.setup = function() {
        init();

        var fontA = proc.loadFont("courier");
        proc.textFont(fontA, 24);

    }
    proc.mousePressed = function() {
        mousePressed = true;
    }
    proc.mouseReleased = function() {
        mousePressed = false;
    }
}
var canvas = document.getElementById("main-canvas");
var processingInstance = new Processing(canvas, sketchProc);

class Segment {
    // https://en.wikipedia.org/wiki/Bezier_curve
    function bezierCoord(points,coord,t) {
        var n = points.length-1;
        var sum = 0;
        for (var i=0;i<=n;i++) {
            var ni = (factorial(n))/(factorial(n-i)*factorial(i));
            var value = ni*pow(1-t,n-i)*pow(t,i)*points[i][coord];
            sum+=value;
        }
        return sum;
    }
    function bezier(points,t) {
        return Vector(
            bezierCoord(points,t,0),
            bezierCoord(points,t,1)
        );
    }
    constructior (parent,start,end,smooth) {
        this.parent = parent;
        this.start = start;
        this.end = end;
        this.smooth = smooth;

    }
    function getPoint(t) {
        var points = [];
        for (var i=start;i<=end;i++) {
            points.push(parent.nodes[i].pos);
        }
        return bezier(points,t);
    }
}
class Path {
    function init () {
        this.nodes = []
    }

    constructior (points) {
        this.points = points;
    }

}
