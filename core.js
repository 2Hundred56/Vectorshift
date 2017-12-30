class Vector {
    constructor (x,y) {
        this.x = x;
        this.y = y;
    }
    normalized() {
        if (this.x > this.y) {
            return new Vector(1,this.y/this.x);
        } else {
            return new Vector(this.x/this.y,1);
        }
    }
}

class Shape {
    constructor (origin,starting) {
        this.nodes = [];
        this.closed = true;
        this.color = proc.color(0);
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
        proc.fill(this.color);
        proc.beginShape();
        for (var i=0;i<this.nodes.length;i++) {
            var node = this.nodes[i];
            proc.vertex(node.x,node.y);
        }
        proc.endShape();
    }
}
class Drawing {
    constructor (canvasSize,bgColor) {
        setCanvasSize(canvasSize[0],canvasSize[1]);
        this.bgColor = bgColor;
        this.shapes = [];
    }
    render () {
        proc.background(this.bgColor);
        for (var shapeIndex=0;shapeIndex<this.shapes.length;shapeIndex++) {
            var shape = this.shapes[shapeIndex];
            shape.render();

        }
    }
}