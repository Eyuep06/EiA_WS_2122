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
            let leaf: Path2D = new Path2D();
            crc2.beginPath();
            leaf.arc(0, 0, 16, 0, Math.PI * .25);
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = this.color;
            crc2.fill(leaf);
            crc2.stroke();
            crc2.restore();



        }

        // changeDirection(_timeslice: number): void {
        //     console.log("change direction");

        // }
    }




}