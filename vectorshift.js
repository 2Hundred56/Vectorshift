
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
