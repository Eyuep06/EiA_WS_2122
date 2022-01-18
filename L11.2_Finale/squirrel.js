"use strict";
var L11_2;
(function (L11_2) {
    class Squirrel extends L11_2.Moveable {
        constructor() {
            super(50, 500);
            this.velocity.randomForSquirrel(100, 200);
        }
        draw() {
            L11_2.crc2.save();
            //Schwanz
            L11_2.crc2.beginPath();
            L11_2.crc2.ellipse(this.position.x - 20, this.position.y + 30, 24, 5, Math.PI / 3, 0, 2 * Math.PI);
            L11_2.crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            L11_2.crc2.fill();
            L11_2.crc2.stroke();
            L11_2.crc2.closePath();
            //Arm2
            L11_2.crc2.beginPath();
            L11_2.crc2.ellipse(this.position.x + 20, this.position.y + 30, 10, 4, Math.PI / 5, 0, 2 * Math.PI);
            L11_2.crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            L11_2.crc2.fill();
            L11_2.crc2.stroke();
            L11_2.crc2.closePath();
            //Bein2
            L11_2.crc2.beginPath();
            L11_2.crc2.ellipse(this.position.x + 14, this.position.y + 48, 14, 5, Math.PI / 3, 0, 2 * Math.PI);
            L11_2.crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            L11_2.crc2.fill();
            L11_2.crc2.stroke();
            L11_2.crc2.closePath();
            //Körper
            L11_2.crc2.beginPath();
            L11_2.crc2.ellipse(this.position.x, this.position.y + 30, 25, 19, Math.PI / 2.2, 0, 2 * Math.PI);
            L11_2.crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            L11_2.crc2.fill();
            L11_2.crc2.stroke();
            L11_2.crc2.closePath();
            //Kopf
            L11_2.crc2.beginPath();
            L11_2.crc2.arc(this.position.x, this.position.y, 12, 0, 2 * Math.PI);
            L11_2.crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            L11_2.crc2.fill();
            L11_2.crc2.stroke();
            L11_2.crc2.closePath();
            L11_2.crc2.beginPath();
            L11_2.crc2.arc(this.position.x + 4, this.position.y - 3, 2, 0, 2 * Math.PI);
            L11_2.crc2.fillStyle = "black";
            L11_2.crc2.fill();
            L11_2.crc2.stroke();
            L11_2.crc2.closePath();
            //Arm1
            L11_2.crc2.beginPath();
            L11_2.crc2.ellipse(this.position.x + 20, this.position.y + 35, 10, 4, Math.PI / 5, 0, 2 * Math.PI);
            L11_2.crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            L11_2.crc2.fill();
            L11_2.crc2.stroke();
            L11_2.crc2.closePath();
            //Bein1
            L11_2.crc2.beginPath();
            L11_2.crc2.ellipse(this.position.x + 10, this.position.y + 50, 14, 5, Math.PI / 3, 0, 2 * Math.PI);
            L11_2.crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            L11_2.crc2.fill();
            L11_2.crc2.stroke();
            L11_2.crc2.closePath();
            L11_2.crc2.restore();
        }
        move() {
            super.move(1 / 100, 0);
        }
    }
    L11_2.Squirrel = Squirrel;
})(L11_2 || (L11_2 = {}));
//# sourceMappingURL=squirrel.js.map