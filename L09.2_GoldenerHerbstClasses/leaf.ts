namespace goldenerHerbstAnimation {
    export class Leaf {
        position: Vector;
        velocity: Vector;
        color: string;

        constructor(_color: string) {
            this.position = new Vector(0, 0);
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200);

            this.color = _color;
        }


        move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;

        }

        draw(): void {
            console.log("draw");
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(300, 150);
            crc2.lineTo(450, 344);
            crc2.fillStyle = this.color;
            crc2.fill();
            crc2.closePath();
            crc2.stroke();

        }

        changeDirection(_timeslice: number): void {
            console.log("change direction");

        }
    }




}