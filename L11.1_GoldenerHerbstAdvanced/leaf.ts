namespace Advanced {
    export class Leaf extends Moveable {
       private color: string;


        constructor(_color: string) {
            super(0, 0);
            this.color = _color;
        }

        public draw(): void {
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




        public move(): void {
            super.move(1 / 50, this.velocity.y);
        }


    }

}
