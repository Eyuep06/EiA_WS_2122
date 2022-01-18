"use strict";
var L11_2;
(function (L11_2) {
    class Moveable {
        constructor(_x, _y) {
            this.position = new L11_2.Vector(_x, _y);
            this.velocity = new L11_2.Vector(0, 0);
            this.velocity.random(100, 200);
        }
        move(_timeslice, _yVelocity) {
            let offset = new L11_2.Vector(this.velocity.x, _yVelocity);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L11_2.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L11_2.crc2.canvas.height;
            if (this.position.x > L11_2.crc2.canvas.width)
                this.position.x -= L11_2.crc2.canvas.width;
            if (this.position.y > L11_2.crc2.canvas.height)
                this.position.y -= L11_2.crc2.canvas.height;
        }
        draw() {
            //
        }
    }
    L11_2.Moveable = Moveable;
})(L11_2 || (L11_2 = {}));
//# sourceMappingURL=moveable.js.map