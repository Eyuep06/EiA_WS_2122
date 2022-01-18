"use strict";
/*
Aufgabe: <L10.2_GoldenerHerbstPolymorphie>
Name: <Eyüp Öcal>
Matrikel: <268022>
Datum: <06.01.2022>
Quellen: <Mit Fatih zusammengearbeitet und sein Eichhörnchen geklaut>
*/
var L11_2;
(function (L11_2) {
    let cloud;
    let imageBg;
    let imgageMountain;
    let imageSun;
    let imageTree;
    let squirrel;
    let colors = ["brown", "orange"];
    let moveables = [];
    let keyPressed = false;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        L11_2.crc2 = canvas.getContext("2d");
        let horizon = L11_2.crc2.canvas.height * 0.62;
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
        document.addEventListener("keypress", hndlKeypress);
        window.setInterval(update, 20);
    }
    function drawBackground() {
        let gradient = L11_2.crc2.createLinearGradient(0, 0, 0, L11_2.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.62, "white");
        gradient.addColorStop(1, "green");
        L11_2.crc2.fillStyle = gradient;
        L11_2.crc2.fillRect(0, 0, L11_2.crc2.canvas.width, L11_2.crc2.canvas.height);
        imageBg = L11_2.crc2.getImageData(0, 0, L11_2.crc2.canvas.width, L11_2.crc2.canvas.height);
    }
    function drawSun(_positionX, _positionY) {
        let r1 = 30;
        let r2 = 120;
        let gradient = L11_2.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "yellow");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        L11_2.crc2.save();
        L11_2.crc2.translate(_positionX, _positionY);
        L11_2.crc2.fillStyle = gradient;
        L11_2.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L11_2.crc2.fill();
        L11_2.crc2.restore();
        imageSun = L11_2.crc2.getImageData(0, 0, L11_2.crc2.canvas.width, L11_2.crc2.canvas.height);
    }
    function drawMountains(_positionX, _positionY, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 10;
        let stepMax = 150;
        let x = 0;
        L11_2.crc2.save();
        L11_2.crc2.translate(_positionX, _positionY);
        L11_2.crc2.beginPath();
        L11_2.crc2.moveTo(0, 0);
        L11_2.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L11_2.crc2.lineTo(x, y);
        } while (x < L11_2.crc2.canvas.width);
        L11_2.crc2.lineTo(x, 0);
        L11_2.crc2.closePath();
        let gradient = L11_2.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        L11_2.crc2.fillStyle = gradient;
        L11_2.crc2.fill();
        L11_2.crc2.restore();
        imgageMountain = L11_2.crc2.getImageData(0, 0, L11_2.crc2.canvas.width, L11_2.crc2.canvas.height);
    }
    function drawTree(_positionX, _positionY, _sizeX, _sizeY) {
        L11_2.crc2.beginPath();
        L11_2.crc2.fillStyle = "brown";
        L11_2.crc2.fillRect(_positionX, _positionY, 50, 100);
        let nParticles = 40;
        let radiusParticle = 30;
        let particle = new Path2D();
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        L11_2.crc2.save();
        L11_2.crc2.translate(_positionX, _positionY);
        L11_2.crc2.fillStyle = "orange";
        for (let drawn = 0; drawn < nParticles; drawn++) {
            L11_2.crc2.save();
            let x = (Math.random() - 0.5) * _sizeX;
            let y = -(Math.random()) * _sizeY;
            L11_2.crc2.translate(x, y);
            L11_2.crc2.fill(particle);
            L11_2.crc2.restore();
        }
        L11_2.crc2.restore();
        imageTree = L11_2.crc2.getImageData(0, 0, L11_2.crc2.canvas.width, L11_2.crc2.canvas.height);
    }
    function createCloud() {
        cloud = new L11_2.Cloud();
        cloud.draw();
        moveables.push(cloud);
    }
    function createSquirrel() {
        squirrel = new L11_2.Squirrel();
        squirrel.draw();
        moveables.push(squirrel);
    }
    function createLeafs(nLeafs) {
        for (let i = 0; i < nLeafs; i++) {
            let leaf = new L11_2.Leaf(colors[1]);
            moveables.push(leaf);
            //console.log(leafs);
        }
        for (let i = 0; i < nLeafs; i++) {
            let leaf = new L11_2.Leaf(colors[0]);
            moveables.push(leaf);
            //console.log(leafs);
        }
    }
    function hndlKeypress(_event) {
        keyPressed = true;
        console.log(keyPressed);
        let sampleWind = new Audio("CD_STRONG WIND THROUGH THICK TREES 01_02_25_13.mp3");
        sampleWind.play();
    }
    function update() {
        L11_2.crc2.putImageData(imageBg, 0, 0);
        L11_2.crc2.putImageData(imageSun, 0, 0);
        L11_2.crc2.putImageData(imgageMountain, 0, 0);
        L11_2.crc2.putImageData(imageTree, 0, 0);
        for (let leaf of moveables) {
            leaf.move(1 / 50, 0);
            leaf.draw();
        }
        cloud.draw();
        cloud.move();
        squirrel.draw();
        squirrel.move();
    }
    console.log(moveables);
})(L11_2 || (L11_2 = {}));
//# sourceMappingURL=main.js.map