class Vector {
    constructor (x,y) {
        this.x = x;
        this.y = y;
    }
}

class Shape {
    constructor (origin,starting) {
        this.nodes = [];
        this.closed = true;
        this.color = processing.color(0);
        var shape = [];

        if (starting == "rect") {
            shape = [
                [-50, -50],
                [ 50, -50],
                [ 50,  50],
                [-50,  50]
            ]
        }
        for (var i=0;i<shape.length;i++) {
            var pos = shape[i];
            this.nodes.push(
                new Vector(pos[0]+origin[0],pos[1]+origin[1])
            );
        }
        console.log(this.nodes);
    }
    render () {
        processing.fill(this.color);
        processing.beginShape();
        for (var i=0;i<this.nodes.length;i++) {
            var node = this.nodes[i];

            processing.vertex(node.x,node.y);
        }
        processing.endShape();
    }
}
class Drawing {
    constructor (canvasSize,bgColor) {
        setCanvasSize(canvasSize[0],canvasSize[1]);
        this.bgColor = bgColor;
        this.shapes = [];
    }
    render () {
        processing.background(this.bgColor);
        for (var shapeIndex=0;shapeIndex<this.shapes.length;shapeIndex++) {
            var shape = this.shapes[shapeIndex];
            shape.render();

        }
    }
}
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
    processing.size(canvasSize.x,canvasSize.y);
    processing.background(255,255,255);
}
function redraw () {
    drawing.render();

}
function sketchProc(_processing) {
    processing = _processing;
    processing.draw = function() {
        redraw();

    }
    processing.setup = function() {
        init();

        var fontA = processing.loadFont("courier");
        processing.textFont(fontA, 24);

    }
}
var canvas = document.getElementById("main-canvas");
var processingInstance = new Processing(canvas, sketchProc);
