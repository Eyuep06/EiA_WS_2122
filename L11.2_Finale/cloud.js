"use strict";
var L11_2;
(function (L11_2) {
    class Cloud extends L11_2.Moveable {
        constructor() {
            super(550, 100);
            this.size = new L11_2.Vector(200, 75);
        }
        draw() {
            //console.log("wolke zeichnen");
            let nParticles = 30;
            let radiusParticle = 50;
            let particle = new Path2D();
            let gradient = L11_2.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            L11_2.crc2.save();
            L11_2.crc2.translate(this.position.x, this.position.y);
            L11_2.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                L11_2.crc2.save();
                let x = (Math.random() - 0.5) * this.size.x;
                let y = -(Math.random()) * this.size.y;
                L11_2.crc2.translate(x, y);
                L11_2.crc2.fill(particle);
                L11_2.crc2.restore();
                //console.log(x, y);
            }
            L11_2.crc2.restore();
        }
        move() {
            super.move(1 / 50, 0);
        }
    }
    L11_2.Cloud = Cloud;
})(L11_2 || (L11_2 = {}));
//# sourceMappingURL=cloud.js.map