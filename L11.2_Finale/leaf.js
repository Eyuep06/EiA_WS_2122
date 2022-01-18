"use strict";
var L11_2;
(function (L11_2) {
    class Leaf extends L11_2.Moveable {
        constructor(_color) {
            super(0, 0);
            this.color = _color;
        }
        draw() {
            let leaf = new Path2D();
            L11_2.crc2.beginPath();
            leaf.arc(0, 0, 16, 0, Math.PI * .25);
            L11_2.crc2.save();
            L11_2.crc2.translate(this.position.x, this.position.y);
            L11_2.crc2.fillStyle = this.color;
            L11_2.crc2.fill(leaf);
            L11_2.crc2.stroke();
            L11_2.crc2.restore();
        }
        move() {
            super.move(1 / 50, this.velocity.y);
        }
    }
    L11_2.Leaf = Leaf;
})(L11_2 || (L11_2 = {}));
//# sourceMappingURL=leaf.js.map