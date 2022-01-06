"use strict";
var Polymorphie;
(function (Polymorphie) {
    let cloud;
    let imageBg;
    let imgageMountain;
    let imageSun;
    let imageTree;
    let squirrel;
    let colors = ["brown", "orange"];
    let moveables = [];
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        Polymorphie.crc2 = canvas.getContext("2d");
        let horizon = Polymorphie.crc2.canvas.height * 0.62;
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
        window.setInterval(update, 20);
    }
    function drawBackground() {
        let gradient = Polymorphie.crc2.createLinearGradient(0, 0, 0, Polymorphie.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.62, "white");
        gradient.addColorStop(1, "green");
        Polymorphie.crc2.fillStyle = gradient;
        Polymorphie.crc2.fillRect(0, 0, Polymorphie.crc2.canvas.width, Polymorphie.crc2.canvas.height);
        imageBg = Polymorphie.crc2.getImageData(0, 0, Polymorphie.crc2.canvas.width, Polymorphie.crc2.canvas.height);
    }
    function drawSun(_positionX, _positionY) {
        let r1 = 30;
        let r2 = 120;
        let gradient = Polymorphie.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "yellow");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        Polymorphie.crc2.save();
        Polymorphie.crc2.translate(_positionX, _positionY);
        Polymorphie.crc2.fillStyle = gradient;
        Polymorphie.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        Polymorphie.crc2.fill();
        Polymorphie.crc2.restore();
        imageSun = Polymorphie.crc2.getImageData(0, 0, Polymorphie.crc2.canvas.width, Polymorphie.crc2.canvas.height);
    }
    function drawMountains(_positionX, _positionY, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 10;
        let stepMax = 150;
        let x = 0;
        Polymorphie.crc2.save();
        Polymorphie.crc2.translate(_positionX, _positionY);
        Polymorphie.crc2.beginPath();
        Polymorphie.crc2.moveTo(0, 0);
        Polymorphie.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            Polymorphie.crc2.lineTo(x, y);
        } while (x < Polymorphie.crc2.canvas.width);
        Polymorphie.crc2.lineTo(x, 0);
        Polymorphie.crc2.closePath();
        let gradient = Polymorphie.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        Polymorphie.crc2.fillStyle = gradient;
        Polymorphie.crc2.fill();
        Polymorphie.crc2.restore();
        imgageMountain = Polymorphie.crc2.getImageData(0, 0, Polymorphie.crc2.canvas.width, Polymorphie.crc2.canvas.height);
    }
    function drawTree(_positionX, _positionY, _sizeX, _sizeY) {
        Polymorphie.crc2.beginPath();
        Polymorphie.crc2.fillStyle = "brown";
        Polymorphie.crc2.fillRect(_positionX, _positionY, 50, 100);
        let nParticles = 40;
        let radiusParticle = 30;
        let particle = new Path2D();
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        Polymorphie.crc2.save();
        Polymorphie.crc2.translate(_positionX, _positionY);
        Polymorphie.crc2.fillStyle = "orange";
        for (let drawn = 0; drawn < nParticles; drawn++) {
            Polymorphie.crc2.save();
            let x = (Math.random() - 0.5) * _sizeX;
            let y = -(Math.random()) * _sizeY;
            Polymorphie.crc2.translate(x, y);
            Polymorphie.crc2.fill(particle);
            Polymorphie.crc2.restore();
        }
        Polymorphie.crc2.restore();
        imageTree = Polymorphie.crc2.getImageData(0, 0, Polymorphie.crc2.canvas.width, Polymorphie.crc2.canvas.height);
    }
    function createCloud() {
        cloud = new Polymorphie.Cloud();
        cloud.draw();
        moveables.push(cloud);
    }
    function createSquirrel() {
        squirrel = new Polymorphie.Squirrel();
        squirrel.draw();
        moveables.push(squirrel);
    }
    function createLeafs(nLeafs) {
        for (let i = 0; i < nLeafs; i++) {
            let leaf = new Polymorphie.Leaf(colors[1]);
            moveables.push(leaf);
            //console.log(leafs);
        }
        for (let i = 0; i < nLeafs; i++) {
            let leaf = new Polymorphie.Leaf(colors[0]);
            moveables.push(leaf);
            //console.log(leafs);
        }
    }
    function update() {
        Polymorphie.crc2.putImageData(imageBg, 0, 0);
        Polymorphie.crc2.putImageData(imageSun, 0, 0);
        Polymorphie.crc2.putImageData(imgageMountain, 0, 0);
        Polymorphie.crc2.putImageData(imageTree, 0, 0);
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
})(Polymorphie || (Polymorphie = {}));
//# sourceMappingURL=main.js.map