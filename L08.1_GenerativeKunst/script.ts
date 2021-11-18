namespace GenerativeKunst {
    let crc2: CanvasRenderingContext2D;
    window.addEventListener("load", handleLoad);



    function handleLoad(_event: Event): void {

        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!;
        for (let i: number = 0; i < 29; i++) {
            drawAngular();
            drawCircle();
        }
    }

    function drawAngular(): void {
        let randomColor: string = Math.floor(Math.random() * 16777215).toString(16);
        crc2.beginPath();
        crc2.moveTo(generateX(600), generateY(450));
        crc2.lineTo(generateX(600), generateY(450));
        crc2.lineTo(generateX(600), generateY(450));
        crc2.lineTo(generateX(600), generateY(450));
        crc2.lineTo(generateX(600), generateY(450));
        crc2.lineTo(generateX(600), generateY(450));
        crc2.lineTo(generateX(600), generateY(450));
        //crc2.closePath();

        crc2.fillStyle = "#" + randomColor;
        crc2.strokeStyle = "#" + randomColor;
        crc2.lineWidth = 2;
        crc2.stroke();
        crc2.fill();
    }


    function drawCircle(): void {
        let randomColor: string = Math.floor(Math.random() * 16777215).toString(16);
        crc2.beginPath();
        crc2.arc(generateX(600), generateY(450), generateCircleNum(50), 0, 2 * Math.PI);
        crc2.fillStyle = "#" + randomColor;
        crc2.strokeStyle = "#" + randomColor;
        crc2.lineWidth = 2;
        crc2.stroke();
        crc2.fill();

    }



    function generateX(_x: number): number {

        let x: number = Math.random() * _x;

        return x;

    }

    function generateY(_y: number): number {

        let y: number = Math.random() * _y;

        return y;

    }


    function generateCircleNum(_r: number): number {
        let r: number = Math.random() * _r;
        return r;
    }


}