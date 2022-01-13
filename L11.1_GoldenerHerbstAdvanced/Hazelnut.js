"use strict";
var Advanced;
(function (Advanced) {
    class Hazelnut extends Advanced.Moveable {
        constructor(_positionX, _positionY) {
            super(_positionX, _positionY);
            this.velocity.random(0, 0);
        }
        draw() {
            Advanced.crc2.save();
            Advanced.crc2.beginPath();
            Advanced.crc2.arc(this.position.x, this.position.y, 5, 0, 2 * Math.PI);
            Advanced.crc2.fillStyle = "black";
            Advanced.crc2.fill();
            Advanced.crc2.restore();
        }
    }
    Advanced.Hazelnut = Hazelnut;
})(Advanced || (Advanced = {}));
//# sourceMappingURL=Hazelnut.js.map