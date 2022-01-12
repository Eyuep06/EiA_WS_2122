"use strict";
var Advanced;
(function (Advanced) {
    class Squirrel extends Advanced.Moveable {
        constructor() {
            super(50, 500);
            this.velocity.randomForSquirrel(100, 200);
        }
        draw() {
            Advanced.crc2.save();
            //Schwanz
            Advanced.crc2.beginPath();
            Advanced.crc2.ellipse(this.position.x - 20, this.position.y + 30, 24, 5, Math.PI / 3, 0, 2 * Math.PI);
            Advanced.crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            Advanced.crc2.fill();
            Advanced.crc2.stroke();
            Advanced.crc2.closePath();
            //Arm2
            Advanced.crc2.beginPath();
            Advanced.crc2.ellipse(this.position.x + 20, this.position.y + 30, 10, 4, Math.PI / 5, 0, 2 * Math.PI);
            Advanced.crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            Advanced.crc2.fill();
            Advanced.crc2.stroke();
            Advanced.crc2.closePath();
            //Bein2
            Advanced.crc2.beginPath();
            Advanced.crc2.ellipse(this.position.x + 14, this.position.y + 48, 14, 5, Math.PI / 3, 0, 2 * Math.PI);
            Advanced.crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            Advanced.crc2.fill();
            Advanced.crc2.stroke();
            Advanced.crc2.closePath();
            //Körper
            Advanced.crc2.beginPath();
            Advanced.crc2.ellipse(this.position.x, this.position.y + 30, 25, 19, Math.PI / 2.2, 0, 2 * Math.PI);
            Advanced.crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            Advanced.crc2.fill();
            Advanced.crc2.stroke();
            Advanced.crc2.closePath();
            //Kopf
            Advanced.crc2.beginPath();
            Advanced.crc2.arc(this.position.x, this.position.y, 12, 0, 2 * Math.PI);
            Advanced.crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            Advanced.crc2.fill();
            Advanced.crc2.stroke();
            Advanced.crc2.closePath();
            Advanced.crc2.beginPath();
            Advanced.crc2.arc(this.position.x + 4, this.position.y - 3, 2, 0, 2 * Math.PI);
            Advanced.crc2.fillStyle = "black";
            Advanced.crc2.fill();
            Advanced.crc2.stroke();
            Advanced.crc2.closePath();
            //Arm1
            Advanced.crc2.beginPath();
            Advanced.crc2.ellipse(this.position.x + 20, this.position.y + 35, 10, 4, Math.PI / 5, 0, 2 * Math.PI);
            Advanced.crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            Advanced.crc2.fill();
            Advanced.crc2.stroke();
            Advanced.crc2.closePath();
            //Bein1
            Advanced.crc2.beginPath();
            Advanced.crc2.ellipse(this.position.x + 10, this.position.y + 50, 14, 5, Math.PI / 3, 0, 2 * Math.PI);
            Advanced.crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            Advanced.crc2.fill();
            Advanced.crc2.stroke();
            Advanced.crc2.closePath();
            Advanced.crc2.restore();
        }
    }
    Advanced.Squirrel = Squirrel;
})(Advanced || (Advanced = {}));
//# sourceMappingURL=squirrel.js.map