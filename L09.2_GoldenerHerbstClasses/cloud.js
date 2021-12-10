"use strict";
var goldenerHerbstAnimation;
(function (goldenerHerbstAnimation) {
    class Cloud {
        constructor(_startingPosition) {
            this.startingPosition = _startingPosition;
        }
        move(_timeslice) {
            //move
        }
        draw(_position, _size) {
            let nParticles = 30;
            let radiusParticle = 50;
            let particle = new Path2D();
            let gradient = goldenerHerbstAnimation.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            goldenerHerbstAnimation.crc2.save();
            goldenerHerbstAnimation.crc2.translate(_position.x, _position.y);
            goldenerHerbstAnimation.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                goldenerHerbstAnimation.crc2.save();
                let x = (Math.random() - 0.5) * _size.x;
                let y = -(Math.random()) * _size.y;
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