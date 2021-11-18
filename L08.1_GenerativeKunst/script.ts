namespace GenerativeKunst {
    let crc2: CanvasRenderingContext2D;
    window.addEventListener("load", handleLoad);



    function handleLoad(_event: Event): void {

        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!;
        for (let i: number = 0; i < 29; i++) {
            // let x: number = Math.random() * 600;
            // let y: number = Math.random() * 450;
            drawAngular();
            drawCircle();
        }
    }

    function drawAngular(): void {
        let randomColor: string = Math.floor(Math.random() * 16777215).toString(16);
        // alle _x und _y bekommen die gleiche Zahl, wie kriegt jeder eine eigene random zahl
        crc2.beginPath();
        crc2.moveTo(Math.random() * 600, Math.random() * 450);
        crc2.lineTo(Math.random() * 600, Math.random() * 450);
        crc2.lineTo(Math.random() * 600, Math.random() * 450);
        crc2.lineTo(Math.random() * 600, Math.random() * 450);
        crc2.lineTo(Math.random() * 600, Math.random() * 450);
        crc2.lineTo(Math.random() * 600, Math.random() * 450);
        crc2.lineTo(Math.random() * 600, Math.random() * 450);
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
        crc2.arc(Math.random() * 600, Math.random() * 450, 50, 0, 2 * Math.PI);
        crc2.fillStyle = "#" + randomColor;
        crc2.strokeStyle = "#" + randomColor;
        crc2.lineWidth = 2;
        crc2.stroke();
        crc2.fill();

    }



   


}