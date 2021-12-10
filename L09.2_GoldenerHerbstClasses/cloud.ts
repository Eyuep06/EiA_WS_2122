namespace goldenerHerbstAnimation {
    export class Cloud {
        postition: Vector;
        startingPosition: Vector;

        constructor(_startingPosition: Vector) {
            this.startingPosition = _startingPosition;
        }

        move(_timeslice: number): void {
            //move
        }

        draw(_position: Vector, _size: Vector): void {

            let nParticles: number = 30;
            let radiusParticle: number = 50;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.fillStyle = gradient;

            for (let drawn: number = 0; drawn < nParticles; drawn++) {
                crc2.save();
                let x: number = (Math.random() - 0.5) * _size.x;
                let y: number = - (Math.random()) * _size.y;
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
            }

            crc2.restore();
        }
    }
}
