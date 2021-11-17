namespace canvas {
let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.querySelector("canvas");
let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D> canvas.getContext("2d");
crc2.fillStyle = "#FF0000";
crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
crc2.strokeStyle = "#0000FF";

crc2.beginPath();
crc2.moveTo(75, 50);
crc2.lineTo(100, 75);
crc2.lineTo(100, 25);
crc2.lineTo(75, 50);
crc2.stroke();

// let path: Path2D = new Path2D();
// path.arc(60, 60, 50, 0, 2 * Math.PI);
// crc2.stroke(path);
// crc2.beginPath();
// crc2.moveTo(2.1, 1);
// crc2.lineTo(2.1, 10);
// crc2.moveTo(4.5, 1);
// crc2.lineTo(4.5, 10);
// crc2.moveTo(7.5, 1);
// crc2.lineTo(10.5, 10);
// crc2.stroke();

}