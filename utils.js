function distance (a,b) {
    return Math.sqrt(Math.pow(b.x-a.x,2)+Math.pow(b.y-a.y,2));
}
function sub (a,b) {
    return new Vector(a.x-b.x,a.y-b.y);

}