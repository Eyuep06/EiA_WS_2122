/*
Aufgabe: <L11.1_GoldenerHerbstAdvanced>
Name: <Eyüp Öcal>
Matrikel: <268022>
Datum: <06.01.2022>
Quellen: <Mit Fatih zusammengearbeitet>
*/
namespace Advanced {
    export let crc2: CanvasRenderingContext2D;
    let cloud: Cloud;
    let imageBg: ImageData;
    let imgageMountain: ImageData;
    let imageHazelnut: ImageData;
    let imageSun: ImageData;
    let imageTree: ImageData;
    let squirrel: Squirrel;
    let colors: string[] = ["brown", "orange"];
    let moveables: Moveable[] = [];


    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!;
        let horizon: number = crc2.canvas.height * 0.62;
        drawBackground();
        drawSun(150, 150);
        drawMountains(0, horizon, 75, 200, "grey", "white");
        drawMountains(0, horizon, 50, 150, "grey", "lightgrey");
        drawTree(50, 450, 150, 100);
        drawTree(250, 350, 150, 100);
        drawTree(550, 400, 150, 100);
        createSquirrel();
        createCloud();
        createLeafs(10);


        canvas.addEventListener("mouseup", dropHazelnut);

        window.setInterval(update, 20);
    }

    function drawBackground(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.62, "white");
        gradient.addColorStop(1, "green");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        imageBg = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function drawSun(_positionX: number, _positionY: number): void {
        let r1: number = 30;
        let r2: number = 120;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "yellow");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        crc2.save();
        crc2.translate(_positionX, _positionY);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
        imageSun = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);

    }

    function drawMountains(_positionX: number, _positionY: number, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        let stepMin: number = 10;
        let stepMax: number = 150;
        let x: number = 0;

        crc2.save();
        crc2.translate(_positionX, _positionY);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
        imgageMountain = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
    }


    function drawTree(_positionX: number, _positionY: number, _sizeX: number, _sizeY: number): void {
        crc2.beginPath();
        crc2.fillStyle = "brown";
        crc2.fillRect(_positionX, _positionY, 50, 100);

        let nParticles: number = 45;
        let radiusParticle: number = 35;
        let particle: Path2D = new Path2D();

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        crc2.save();
        crc2.translate(_positionX, _positionY);
        crc2.fillStyle = "orange";

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _sizeX;
            let y: number = - (Math.random()) * _sizeY;
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
        imageTree = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function dropHazelnut(_event: MouseEvent): void {
        let hazelnutSpot: Vector = new Vector(_event.clientX, _event.clientY);
        console.log(hazelnutSpot);
        crc2.save();
        crc2.beginPath();
        crc2.arc(_event.clientX, _event.clientY, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.restore();
        // console.log(crc2);
        imageHazelnut = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);

    }




    function createCloud(): void {
        cloud = new Cloud();
        moveables.push(cloud);

    }

    function createSquirrel(): void {
        squirrel = new Squirrel();
        moveables.push(squirrel);
    }



    function createLeafs(nLeafs: number): void {
        for (let i: number = 0; i < nLeafs; i++) {
            let leaf: Leaf = new Leaf(colors[1]);
            moveables.push(leaf);
        }

        for (let i: number = 0; i < nLeafs; i++) {
            let leaf: Leaf = new Leaf(colors[0]);
            moveables.push(leaf);

        }
    }

    function update(): void {
        crc2.putImageData(imageBg, 0, 0);
        crc2.putImageData(imageSun, 0, 0);
        crc2.putImageData(imgageMountain, 0, 0);
        crc2.putImageData(imageTree, 0, 0);


        for (let i: number = 0; i < moveables.length; i++) {
            moveables[i].move(1 / 50, 0);
            moveables[i].draw();
        }
        crc2.putImageData(imageHazelnut, 0, 0);

    }

}

