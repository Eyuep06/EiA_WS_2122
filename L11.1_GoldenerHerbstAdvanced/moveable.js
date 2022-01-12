"use strict";
var Advanced;
(function (Advanced) {
    class Moveable {
        constructor(_x, _y) {
            this.position = new Advanced.Vector(_x, _y);
            this.velocity = new Advanced.Vector(0, 0);
            this.velocity.random(100, 200);
        }
        move(_timeslice, _yVelocity) {
            let offset = new Advanced.Vector(this.velocity.x, _yVelocity);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += Advanced.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += Advanced.crc2.canvas.height;
            if (this.position.x > Advanced.crc2.canvas.width)
                this.position.x -= Advanced.crc2.canvas.width;
            if (this.position.y > Advanced.crc2.canvas.height)
                this.position.y -= Advanced.crc2.canvas.height;
        }
    }
    Advanced.Moveable = Moveable;
})(Advanced || (Advanced = {}));
//# sourceMappingURL=moveable.js.map