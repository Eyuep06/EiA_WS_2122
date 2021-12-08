namespace goldenerHerbstAnimation {
    export let crc2: CanvasRenderingContext2D;
    let leafs: Leaf[] = [];
    let colors: string[] = ["brown", "orange"];

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!;
        let horizon: number = crc2.canvas.height * 0.62;
        drawBackground();
        drawMountains(0, horizon, 75, 200, "grey", "white");
        drawMountains(0, horizon, 50, 150, "grey", "lightgrey");
        drawTree(50, 450, 150, 100);
        drawTree(250, 350, 150, 100);
        drawTree(550, 400, 150, 100);

        createLeafs(5);

        window.setInterval(update, 20);
    }

    function drawBackground(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.62, "white");
        gradient.addColorStop(1, "green");

        crc2.fillStyle = gradient;
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
    }


    function drawTree(_positionX: number, _positionY: number, _sizeX: number, _sizeY: number): void {
        crc2.beginPath();
        crc2.fillStyle = "brown";
        crc2.fillRect(_positionX, _positionY, 50, 100);

        let nParticles: number = 40;
        let radiusParticle: number = 30;
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
    }


    function createLeafs(nLeafs: number): void {
        let randomColor: number = Math.floor(Math.random() * 2);
        for (let i: number = 0; i < nLeafs; i++) {
            let leaf: Leaf = new Leaf(colors[randomColor]);
            leafs.push(leaf);
        }
    }

    function update(): void {
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        for (let leaf of leafs) {
            leaf.move(1 / 50);
            leaf.draw();
        }
    }


}