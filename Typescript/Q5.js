var cone = /** @class */ (function () {
    function cone(shapename, radius, slantheight) {
        this.shapename = shapename;
        this.radius = radius;
        this.slantheight = slantheight;
        console.log((3.14 * this.radius * this.slantheight) + (3.14 * this.radius * this.radius));
    }
    return cone;
}());
var sphere = /** @class */ (function () {
    function sphere(shapename, radius) {
        this.shapename = shapename;
        this.radius = radius;
        console.log(4 * 3.14 * this.radius * this.radius);
    }
    return sphere;
}());
var rectangle = /** @class */ (function () {
    function rectangle(shapename, width, length) {
        this.shapename = shapename;
        this.width = width;
        this.length = length;
        console.log(this.length * this.width);
    }
    return rectangle;
}());
var cn = new cone('cone', 2, 2);
//console.log(cn.areaofcone(2,2));
var sphr = new sphere('Sphere', 2);
//console.log(sphr.areaofcsphere(2));
var rect = new rectangle('rectangle', 2, 5);
//console.log(rect.areaofrectangle(2,5));
