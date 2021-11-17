namespace GenerativeKunst {
    console.log("hallo");
    let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.querySelector("canvas");
    let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D> canvas.getContext("2d");
    window.addEventListener ("load", handleLoad);
    
    

    function handleLoad(_event: Event): void {
        let x: number = Math.random() * 800;
        let y: number = Math.random() * 600;
        drawArt(x, y);
    }

    function drawArt(_x: number, _y: number): void {
    crc2.beginPath();
    crc2.moveTo(_x, _y - 30);
    crc2.lineTo(_x - 60, _y);
    crc2.lineTo(_x, _y);
    crc2.closePath();
    
    crc2.fillStyle = "#FF0000"; //randomColor
    crc2.strokeStyle = "blue"; //randomColor
    crc2.lineWidth = 2 ; //randomNum
    crc2.stroke();
    crc2.fill();
    }




}