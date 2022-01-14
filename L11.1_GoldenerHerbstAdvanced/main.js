"use strict";
/*
Aufgabe: <L11.1_GoldenerHerbstAdvanced>
Name: <Eyüp Öcal>
Matrikel: <268022>
Datum: <14.01.2022>
Quellen: <Mit Fatih zusammengearbeitet>
Anmerkung: Code nicht fertig geworden
*/
var Advanced;
(function (Advanced) {
    let cloud;
    let imageBg;
    let imgageMountain;
    let imageSun;
    let imageTree;
    let squirrel;
    let colors = ["brown", "orange"];
    let moveables = [];
    let hazelnut;
    Advanced.hazelnutPositions = [];
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        Advanced.crc2 = canvas.getContext("2d");
        let horizon = Advanced.crc2.canvas.height * 0.62;
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
        canvas.addEventListener("mouseup", createHazelnut);
        window.setInterval(update, 20);
    }
    function drawBackground() {
        let gradient = Advanced.crc2.createLinearGradient(0, 0, 0, Advanced.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.62, "white");
        gradient.addColorStop(1, "green");
        Advanced.crc2.fillStyle = gradient;
        Advanced.crc2.fillRect(0, 0, Advanced.crc2.canvas.width, Advanced.crc2.canvas.height);
        imageBg = Advanced.crc2.getImageData(0, 0, Advanced.crc2.canvas.width, Advanced.crc2.canvas.height);
    }
    function drawSun(_positionX, _positionY) {
        let r1 = 30;
        let r2 = 120;
        let gradient = Advanced.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "yellow");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        Advanced.crc2.save();
        Advanced.crc2.translate(_positionX, _positionY);
        Advanced.crc2.fillStyle = gradient;
        Advanced.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        Advanced.crc2.fill();
        Advanced.crc2.restore();
        imageSun = Advanced.crc2.getImageData(0, 0, Advanced.crc2.canvas.width, Advanced.crc2.canvas.height);
    }
    function drawMountains(_positionX, _positionY, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 10;
        let stepMax = 150;
        let x = 0;
        Advanced.crc2.save();
        Advanced.crc2.translate(_positionX, _positionY);
        Advanced.crc2.beginPath();
        Advanced.crc2.moveTo(0, 0);
        Advanced.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            Advanced.crc2.lineTo(x, y);
        } while (x < Advanced.crc2.canvas.width);
        Advanced.crc2.lineTo(x, 0);
        Advanced.crc2.closePath();
        let gradient = Advanced.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        Advanced.crc2.fillStyle = gradient;
        Advanced.crc2.fill();
        Advanced.crc2.restore();
        imgageMountain = Advanced.crc2.getImageData(0, 0, Advanced.crc2.canvas.width, Advanced.crc2.canvas.height);
    }
    function drawTree(_positionX, _positionY, _sizeX, _sizeY) {
        Advanced.crc2.beginPath();
        Advanced.crc2.fillStyle = "brown";
        Advanced.crc2.fillRect(_positionX, _positionY, 50, 100);
        let nParticles = 45;
        let radiusParticle = 35;
        let particle = new Path2D();
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        Advanced.crc2.save();
        Advanced.crc2.translate(_positionX, _positionY);
        Advanced.crc2.fillStyle = "orange";
        for (let drawn = 0; drawn < nParticles; drawn++) {
            Advanced.crc2.save();
            let x = (Math.random() - 0.5) * _sizeX;
            let y = -(Math.random()) * _sizeY;
            Advanced.crc2.translate(x, y);
            Advanced.crc2.fill(particle);
            Advanced.crc2.restore();
        }
        Advanced.crc2.restore();
        imageTree = Advanced.crc2.getImageData(0, 0, Advanced.crc2.canvas.width, Advanced.crc2.canvas.height);
    }
    function createHazelnut(_event) {
        hazelnut = new Advanced.Hazelnut(_event.clientX, _event.clientY);
        moveables.push(hazelnut);
        let hazelnutSpot = new Advanced.Vector(_event.clientX, _event.clientY);
        Advanced.hazelnutPositions.push(hazelnutSpot);
        console.log(Advanced.hazelnutPositions[0]);
    }
    function createCloud() {
        cloud = new Advanced.Cloud();
        moveables.push(cloud);
    }
    function createSquirrel() {
        squirrel = new Advanced.Squirrel();
        moveables.push(squirrel);
    }
    function createLeafs(nLeafs) {
        for (let i = 0; i < nLeafs; i++) {
            let leaf = new Advanced.Leaf(colors[1]);
            moveables.push(leaf);
        }
        for (let i = 0; i < nLeafs; i++) {
            let leaf = new Advanced.Leaf(colors[0]);
            moveables.push(leaf);
        }
    }
    function update() {
        Advanced.crc2.putImageData(imageBg, 0, 0);
        Advanced.crc2.putImageData(imageSun, 0, 0);
        Advanced.crc2.putImageData(imgageMountain, 0, 0);
        Advanced.crc2.putImageData(imageTree, 0, 0);
        for (let i = 0; i < moveables.length; i++) {
            moveables[i].move(1 / 50, 0);
            moveables[i].draw();
        }
    }
})(Advanced || (Advanced = {}));
//# sourceMappingURL=main.js.map