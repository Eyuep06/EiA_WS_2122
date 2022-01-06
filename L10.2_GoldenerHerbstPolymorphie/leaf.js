"use strict";
var Polymorphie;
(function (Polymorphie) {
    class Leaf extends Polymorphie.Moveable {
        constructor(_color) {
            super(0, 0);
            this.color = _color;
        }
        draw() {
            let leaf = new Path2D();
            Polymorphie.crc2.beginPath();
            leaf.arc(0, 0, 16, 0, Math.PI * .25);
            Polymorphie.crc2.save();
            Polymorphie.crc2.translate(this.position.x, this.position.y);
            Polymorphie.crc2.fillStyle = this.color;
            Polymorphie.crc2.fill(leaf);
            Polymorphie.crc2.stroke();
            Polymorphie.crc2.restore();
        }
        move() {
            super.move(1 / 50, this.velocity.y);
        }
    }
    Polymorphie.Leaf = Leaf;
})(Polymorphie || (Polymorphie = {}));
//# sourceMappingURL=leaf.js.map