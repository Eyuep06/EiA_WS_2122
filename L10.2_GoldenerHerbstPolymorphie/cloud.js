"use strict";
var Polymorphie;
(function (Polymorphie) {
    class Cloud extends Polymorphie.Moveable {
        constructor() {
            super(550, 100);
            this.size = new Polymorphie.Vector(200, 75);
        }
        draw() {
            //console.log("wolke zeichnen");
            let nParticles = 30;
            let radiusParticle = 50;
            let particle = new Path2D();
            let gradient = Polymorphie.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            Polymorphie.crc2.save();
            Polymorphie.crc2.translate(this.position.x, this.position.y);
            Polymorphie.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                Polymorphie.crc2.save();
                let x = (Math.random() - 0.5) * this.size.x;
                let y = -(Math.random()) * this.size.y;
                Polymorphie.crc2.translate(x, y);
                Polymorphie.crc2.fill(particle);
                Polymorphie.crc2.restore();
                //console.log(x, y);
            }
            Polymorphie.crc2.restore();
        }
        move() {
            super.move(1 / 50, 0);
        }
    }
    Polymorphie.Cloud = Cloud;
})(Polymorphie || (Polymorphie = {}));
//# sourceMappingURL=cloud.js.map