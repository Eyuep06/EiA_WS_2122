namespace Advanced {
    export class Hazelnut extends Moveable {

        constructor(_positionX: number, _positionY: number) {
            super(_positionX, _positionY);
            this.velocity.random(0, 0);

        }

        draw(): void {
            crc2.save();
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y , 5, 0, 2 * Math.PI);
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.restore();
        }
    }
}