namespace L11_2 {
    export class Squirrel extends Moveable {


        constructor() {
            super(50, 500);
            this.velocity.randomForSquirrel(100, 200);
        }

        draw(): void {
            crc2.save();

            //Schwanz
            crc2.beginPath();
            crc2.ellipse(this.position.x - 20, this.position.y + 30, 24, 5, Math.PI / 3, 0, 2 * Math.PI);
            crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            //Arm2
            crc2.beginPath();
            crc2.ellipse(this.position.x + 20, this.position.y + 30, 10, 4, Math.PI / 5, 0, 2 * Math.PI);
            crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            //Bein2
            crc2.beginPath();
            crc2.ellipse(this.position.x + 14, this.position.y + 48, 14, 5, Math.PI / 3, 0, 2 * Math.PI);
            crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            //Körper
            crc2.beginPath();
            crc2.ellipse(this.position.x, this.position.y + 30, 25, 19, Math.PI / 2.2, 0, 2 * Math.PI);
            crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            //Kopf
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 12, 0, 2 * Math.PI);
            crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(this.position.x + 4, this.position.y - 3, 2, 0, 2 * Math.PI);
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            //Arm1
            crc2.beginPath();
            crc2.ellipse(this.position.x + 20, this.position.y + 35, 10, 4, Math.PI / 5, 0, 2 * Math.PI);
            crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            //Bein1
            crc2.beginPath();
            crc2.ellipse(this.position.x + 10, this.position.y + 50, 14, 5, Math.PI / 3, 0, 2 * Math.PI);
            crc2.fillStyle = "hsla(17, 72%, 36%, 1)";
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            crc2.restore();
        }


        move(): void {
            super.move(1 / 100, 0);
        }
    
    }






}


