"use strict";
/*
Aufgabe: <L09.1_OldMacDonaldsFarm>
Name: <Eyüp Öcal>
Matrikel: <268022>
Datum: <10.12.2021>
Quellen: <Mit Fatih zusammengearbeitet>
*/
var goldenerHerbstAnimation;
(function (goldenerHerbstAnimation) {
    let imageBg;
    let imgageMountain;
    let imageSun;
    let imageTree;
    let leafs = [];
    let colors = ["brown", "orange"];
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        goldenerHerbstAnimation.crc2 = canvas.getContext("2d");
        let horizon = goldenerHerbstAnimation.crc2.canvas.height * 0.62;
        drawBackground();
        drawSun(150, 150);
        drawMountains(0, horizon, 75, 200, "grey", "white");
        drawMountains(0, horizon, 50, 150, "grey", "lightgrey");
        drawTree(50, 450, 150, 100);
        drawTree(250, 350, 150, 100);
        drawTree(550, 400, 150, 100);
        createLeafs(10);
        window.setInterval(update, 20);
    }
    function drawBackground() {
        let gradient = goldenerHerbstAnimation.crc2.createLinearGradient(0, 0, 0, goldenerHerbstAnimation.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.62, "white");
        gradient.addColorStop(1, "green");
        goldenerHerbstAnimation.crc2.fillStyle = gradient;
        goldenerHerbstAnimation.crc2.fillRect(0, 0, goldenerHerbstAnimation.crc2.canvas.width, goldenerHerbstAnimation.crc2.canvas.height);
        imageBg = goldenerHerbstAnimation.crc2.getImageData(0, 0, goldenerHerbstAnimation.crc2.canvas.width, goldenerHerbstAnimation.crc2.canvas.height);
    }
    function drawSun(_positionX, _positionY) {
        let r1 = 30;
        let r2 = 120;
        let gradient = goldenerHerbstAnimation.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "yellow");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        goldenerHerbstAnimation.crc2.save();
        goldenerHerbstAnimation.crc2.translate(_positionX, _positionY);
        goldenerHerbstAnimation.crc2.fillStyle = gradient;
        goldenerHerbstAnimation.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        goldenerHerbstAnimation.crc2.fill();
        goldenerHerbstAnimation.crc2.restore();
        imageSun = goldenerHerbstAnimation.crc2.getImageData(0, 0, goldenerHerbstAnimation.crc2.canvas.width, goldenerHerbstAnimation.crc2.canvas.height);
    }
    function drawMountains(_positionX, _positionY, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 10;
        let stepMax = 150;
        let x = 0;
        goldenerHerbstAnimation.crc2.save();
        goldenerHerbstAnimation.crc2.translate(_positionX, _positionY);
        goldenerHerbstAnimation.crc2.beginPath();
        goldenerHerbstAnimation.crc2.moveTo(0, 0);
        goldenerHerbstAnimation.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            goldenerHerbstAnimation.crc2.lineTo(x, y);
        } while (x < goldenerHerbstAnimation.crc2.canvas.width);
        goldenerHerbstAnimation.crc2.lineTo(x, 0);
        goldenerHerbstAnimation.crc2.closePath();
        let gradient = goldenerHerbstAnimation.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        goldenerHerbstAnimation.crc2.fillStyle = gradient;
        goldenerHerbstAnimation.crc2.fill();
        goldenerHerbstAnimation.crc2.restore();
        imgageMountain = goldenerHerbstAnimation.crc2.getImageData(0, 0, goldenerHerbstAnimation.crc2.canvas.width, goldenerHerbstAnimation.crc2.canvas.height);
    }
    function drawTree(_positionX, _positionY, _sizeX, _sizeY) {
        goldenerHerbstAnimation.crc2.beginPath();
        goldenerHerbstAnimation.crc2.fillStyle = "brown";
        goldenerHerbstAnimation.crc2.fillRect(_positionX, _positionY, 50, 100);
        let nParticles = 40;
        let radiusParticle = 30;
        let particle = new Path2D();
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        goldenerHerbstAnimation.crc2.save();
        goldenerHerbstAnimation.crc2.translate(_positionX, _positionY);
        goldenerHerbstAnimation.crc2.fillStyle = "orange";
        for (let drawn = 0; drawn < nParticles; drawn++) {
            goldenerHerbstAnimation.crc2.save();
            let x = (Math.random() - 0.5) * _sizeX;
            let y = -(Math.random()) * _sizeY;
            goldenerHerbstAnimation.crc2.translate(x, y);
            goldenerHerbstAnimation.crc2.fill(particle);
            goldenerHerbstAnimation.crc2.restore();
        }
        goldenerHerbstAnimation.crc2.restore();
        imageTree = goldenerHerbstAnimation.crc2.getImageData(0, 0, goldenerHerbstAnimation.crc2.canvas.width, goldenerHerbstAnimation.crc2.canvas.height);
    }
    function createLeafs(nLeafs) {
        for (let i = 0; i < nLeafs; i++) {
            let leaf = new goldenerHerbstAnimation.Leaf(colors[1]);
            leafs.push(leaf);
            console.log(leafs);
        }
        for (let i = 0; i < nLeafs; i++) {
            let leaf = new goldenerHerbstAnimation.Leaf(colors[0]);
            leafs.push(leaf);
            console.log(leafs);
        }
    }
    function update() {
        goldenerHerbstAnimation.crc2.putImageData(imageBg, 0, 0);
        goldenerHerbstAnimation.crc2.putImageData(imageSun, 0, 0);
        goldenerHerbstAnimation.crc2.putImageData(imgageMountain, 0, 0);
        goldenerHerbstAnimation.crc2.putImageData(imageTree, 0, 0);
        for (let leaf of leafs) {
            leaf.move(1 / 50);
            leaf.draw();
        }
        let cloud = new goldenerHerbstAnimation.Cloud();
        cloud.draw();
    }
})(goldenerHerbstAnimation || (goldenerHerbstAnimation = {}));
//# sourceMappingURL=script.js.map