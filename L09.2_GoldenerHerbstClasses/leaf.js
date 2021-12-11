"use strict";
var goldenerHerbstAnimation;
(function (goldenerHerbstAnimation) {
    class Leaf {
        constructor(_color) {
            this.position = new goldenerHerbstAnimation.Vector(0, 0);
            this.velocity = new goldenerHerbstAnimation.Vector(0, 0);
            this.velocity.random(100, 200);
            this.color = _color;
        }
        move(_timeslice) {
            let offset = new goldenerHerbstAnimation.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += goldenerHerbstAnimation.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += goldenerHerbstAnimation.crc2.canvas.height;
            if (this.position.x > goldenerHerbstAnimation.crc2.canvas.width)
                this.position.x -= goldenerHerbstAnimation.crc2.canvas.width;
            if (this.position.y > goldenerHerbstAnimation.crc2.canvas.height)
                this.position.y -= goldenerHerbstAnimation.crc2.canvas.height;
        }
        draw() {
            let leaf = new Path2D();
            goldenerHerbstAnimation.crc2.beginPath();
            leaf.arc(0, 0, 16, 0, Math.PI * .25);
            goldenerHerbstAnimation.crc2.save();
            goldenerHerbstAnimation.crc2.translate(this.position.x, this.position.y);
            goldenerHerbstAnimation.crc2.fillStyle = this.color;
            goldenerHerbstAnimation.crc2.fill(leaf);
            goldenerHerbstAnimation.crc2.stroke();
            goldenerHerbstAnimation.crc2.restore();
        }
    }
    goldenerHerbstAnimation.Leaf = Leaf;
})(goldenerHerbstAnimation || (goldenerHerbstAnimation = {}));
//# sourceMappingURL=leaf.js.map