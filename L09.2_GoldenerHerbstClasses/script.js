"use strict";
var goldenerHerbstAnimation;
(function (goldenerHerbstAnimation) {
    let leafs = [];
    let colors = ["brown", "orange"];
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        goldenerHerbstAnimation.crc2 = canvas.getContext("2d");
        let horizon = goldenerHerbstAnimation.crc2.canvas.height * 0.62;
        drawBackground();
        drawMountains(0, horizon, 75, 200, "grey", "white");
        drawMountains(0, horizon, 50, 150, "grey", "lightgrey");
        drawTree(50, 450, 150, 100);
        drawTree(250, 350, 150, 100);
        drawTree(550, 400, 150, 100);
        createLeafs(5);
        window.setInterval(update, 20);
    }
    function drawBackground() {
        let gradient = goldenerHerbstAnimation.crc2.createLinearGradient(0, 0, 0, goldenerHerbstAnimation.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.62, "white");
        gradient.addColorStop(1, "green");
        goldenerHerbstAnimation.crc2.fillStyle = gradient;
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
    }
    function createLeafs(nLeafs) {
        let randomColor = Math.floor(Math.random() * 2);
        for (let i = 0; i < nLeafs; i++) {
            let leaf = new goldenerHerbstAnimation.Leaf(colors[randomColor]);
            leafs.push(leaf);
        }
    }
    function update() {
        goldenerHerbstAnimation.crc2.fillRect(0, 0, goldenerHerbstAnimation.crc2.canvas.width, goldenerHerbstAnimation.crc2.canvas.height);
        for (let leaf of leafs) {
            leaf.move(1 / 50);
            leaf.draw();
        }
    }
})(goldenerHerbstAnimation || (goldenerHerbstAnimation = {}));
//# sourceMappingURL=script.js.map