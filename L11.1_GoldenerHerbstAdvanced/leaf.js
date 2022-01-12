"use strict";
var Advanced;
(function (Advanced) {
    class Leaf extends Advanced.Moveable {
        constructor(_color) {
            super(0, 0);
            this.color = _color;
        }
        draw() {
            let leaf = new Path2D();
            Advanced.crc2.beginPath();
            leaf.arc(0, 0, 16, 0, Math.PI * .25);
            Advanced.crc2.save();
            Advanced.crc2.translate(this.position.x, this.position.y);
            Advanced.crc2.fillStyle = this.color;
            Advanced.crc2.fill(leaf);
            Advanced.crc2.stroke();
            Advanced.crc2.restore();
        }
        move() {
            super.move(1 / 50, this.velocity.y);
        }
    }
    Advanced.Leaf = Leaf;
})(Advanced || (Advanced = {}));
//# sourceMappingURL=leaf.js.map