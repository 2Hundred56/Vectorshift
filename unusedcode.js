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
