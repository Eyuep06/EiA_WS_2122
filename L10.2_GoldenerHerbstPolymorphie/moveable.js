"use strict";
var Polymorphie;
(function (Polymorphie) {
    class Moveable {
        constructor(_x, _y) {
            this.position = new Polymorphie.Vector(_x, _y);
            this.velocity = new Polymorphie.Vector(0, 0);
            this.velocity.random(100, 200);
        }
        move(_timeslice, _yVelocity) {
            let offset = new Polymorphie.Vector(this.velocity.x, _yVelocity);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += Polymorphie.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += Polymorphie.crc2.canvas.height;
            if (this.position.x > Polymorphie.crc2.canvas.width)
                this.position.x -= Polymorphie.crc2.canvas.width;
            if (this.position.y > Polymorphie.crc2.canvas.height)
                this.position.y -= Polymorphie.crc2.canvas.height;
        }
        draw() {
            //
        }
    }
    Polymorphie.Moveable = Moveable;
})(Polymorphie || (Polymorphie = {}));
//# sourceMappingURL=moveable.js.map