namespace L11_2 {
    export class Moveable {
        velocity: Vector;
        position: Vector;

        constructor(_x: number, _y: number) {
            
            this.position = new Vector(_x, _y);
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200);
        }

        move(_timeslice: number, _yVelocity: number): void {
            let offset: Vector = new Vector(this.velocity.x, _yVelocity);
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
            //
        }
    }

}