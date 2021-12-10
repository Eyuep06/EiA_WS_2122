"use strict";
var goldenerHerbstAnimation;
(function (goldenerHerbstAnimation) {
    class Cloud {
        constructor() {
            this.startingPosition = new goldenerHerbstAnimation.Vector(550, 100);
            this.size = new goldenerHerbstAnimation.Vector(200, 75);
            this.velocity = new goldenerHerbstAnimation.Vector(0, 0);
            this.velocity.random(100, 200);
        }
        move(_timeslice) {
            console.log("wolke bewegen");
            let offset = new goldenerHerbstAnimation.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.startingPosition.add(offset);
        }
        draw() {
            //console.log("wolke zeichnen");
            let nParticles = 30;
            let radiusParticle = 50;
            let particle = new Path2D();
            let gradient = goldenerHerbstAnimation.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            goldenerHerbstAnimation.crc2.save();
            goldenerHerbstAnimation.crc2.translate(this.startingPosition.x, this.startingPosition.y);
            goldenerHerbstAnimation.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                goldenerHerbstAnimation.crc2.save();
                let x = (Math.random() - 0.5) * this.size.x;
                let y = -(Math.random()) * this.size.y;
                goldenerHerbstAnimation.crc2.translate(x, y);
                goldenerHerbstAnimation.crc2.fill(particle);
                goldenerHerbstAnimation.crc2.restore();
            }
            goldenerHerbstAnimation.crc2.restore();
        }
    }
    goldenerHerbstAnimation.Cloud = Cloud;
})(goldenerHerbstAnimation || (goldenerHerbstAnimation = {}));
//# sourceMappingURL=cloud.js.map