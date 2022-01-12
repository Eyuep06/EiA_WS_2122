"use strict";
var Advanced;
(function (Advanced) {
    class Cloud extends Advanced.Moveable {
        constructor() {
            super(550, 100);
            this.size = new Advanced.Vector(200, 75);
        }
        draw() {
            let nParticles = 30;
            let radiusParticle = 50;
            let particle = new Path2D();
            let gradient = Advanced.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            Advanced.crc2.save();
            Advanced.crc2.translate(this.position.x, this.position.y);
            Advanced.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                Advanced.crc2.save();
                let x = (Math.random() - 0.5) * this.size.x;
                let y = -(Math.random()) * this.size.y;
                Advanced.crc2.translate(x, y);
                Advanced.crc2.fill(particle);
                Advanced.crc2.restore();
            }
            Advanced.crc2.restore();
        }
    }
    Advanced.Cloud = Cloud;
})(Advanced || (Advanced = {}));
//# sourceMappingURL=cloud.js.map