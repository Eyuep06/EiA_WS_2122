"use strict";
var Polymorphie;
(function (Polymorphie) {
    class Squirrel extends Polymorphie.Moveable {
        constructor() {
            super(50, 500);
            this.velocity.randomForSquirrel(100, 200);
        }
        draw() {
            Polymorphie.crc2.save();
            //Schwanz
            Polymorphie.crc2.beginPath();
            Polymorphie.crc2.ellipse(this.position.x - 20, this.position.y + 30, 24, 5, Math.PI / 3, 0, 2 * Math.PI);
            Polymorphie.crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            Polymorphie.crc2.fill();
            Polymorphie.crc2.stroke();
            Polymorphie.crc2.closePath();
            //Arm2
            Polymorphie.crc2.beginPath();
            Polymorphie.crc2.ellipse(this.position.x + 20, this.position.y + 30, 10, 4, Math.PI / 5, 0, 2 * Math.PI);
            Polymorphie.crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            Polymorphie.crc2.fill();
            Polymorphie.crc2.stroke();
            Polymorphie.crc2.closePath();
            //Bein2
            Polymorphie.crc2.beginPath();
            Polymorphie.crc2.ellipse(this.position.x + 14, this.position.y + 48, 14, 5, Math.PI / 3, 0, 2 * Math.PI);
            Polymorphie.crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            Polymorphie.crc2.fill();
            Polymorphie.crc2.stroke();
            Polymorphie.crc2.closePath();
            //Körper
            Polymorphie.crc2.beginPath();
            Polymorphie.crc2.ellipse(this.position.x, this.position.y + 30, 25, 19, Math.PI / 2.2, 0, 2 * Math.PI);
            Polymorphie.crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            Polymorphie.crc2.fill();
            Polymorphie.crc2.stroke();
            Polymorphie.crc2.closePath();
            //Kopf
            Polymorphie.crc2.beginPath();
            Polymorphie.crc2.arc(this.position.x, this.position.y, 12, 0, 2 * Math.PI);
            Polymorphie.crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            Polymorphie.crc2.fill();
            Polymorphie.crc2.stroke();
            Polymorphie.crc2.closePath();
            Polymorphie.crc2.beginPath();
            Polymorphie.crc2.arc(this.position.x + 4, this.position.y - 3, 2, 0, 2 * Math.PI);
            Polymorphie.crc2.fillStyle = "black";
            Polymorphie.crc2.fill();
            Polymorphie.crc2.stroke();
            Polymorphie.crc2.closePath();
            //Arm1
            Polymorphie.crc2.beginPath();
            Polymorphie.crc2.ellipse(this.position.x + 20, this.position.y + 35, 10, 4, Math.PI / 5, 0, 2 * Math.PI);
            Polymorphie.crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            Polymorphie.crc2.fill();
            Polymorphie.crc2.stroke();
            Polymorphie.crc2.closePath();
            //Bein1
            Polymorphie.crc2.beginPath();
            Polymorphie.crc2.ellipse(this.position.x + 10, this.position.y + 50, 14, 5, Math.PI / 3, 0, 2 * Math.PI);
            Polymorphie.crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            Polymorphie.crc2.fill();
            Polymorphie.crc2.stroke();
            Polymorphie.crc2.closePath();
            Polymorphie.crc2.restore();
        }
        move() {
            super.move(1 / 100, 0);
        }
    }
    Polymorphie.Squirrel = Squirrel;
})(Polymorphie || (Polymorphie = {}));
//# sourceMappingURL=squirrel.js.map